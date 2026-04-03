#!/usr/bin/env node
/**
 * Extract Miami International Autodrome circuit outline from OpenStreetMap
 * via Overpass API, project GPS coordinates into a 280×180 SVG viewbox,
 * and output an SVG path string with Catmull-Rom → cubic-Bézier smoothing.
 *
 * Usage:  node scripts/extract-miami-osm.mjs
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Miami International Autodrome bbox: ~25.954–25.962, -80.244–-80.234
// The circuit is tagged as highway=raceway or leisure=track + sport=motor
const QUERY = `
[out:json][timeout:60];
(
  way(25.950,-80.248,25.966,-80.230)["highway"="raceway"];
  way(25.950,-80.248,25.966,-80.230)["leisure"="track"]["sport"="motor"];
  relation(25.950,-80.248,25.966,-80.230)["highway"="raceway"];
  relation(25.950,-80.248,25.966,-80.230)["leisure"="track"]["sport"="motor"];
);
(._;>;);
out body;
`;

async function fetchOSMData() {
  console.log('Sending Overpass query for Miami circuit...');
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
  const relations = data.elements.filter(el => el.type === 'relation');
  console.log(`Found ${ways.length} ways, ${relations.length} relations, ${Object.keys(nodes).length} nodes`);

  // List all ways with tags for debugging
  for (const w of ways) {
    const tags = w.tags ? Object.entries(w.tags).map(([k,v]) => `${k}=${v}`).join(', ') : 'no tags';
    console.log(`  Way ${w.id}: ${w.nodes.length} nodes — ${tags}`);
  }
  for (const r of relations) {
    const tags = r.tags ? Object.entries(r.tags).map(([k,v]) => `${k}=${v}`).join(', ') : 'no tags';
    console.log(`  Relation ${r.id}: ${r.members?.length} members — ${tags}`);
  }

  // Filter: only main circuit ways (exclude "Pit Lane" and other named variants)
  const circuitWays = ways.filter(w => {
    const name = w.tags?.name || '';
    if (name === 'Pit Lane') return false;
    return true;
  });
  console.log(`\nFiltered to ${circuitWays.length} circuit ways (excluded Pit Lane)`);

  let orderedNodeIds = [];

  if (relations.length > 0) {
    const rel = relations.reduce((a, b) => (a.members?.length || 0) >= (b.members?.length || 0) ? a : b);
    console.log(`Using relation: ${rel.id} (${rel.tags?.name || 'unnamed'})`);
    
    const wayMap = {};
    for (const w of circuitWays) {
      wayMap[w.id] = w.nodes;
    }

    for (const member of rel.members) {
      if (member.type === 'way' && wayMap[member.ref]) {
        const wayNodes = wayMap[member.ref];
        if (orderedNodeIds.length === 0) {
          orderedNodeIds.push(...wayNodes);
        } else {
          const lastId = orderedNodeIds[orderedNodeIds.length - 1];
          if (wayNodes[0] === lastId) {
            orderedNodeIds.push(...wayNodes.slice(1));
          } else if (wayNodes[wayNodes.length - 1] === lastId) {
            orderedNodeIds.push(...[...wayNodes].reverse().slice(1));
          } else {
            console.warn(`  Gap at way ${member.ref}, appending directly`);
            orderedNodeIds.push(...wayNodes);
          }
        }
      }
    }
  } else if (circuitWays.length > 0) {
    // Chain ways together, trying by proximity if exact node match fails
    const sorted = [...circuitWays].sort((a, b) => b.nodes.length - a.nodes.length);
    
    if (sorted.length === 1) {
      orderedNodeIds = sorted[0].nodes;
    } else {
      const mainWay = sorted[0];
      console.log(`Starting with longest way: ${mainWay.id} (${mainWay.nodes.length} nodes, ${mainWay.tags?.name || 'unnamed'})`);
      
      const remaining = sorted.map(w => ({ nodes: [...w.nodes], id: w.id, name: w.tags?.name || '' }));
      orderedNodeIds = [...remaining.shift().nodes];

      let maxIter = remaining.length * remaining.length + 20;
      while (remaining.length > 0 && maxIter-- > 0) {
        const lastId = orderedNodeIds[orderedNodeIds.length - 1];
        const firstId = orderedNodeIds[0];
        let found = false;

        for (let i = 0; i < remaining.length; i++) {
          const w = remaining[i];
          if (w.nodes[0] === lastId) {
            orderedNodeIds.push(...w.nodes.slice(1));
            remaining.splice(i, 1); found = true; break;
          } else if (w.nodes[w.nodes.length - 1] === lastId) {
            orderedNodeIds.push(...[...w.nodes].reverse().slice(1));
            remaining.splice(i, 1); found = true; break;
          } else if (w.nodes[w.nodes.length - 1] === firstId) {
            orderedNodeIds.unshift(...w.nodes.slice(0, -1));
            remaining.splice(i, 1); found = true; break;
          } else if (w.nodes[0] === firstId) {
            orderedNodeIds.unshift(...[...w.nodes].reverse().slice(0, -1));
            remaining.splice(i, 1); found = true; break;
          }
        }

        if (!found) {
          // Try proximity-based connection: find the closest endpoint pair
          const lastNode = nodes[orderedNodeIds[orderedNodeIds.length - 1]];
          const firstNode = nodes[orderedNodeIds[0]];
          let bestDist = Infinity;
          let bestIdx = -1;
          let bestEnd = 'tail'; // connecting at tail or head of chain
          let bestReverse = false;

          for (let i = 0; i < remaining.length; i++) {
            const w = remaining[i];
            const wFirst = nodes[w.nodes[0]];
            const wLast = nodes[w.nodes[w.nodes.length - 1]];
            
            if (wFirst && lastNode) {
              const d = Math.hypot(wFirst.lat - lastNode.lat, wFirst.lon - lastNode.lon);
              if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'tail'; bestReverse = false; }
            }
            if (wLast && lastNode) {
              const d = Math.hypot(wLast.lat - lastNode.lat, wLast.lon - lastNode.lon);
              if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'tail'; bestReverse = true; }
            }
            if (wFirst && firstNode) {
              const d = Math.hypot(wFirst.lat - firstNode.lat, wFirst.lon - firstNode.lon);
              if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'head'; bestReverse = true; }
            }
            if (wLast && firstNode) {
              const d = Math.hypot(wLast.lat - firstNode.lat, wLast.lon - firstNode.lon);
              if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'head'; bestReverse = false; }
            }
          }

          if (bestIdx >= 0 && bestDist < 0.001) {
            // ~100m tolerance
            const w = remaining[bestIdx];
            const wayNodes = bestReverse ? [...w.nodes].reverse() : w.nodes;
            if (bestEnd === 'tail') {
              orderedNodeIds.push(...wayNodes);
            } else {
              orderedNodeIds.unshift(...wayNodes);
            }
            remaining.splice(bestIdx, 1);
            console.log(`  Proximity-connected way ${w.id} (dist=${(bestDist*111000).toFixed(1)}m, ${bestEnd})`);
            found = true;
          }

          if (!found) {
            console.warn(`Could not connect ${remaining.length} remaining ways:`);
            for (const w of remaining) {
              console.warn(`  Way ${w.id}: ${w.nodes.length} nodes (${w.name})`);
            }
            break;
          }
        }
      }
    }
  }

  const coords = orderedNodeIds.map(id => nodes[id]).filter(Boolean);
  console.log(`\nExtracted ${coords.length} coordinate points`);

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

    d += `\n      C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  if (closed) d += '\n      Z';
  return d;
}

function projectGPS(lat, lon, proj) {
  const x = proj.offsetX + (lon - proj.minLon) * proj.cosLat * proj.scale;
  const y = proj.offsetY + (proj.maxLat - lat) * proj.scale;
  return { x: Math.round(x), y: Math.round(y) };
}

async function main() {
  console.log('Fetching Miami circuit from OpenStreetMap...\n');
  const osmData = await fetchOSMData();
  console.log(`Total elements: ${osmData.elements.length}`);

  const coords = extractCoords(osmData);
  if (coords.length === 0) {
    console.error('No coordinates found! Trying broader query...');
    // Fall back to broader search
    await tryBroadQuery();
    return;
  }

  const W = 280, H = 180, PAD = 15;
  const { points, projection } = projectToSVG(coords, W, H, PAD);
  
  // Dump key points for shape analysis
  console.log('\nRaw point samples (every 15th):');
  for (let i = 0; i < points.length; i += 15) {
    console.log(`  [${i}] x=${points[i].x.toFixed(1)}, y=${points[i].y.toFixed(1)}`);
  }
  
  // Try different simplification levels
  for (const eps of [0.8, 1.0, 1.5, 2.0]) {
    const simplified = rdpSimplify(points, eps);
    console.log(`  RDP ε=${eps}: ${points.length} → ${simplified.length} points`);
  }
  
  const simplified = rdpSimplify(points, 1.2);
  console.log(`\nUsing ε=1.2: ${simplified.length} control points`);

  const path = catmullRomPath(simplified, true, 0.5);

  // Known grandstand GPS positions for the Miami International Autodrome
  // Based on the circuit map and satellite imagery
  const gs = {
    'mia-main':   projectGPS(25.9595, -80.2393, projection),  // Marina/Main Grandstand (pit straight)
    'mia-t1':     projectGPS(25.9580, -80.2355, projection),  // Turn 1
    'mia-t11':    projectGPS(25.9555, -80.2425, projection),  // Turn 11 (back chicane/hairpin)
    'mia-campus': projectGPS(25.9575, -80.2400, projection),  // Campus/Beach area (near stadium)
    'mia-t17':    projectGPS(25.9605, -80.2405, projection),  // Turn 17 (north end)
  };

  console.log('\n' + '='.repeat(60));
  console.log('MIAMI CIRCUIT — circuitMaps.ts entry');
  console.log('='.repeat(60) + '\n');

  // Format path
  const pathClean = path.replace(/\s+/g, ' ').trim();
  const segs = pathClean.split(/(?=C |L |M |Z)/);

  console.log('miami: {');
  console.log('  path: `');
  for (const s of segs) console.log('      ' + s.trim());
  console.log('  `,');
  console.log(`  startFinish: { x1: ${gs['mia-main'].x - 15}, y1: ${gs['mia-main'].y}, x2: ${gs['mia-main'].x + 15}, y2: ${gs['mia-main'].y} },`);
  console.log(`  label: { x: 140, y: 95 }`);
  console.log('},\n');

  console.log('GRANDSTAND mapDot VALUES:');
  for (const [id, pos] of Object.entries(gs)) {
    console.log(`  ${id}: { x: ${pos.x}, y: ${pos.y} }`);
  }

  // Also generate a raw polyline debug SVG
  const polyPoints = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  
  // Number every 10th point for debugging
  const numberedPoints = points.filter((_, i) => i % 10 === 0).map((p, idx) => 
    `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2" fill="lime" />
  <text x="${(p.x + 3).toFixed(1)}" y="${(p.y + 1).toFixed(1)}" fill="lime" font-size="5" font-family="sans-serif">${idx * 10}</text>`
  ).join('\n  ');

  // Write preview SVG
  const fs = await import('fs');
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
  <rect width="${W}" height="${H}" fill="#1a1a2e" />
  <polyline points="${polyPoints}" fill="none" stroke="#555" stroke-width="1" />
  <path d="${pathClean}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  ${numberedPoints}
  ${Object.entries(gs).map(([id, p]) =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5" />
  <text x="${p.x + 6}" y="${p.y + 3}" fill="#fff" font-size="7" font-family="sans-serif">${id}</text>`
  ).join('\n  ')}
  <text x="140" y="12" fill="#aaa" font-size="8" text-anchor="middle" font-family="sans-serif">Miami International Autodrome — OSM extract</text>
</svg>`;

  fs.writeFileSync('scripts/miami-circuit-preview.svg', svgContent);
  console.log('\nPreview SVG written to scripts/miami-circuit-preview.svg');
}

async function tryBroadQuery() {
  // Broader query — search by name
  const BROAD_QUERY = `
[out:json][timeout:60];
(
  way["name"~"Miami"]["highway"="raceway"];
  way["name"~"Miami"]["leisure"="track"];
  way["name"~"Autodrome"]["highway"="raceway"];
  relation["name"~"Miami"]["highway"="raceway"];
  relation["name"~"Miami"]["leisure"="track"];
  relation["name"~"Autodrome"]["highway"="raceway"];
  way(25.946,-80.250,25.970,-80.225)["highway"="raceway"];
  way(25.946,-80.250,25.970,-80.225)["leisure"="track"];
);
(._;>;);
out body;
`;
  console.log('\nTrying broader query...');
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(BROAD_QUERY)}`,
  });
  if (!res.ok) throw new Error(`Overpass API error: ${res.status}`);
  const data = await res.json();
  console.log(`Broad query returned ${data.elements.length} elements`);
  
  // List what we found
  for (const el of data.elements) {
    if (el.type === 'way' && el.tags) {
      console.log(`  Way ${el.id}: ${el.tags.name || 'unnamed'} — ${el.nodes?.length || 0} nodes — ${JSON.stringify(el.tags)}`);
    }
    if (el.type === 'relation' && el.tags) {
      console.log(`  Relation ${el.id}: ${el.tags.name || 'unnamed'} — ${el.members?.length || 0} members — ${JSON.stringify(el.tags)}`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
