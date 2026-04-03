#!/usr/bin/env node
/**
 * Extract Suzuka circuit outline from OpenStreetMap via Overpass API,
 * project GPS coordinates into a 280×180 SVG viewbox, and output an
 * SVG path string with Catmull-Rom → cubic-Bézier smoothing.
 *
 * Usage:  node scripts/extract-suzuka-osm.mjs
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Overpass query: Suzuka Circuit raceway relation
// Relation 2536990 is the Suzuka International Racing Course
const QUERY = `
[out:json][timeout:30];
(
  way["name"~"Suzuka"]["sport"="motor"]["leisure"="track"];
  relation["name"~"Suzuka"]["sport"="motor"]["leisure"="track"];
);
out body;
>;
out skel qt;
`;

async function fetchOSMData() {
  const params = new URLSearchParams({ data: QUERY });
  const res = await fetch(`${OVERPASS_URL}?${params.toString()}`);
  if (!res.ok) throw new Error(`Overpass API error: ${res.status}`);
  return res.json();
}

function extractCoords(data) {
  // Build node lookup
  const nodes = {};
  for (const el of data.elements) {
    if (el.type === 'node') {
      nodes[el.id] = { lat: el.lat, lon: el.lon };
    }
  }

  // Find the way(s) that form the circuit
  const ways = data.elements.filter(el => el.type === 'way');
  const relations = data.elements.filter(el => el.type === 'relation');

  let orderedNodeIds = [];

  if (relations.length > 0) {
    // Use relation members to get ordered ways
    const rel = relations[0];
    console.log(`Using relation: ${rel.id} (${rel.tags?.name || 'unnamed'})`);
    const wayMap = {};
    for (const w of ways) {
      wayMap[w.id] = w.nodes;
    }

    // Order the way segments
    for (const member of rel.members) {
      if (member.type === 'way' && wayMap[member.ref]) {
        const wayNodes = wayMap[member.ref];
        if (orderedNodeIds.length === 0) {
          orderedNodeIds.push(...wayNodes);
        } else {
          // Check if we need to reverse
          const lastId = orderedNodeIds[orderedNodeIds.length - 1];
          if (wayNodes[0] === lastId) {
            orderedNodeIds.push(...wayNodes.slice(1));
          } else if (wayNodes[wayNodes.length - 1] === lastId) {
            orderedNodeIds.push(...[...wayNodes].reverse().slice(1));
          } else {
            orderedNodeIds.push(...wayNodes);
          }
        }
      }
    }
  } else if (ways.length > 0) {
    // Single way or multiple ways — try to chain them
    console.log(`Found ${ways.length} way(s), no relation`);
    if (ways.length === 1) {
      orderedNodeIds = ways[0].nodes;
    } else {
      // Chain ways by matching endpoints
      const remaining = [...ways];
      orderedNodeIds = [...remaining.shift().nodes];

      while (remaining.length > 0) {
        const lastId = orderedNodeIds[orderedNodeIds.length - 1];
        const firstId = orderedNodeIds[0];
        let found = false;

        for (let i = 0; i < remaining.length; i++) {
          const w = remaining[i];
          if (w.nodes[0] === lastId) {
            orderedNodeIds.push(...w.nodes.slice(1));
            remaining.splice(i, 1);
            found = true;
            break;
          } else if (w.nodes[w.nodes.length - 1] === lastId) {
            orderedNodeIds.push(...[...w.nodes].reverse().slice(1));
            remaining.splice(i, 1);
            found = true;
            break;
          } else if (w.nodes[w.nodes.length - 1] === firstId) {
            orderedNodeIds.unshift(...w.nodes.slice(0, -1));
            remaining.splice(i, 1);
            found = true;
            break;
          } else if (w.nodes[0] === firstId) {
            orderedNodeIds.unshift(...[...w.nodes].reverse().slice(0, -1));
            remaining.splice(i, 1);
            found = true;
            break;
          }
        }

        if (!found) {
          console.warn('Could not chain all ways — some segments may be disconnected');
          // Append remaining
          for (const w of remaining) {
            orderedNodeIds.push(...w.nodes);
          }
          break;
        }
      }
    }
  }

  // Convert to coordinate pairs
  const coords = orderedNodeIds
    .map(id => nodes[id])
    .filter(Boolean);

  console.log(`Extracted ${coords.length} coordinate points`);
  return coords;
}

function projectToSVG(coords, width = 280, height = 180, padding = 15) {
  const lats = coords.map(c => c.lat);
  const lons = coords.map(c => c.lon);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  // Mercator-like projection (good enough at this scale)
  const latCenter = (minLat + maxLat) / 2;
  const cosLat = Math.cos(latCenter * Math.PI / 180);

  const dLon = (maxLon - minLon) * cosLat;
  const dLat = maxLat - minLat;

  const usableW = width - 2 * padding;
  const usableH = height - 2 * padding;

  // Maintain aspect ratio
  const scaleX = usableW / dLon;
  const scaleY = usableH / dLat;
  const scale = Math.min(scaleX, scaleY);

  // Center offset
  const projW = dLon * scale;
  const projH = dLat * scale;
  const offsetX = padding + (usableW - projW) / 2;
  const offsetY = padding + (usableH - projH) / 2;

  return coords.map(c => ({
    x: offsetX + (c.lon - minLon) * cosLat * scale,
    // SVG y-axis is inverted relative to latitude
    y: offsetY + (maxLat - c.lat) * scale,
    lat: c.lat,
    lon: c.lon,
  }));
}

/**
 * Downsample points using Ramer-Douglas-Peucker algorithm
 */
