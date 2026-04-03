#!/usr/bin/env node
/**
 * Extract Suzuka circuit outline from OpenStreetMap via Overpass API.
 * Uses a targeted query for the specific Suzuka circuit relation.
 *
 * Usage:  node scripts/extract-suzuka-osm2.mjs
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Direct query for the Suzuka circuit - use bbox to narrow the search
const QUERY = `
[out:json][timeout:60];
way(34.835,136.525,34.850,136.545)["leisure"="track"]["sport"="motor"];
(._;>;);
out body;
`;

async function fetchOSMData() {
  console.log('Sending Overpass query...');
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(QUERY)}`,
  });
  if (!res.ok) throw new Error(`Overpass API error: ${res.status} ${res.statusText}`);
  const text = await res.text();
  console.log(`Response size: ${text.length} bytes`);
  return JSON.parse(text);
}

function extractCoords(data) {
  const nodes = {};
  for (const el of data.elements) {
    if (el.type === 'node') {
      nodes[el.id] = { lat: el.lat, lon: el.lon };
    }
  }

  const ways = data.elements.filter(el => el.type === 'way');
  console.log(`Found ${ways.length} ways, ${Object.keys(nodes).length} nodes`);

  if (ways.length === 0) return [];

  // Try to chain all ways into a single loop
  let orderedNodeIds = [];

  if (ways.length === 1) {
    orderedNodeIds = ways[0].nodes;
  } else {
    // Chain ways
    const remaining = ways.map(w => ({ nodes: [...w.nodes], id: w.id }));
    orderedNodeIds = [...remaining.shift().nodes];

    let maxIter = remaining.length * remaining.length;
    while (remaining.length > 0 && maxIter-- > 0) {
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
        console.warn(`Could not connect ${remaining.length} remaining ways`);
        break;
      }
    }
  }

  const coords = orderedNodeIds.map(id => nodes[id]).filter(Boolean);
  console.log(`Extracted ${coords.length} coordinate points`);

  // Show GPS bbox
  if (coords.length > 0) {
    const lats = coords.map(c => c.lat);
    const lons = coords.map(c => c.lon);
    console.log(`GPS bbox: lat [${Math.min(...lats).toFixed(5)}, ${Math.max(...lats).toFixed(5)}]`);
    console.log(`          lon [${Math.min(...lons).toFixed(5)}, ${Math.max(...lons).toFixed(5)}]`);
  }

  return coords;
}

function projectToSVG(coords, width = 280, height = 180, padding = 15) {
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

  return {
    points: coords.map(c => ({
      x: offsetX + (c.lon - minLon) * cosLat * scale,
      y: offsetY + (maxLat - c.lat) * scale,
    })),
    projection: { minLat, maxLat, minLon, maxLon, cosLat, scale, offsetX, offsetY }
  };
}

function rdpSimplify(points, epsilon) {
  if (points.length <= 2) return points;
  let dmax = 0, index = 0;
  const end = points.length - 1;
  for (let i = 1; i < end; i++) {
    const d = perpDist(points[i], points[0], points[end]);
    if (d > dmax) { index = i; dmax = d; }
  }
  if (dmax > epsilon) {
    const left = rdpSimplify(points.slice(0, index + 1), epsilon);
    const right = rdpSimplify(points.slice(index), epsilon);
    return [...left.slice(0, -1), ...right];
  }
  return [points[0], points[end]];
}

function perpDist(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / Math.sqrt(lenSq);
}

function catmullRomPath(points, closed = true, tension = 0.5) {
  const n = points.length;
  if (n < 3) return `M ${points.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`;

  const alpha = tension;
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    const cp1x = p1.x + (p2.x - p0.x) * alpha / 3;
    const cp1y = p1.y + (p2.y - p0.y) * alpha / 3;
    const cp2x = p2.x - (p3.x - p1.x) * alpha / 3;
    const cp2y = p2.y - (p3.y - p1.y) * alpha / 3;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  if (closed) d += ' Z';
  return d;
}

function projectGPS(lat, lon, proj) {
  const x = proj.offsetX + (lon - proj.minLon) * proj.cosLat * proj.scale;
  const y = proj.offsetY + (proj.maxLat - lat) * proj.scale;
  return { x: Math.round(x), y: Math.round(y) };
}

async function main() {
  console.log('Fetching Suzuka circuit from OpenStreetMap...\n');
  const osmData = await fetchOSMData();
  console.log(`Total elements: ${osmData.elements.length}`);

  const coords = extractCoords(osmData);
  if (coords.length === 0) {
    console.error('No coordinates found!');
    process.exit(1);
  }

  const W = 280, H = 180, PAD = 15;
  const { points, projection } = projectToSVG(coords, W, H, PAD);
  const simplified = rdpSimplify(points, 1.2);
  console.log(`\nSimplified: ${points.length} → ${simplified.length} points`);

  const path = catmullRomPath(simplified, true, 0.5);

  // Grandstand GPS positions (from real-world locations)
  const gs = {
    'suz-main':  projectGPS(34.84320, 136.54100, projection),
    'suz-esses': projectGPS(34.84580, 136.53350, projection),
    'suz-130r':  projectGPS(34.84080, 136.53900, projection),
    'suz-spoon': projectGPS(34.83850, 136.53100, projection),
  };

  console.log('\n' + '='.repeat(60));
  console.log('SUZUKA CIRCUIT — circuitMaps.ts entry');
  console.log('='.repeat(60) + '\n');

  // Format path for output
  const pathClean = path.replace(/\s+/g, ' ').trim();
  const segs = pathClean.split(/(?=C |L |M |Z)/);

  console.log('suzuka: {');
  console.log('  path: `');
  for (const s of segs) console.log('    ' + s.trim());
  console.log('  `,');
  console.log(`  startFinish: { x1: ${gs['suz-main'].x - 15}, y1: ${gs['suz-main'].y}, x2: ${gs['suz-main'].x + 15}, y2: ${gs['suz-main'].y} },`);
  console.log(`  label: { x: 140, y: 95 }`);
  console.log('},\n');

  console.log('GRANDSTAND mapDot VALUES:');
  for (const [id, pos] of Object.entries(gs)) {
    console.log(`  ${id}: { x: ${pos.x}, y: ${pos.y} }`);
  }

  // Write preview SVG
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
  <rect width="${W}" height="${H}" fill="#1a1a2e" />
  <path d="${pathClean}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  ${Object.entries(gs).map(([id, p]) =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5" />
  <text x="${p.x + 6}" y="${p.y + 3}" fill="white" font-size="7" font-family="sans-serif">${id.replace('suz-', '')}</text>`
  ).join('\n  ')}
  <text x="140" y="12" fill="#666" font-size="8" text-anchor="middle" font-family="sans-serif">Suzuka International Racing Course (from OSM)</text>
</svg>`;

  const fs = await import('fs');
  fs.writeFileSync('scripts/suzuka-preview.svg', svgContent);
  console.log('\n✓ Preview: scripts/suzuka-preview.svg');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