function rdpSimplify(points, epsilon) {
  if (points.length <= 2) return points;

  let dmax = 0;
  let index = 0;
  const end = points.length - 1;

  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(points[i], points[0], points[end]);
    if (d > dmax) {
      index = i;
      dmax = d;
    }
  }

  if (dmax > epsilon) {
    const left = rdpSimplify(points.slice(0, index + 1), epsilon);
    const right = rdpSimplify(points.slice(index), epsilon);
    return [...left.slice(0, -1), ...right];
  } else {
    return [points[0], points[end]];
  }
}

function perpendicularDistance(point, lineStart, lineEnd) {
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  const lenSq = dx * dx + dy * dy;

  if (lenSq === 0) {
    const ex = point.x - lineStart.x;
    const ey = point.y - lineStart.y;
    return Math.sqrt(ex * ex + ey * ey);
  }

  const num = Math.abs(dy * point.x - dx * point.y + lineEnd.x * lineStart.y - lineEnd.y * lineStart.x);
  return num / Math.sqrt(lenSq);
}

/**
 * Convert points to a smooth SVG path using Catmull-Rom → cubic Bézier conversion
 */
function catmullRomToBezierPath(points, closed = true, tension = 0.5) {
  const n = points.length;
  if (n < 3) {
    return `M ${points.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`;
  }

  const alpha = tension;
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

  for (let i = 0; i < n - 1; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    const cp1x = p1.x + (p2.x - p0.x) / (6 / alpha);
    const cp1y = p1.y + (p2.y - p0.y) / (6 / alpha);
    const cp2x = p2.x - (p3.x - p1.x) / (6 / alpha);
    const cp2y = p2.y - (p3.y - p1.y) / (6 / alpha);

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  if (closed) {
    // Close back to start
    const i = n - 1;
    const p0 = points[i - 1];
    const p1 = points[i];
    const p2 = points[0];
    const p3 = points[1];

    const cp1x = p1.x + (p2.x - p0.x) / (6 / alpha);
    const cp1y = p1.y + (p2.y - p0.y) / (6 / alpha);
    const cp2x = p2.x - (p3.x - p1.x) / (6 / alpha);
    const cp2y = p2.y - (p3.y - p1.y) / (6 / alpha);

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    d += ' Z';
  }

  return d;
}

/**
 * Map real grandstand GPS locations to SVG coordinates
 */
function projectGrandstands(svgPoints, coords, width, height, padding) {
  // Known approximate GPS positions of Suzuka grandstands
  const grandstands = {
    'suz-main': { lat: 34.8432, lng: 136.5410, name: 'Main Grandstand', shortName: 'MAIN' },
    'suz-esses': { lat: 34.8460, lng: 136.5340, name: 'S-Curves', shortName: 'ESSES' },
    'suz-130r': { lat: 34.8408, lng: 136.5395, name: '130R', shortName: '130R' },
    'suz-spoon': { lat: 34.8385, lng: 136.5310, name: 'Spoon Curve', shortName: 'SPOON' },
  };

  const lats = coords.map(c => c.lat);
  const lons = coords.map(c => c.lon);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  const latCenter = (minLat + maxLat) / 2;
  const cosLat = Math.cos(latCenter * Math.PI / 180);
  const dLon = (maxLon - minLon) * cosLat;
  const dLat = maxLat - minLat;

  const usableW = width - 2 * padding;
  const usableH = height - 2 * padding;
  const scaleX = usableW / dLon;
  const scaleY = usableH / dLat;
  const scale = Math.min(scaleX, scaleY);
  const projW = dLon * scale;
  const projH = dLat * scale;
  const offsetX = padding + (usableW - projW) / 2;
  const offsetY = padding + (usableH - projH) / 2;

  const result = {};
  for (const [id, gs] of Object.entries(grandstands)) {
    const x = offsetX + (gs.lng - minLon) * cosLat * scale;
    const y = offsetY + (maxLat - gs.lat) * scale;
    result[id] = { x: Math.round(x), y: Math.round(y), name: gs.name };
  }
  return result;
}

// ── Main ────────────────────────────────────────────────────────────────
async function main() {
  console.log('Fetching Suzuka circuit data from OpenStreetMap...');
  const osmData = await fetchOSMData();

  console.log(`Received ${osmData.elements.length} OSM elements`);

  const coords = extractCoords(osmData);
  if (coords.length === 0) {
    console.error('No coordinates found! Check the Overpass query.');
    process.exit(1);
  }

  const WIDTH = 280;
  const HEIGHT = 180;
  const PADDING = 15;

  // Project to SVG space
  const svgPoints = projectToSVG(coords, WIDTH, HEIGHT, PADDING);

  // Simplify with RDP (epsilon ~1.5px — keeps shape, removes noise)
  const simplified = rdpSimplify(svgPoints, 1.5);
  console.log(`Simplified from ${svgPoints.length} to ${simplified.length} points`);

  // Generate smooth SVG path
  const path = catmullRomToBezierPath(simplified, true, 0.5);

  // Project grandstand positions
  const grandstands = projectGrandstands(svgPoints, coords, WIDTH, HEIGHT, PADDING);

  console.log('\n═══════════════════════════════════════════════════');
  console.log('SUZUKA CIRCUIT — SVG PATH (280×180 viewbox)');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('path: `');
  // Break the path into lines of ~90 chars for readability
  const pathStr = path.replace(/\s+/g, ' ').trim();
  const segments = pathStr.split(/(?=C |L |M |Z)/);
  for (const seg of segments) {
    console.log('  ' + seg.trim());
  }
  console.log('`,\n');

  // Start-finish line (near Main grandstand)
  const mainGS = grandstands['suz-main'];
  console.log(`startFinish: { x1: ${mainGS.x - 15}, y1: ${mainGS.y}, x2: ${mainGS.x + 15}, y2: ${mainGS.y} },`);
  console.log(`label: { x: 140, y: 95 },\n`);

  console.log('GRANDSTAND POSITIONS (mapDot):');
  for (const [id, gs] of Object.entries(grandstands)) {
    console.log(`  ${id} (${gs.name}): { x: ${gs.x}, y: ${gs.y} }`);
  }

  // Also output a standalone SVG file for visual verification
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH * 3}" height="${HEIGHT * 3}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#1a1a2e" />
  <path d="${pathStr}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" />
  ${Object.entries(grandstands).map(([id, gs]) =>
    `<circle cx="${gs.x}" cy="${gs.y}" r="4" fill="#FFD700" />
  <text x="${gs.x + 6}" y="${gs.y + 3}" fill="white" font-size="7" font-family="sans-serif">${gs.name}</text>`
  ).join('\n  ')}
</svg>`;

  const fs = await import('fs');
  fs.writeFileSync('scripts/suzuka-preview.svg', svgContent);
  console.log('\n✓ Preview SVG written to scripts/suzuka-preview.svg');
  console.log('  Open it in a browser to verify the circuit shape.\n');

  // Output the raw point data for debugging
  console.log(`\nRaw simplified points (${simplified.length}):`);
  for (const p of simplified.slice(0, 10)) {
    console.log(`  (${p.x.toFixed(1)}, ${p.y.toFixed(1)})`);
  }
  if (simplified.length > 10) console.log(`  ... and ${simplified.length - 10} more`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
