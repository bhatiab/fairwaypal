#!/usr/bin/env node
/**
 * Clean Miami circuit trace — takes the OSM extraction, removes the pit lane
 * parallel section, and generates a clean smooth SVG path.
 *
 * Usage:  node scripts/extract-miami-clean.mjs
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

const QUERY = `
[out:json][timeout:60];
(
  way(25.950,-80.248,25.966,-80.230)["highway"="raceway"];
  way(25.950,-80.248,25.966,-80.230)["leisure"="track"]["sport"="motor"];
);
(._;>;);
out body;
`;

async function fetchOSMData() {
  console.log('Fetching Miami circuit from OSM...');
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(QUERY)}`,
  });
  if (!res.ok) throw new Error(`Overpass API error: ${res.status}`);
  return res.json();
}

function extractAndChainCoords(data) {
  const nodes = {};
  for (const el of data.elements) {
    if (el.type === 'node') nodes[el.id] = { lat: el.lat, lon: el.lon };
  }

  // Only use "Miami International Autodrome" ways (skip "Pit Lane")
  const circuitWays = data.elements
    .filter(el => el.type === 'way' && el.tags?.name !== 'Pit Lane')
    .sort((a, b) => b.nodes.length - a.nodes.length);

  console.log(`Found ${circuitWays.length} circuit ways (pit lane excluded)`);

  // Chain ways with proximity fallback
  const remaining = circuitWays.map(w => ({ nodes: [...w.nodes], id: w.id }));
  let chain = [...remaining.shift().nodes];
  let maxIter = remaining.length * remaining.length + 20;

  while (remaining.length > 0 && maxIter-- > 0) {
    const lastId = chain[chain.length - 1];
    const firstId = chain[0];
    let found = false;
    for (let i = 0; i < remaining.length; i++) {
      const w = remaining[i];
      if (w.nodes[0] === lastId)                          { chain.push(...w.nodes.slice(1)); remaining.splice(i, 1); found = true; break; }
      if (w.nodes[w.nodes.length - 1] === lastId)         { chain.push(...[...w.nodes].reverse().slice(1)); remaining.splice(i, 1); found = true; break; }
      if (w.nodes[w.nodes.length - 1] === firstId)        { chain.unshift(...w.nodes.slice(0, -1)); remaining.splice(i, 1); found = true; break; }
      if (w.nodes[0] === firstId)                          { chain.unshift(...[...w.nodes].reverse().slice(0, -1)); remaining.splice(i, 1); found = true; break; }
    }
    if (!found) {
      // Proximity fallback
      const lastNode = nodes[chain[chain.length - 1]];
      let bestDist = Infinity, bestIdx = -1, bestReverse = false, bestEnd = 'tail';
      for (let i = 0; i < remaining.length; i++) {
        const wf = nodes[remaining[i].nodes[0]];
        const wl = nodes[remaining[i].nodes[remaining[i].nodes.length - 1]];
        if (wf && lastNode) { const d = Math.hypot(wf.lat - lastNode.lat, wf.lon - lastNode.lon); if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'tail'; bestReverse = false; } }
        if (wl && lastNode) { const d = Math.hypot(wl.lat - lastNode.lat, wl.lon - lastNode.lon); if (d < bestDist) { bestDist = d; bestIdx = i; bestEnd = 'tail'; bestReverse = true; } }
      }
      if (bestIdx >= 0 && bestDist < 0.002) {
        const w = remaining[bestIdx];
        chain.push(...(bestReverse ? [...w.nodes].reverse() : w.nodes));
        remaining.splice(bestIdx, 1);
      } else break;
    }
  }
  if (remaining.length > 0) console.log(`Could not connect ${remaining.length} remaining ways`);

  return chain.map(id => nodes[id]).filter(Boolean);
}

function projectToSVG(coords, width = 280, height = 180, padding = 15) {
  const lats = coords.map(c => c.lat), lons = coords.map(c => c.lon);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLon = Math.min(...lons), maxLon = Math.max(...lons);
  const latCenter = (minLat + maxLat) / 2;
  const cosLat = Math.cos(latCenter * Math.PI / 180);
  const dLon = (maxLon - minLon) * cosLat, dLat = maxLat - minLat;
  const usableW = width - 2 * padding, usableH = height - 2 * padding;
  const scale = Math.min(usableW / dLon, usableH / dLat);
  const projW = dLon * scale, projH = dLat * scale;
  const offsetX = padding + (usableW - projW) / 2;
  const offsetY = padding + (usableH - projH) / 2;

  return {
    points: coords.map(c => ({
      x: offsetX + (c.lon - minLon) * cosLat * scale,
      y: offsetY + (maxLat - c.lat) * scale,
    })),
    proj: { minLat, maxLat, minLon, maxLon, cosLat, scale, offsetX, offsetY }
  };
}

function projectGPS(lat, lon, proj) {
  return {
    x: Math.round(proj.offsetX + (lon - proj.minLon) * proj.cosLat * proj.scale),
    y: Math.round(proj.offsetY + (proj.maxLat - lat) * proj.scale)
  };
}

function rdpSimplify(pts, epsilon) {
  if (pts.length <= 2) return pts;
  let dmax = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = perpDist(pts[i], pts[0], pts[pts.length - 1]);
    if (d > dmax) { idx = i; dmax = d; }
  }
  if (dmax > epsilon) {
    const l = rdpSimplify(pts.slice(0, idx + 1), epsilon);
    const r = rdpSimplify(pts.slice(idx), epsilon);
    return [...l.slice(0, -1), ...r];
  }
  return [pts[0], pts[pts.length - 1]];
}

function perpDist(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / Math.sqrt(lenSq);
}

/**
 * Detect & remove the "pit-lane stump" — a section near the end where the path
 * runs parallel to itself back south along the pit buildings then returns north.
 *
 * Strategy: after the main loop approaches the starting point closely, trim
 * any remaining points that veer away.
 */
function removePitStump(points) {
  // The main loop starts & ends near the same point.
  // After the outer loop completes (~260 points), the remaining points trace
  // south along the pit lane and back up — creating a self-intersecting tongue.
  //
  // Detect: once the path returns close to the start AND the remaining distance
  // to the start would increase, clip there.

  const start = points[0];
  let bestCloseIdx = -1;
  let bestDist = Infinity;

  // Only look at the last 40% of points for the "return to start"
  const searchStart = Math.floor(points.length * 0.6);

  for (let i = searchStart; i < points.length; i++) {
    const d = Math.hypot(points[i].x - start.x, points[i].y - start.y);
    if (d < 15) { // Within 15px of start — candidate closing point
      if (d < bestDist) {
        bestDist = d;
        bestCloseIdx = i;
      }
    }
  }

  if (bestCloseIdx > 0 && bestCloseIdx < points.length - 5) {
    // Check if the points AFTER bestCloseIdx veer away (pit stump)
    const nextDist = Math.hypot(points[bestCloseIdx + 3].x - start.x, points[bestCloseIdx + 3].y - start.y);
    if (nextDist > bestDist + 5) {
      console.log(`  Trimming pit stump: keeping points [0..${bestCloseIdx}], dropping ${points.length - bestCloseIdx - 1} points`);
      return points.slice(0, bestCloseIdx + 1);
    }
  }

  console.log('  No pit stump detected');
  return points;
}

function catmullRom(points, closed, tension = 0.5) {
  const n = points.length;
  if (n < 3) return `M ${points.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`;
  const a = tension;
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    d += `\n      C ${(p1.x + (p2.x - p0.x) * a / 3).toFixed(1)} ${(p1.y + (p2.y - p0.y) * a / 3).toFixed(1)}, ${(p2.x - (p3.x - p1.x) * a / 3).toFixed(1)} ${(p2.y - (p3.y - p1.y) * a / 3).toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  if (closed) d += '\n      Z';
  return d;
}

async function main() {
  const osmData = await fetchOSMData();
  const coords = extractAndChainCoords(osmData);
  if (coords.length === 0) { console.error('No coordinates!'); process.exit(1); }

  const W = 280, H = 180, PAD = 15;
  const { points: rawPts, proj } = projectToSVG(coords, W, H, PAD);
  console.log(`Raw: ${rawPts.length} points`);

  // Remove pit stump
  const cleanPts = removePitStump(rawPts);
  console.log(`After stump removal: ${cleanPts.length} points`);

  // Simplify
  const simplified = rdpSimplify(cleanPts, 1.5);
  console.log(`Simplified (ε=1.5): ${simplified.length} points`);

  const path = catmullRom(simplified, true, 0.5);

  // Grandstand positions (approximate GPS from satellite + official maps)
  const gs = {
    'mia-main':   projectGPS(25.9595, -80.2393, proj),  // Marina/Main (pit straight)
    'mia-t1':     projectGPS(25.9580, -80.2355, proj),  // Turn 1
    'mia-t11':    projectGPS(25.9555, -80.2425, proj),  // Turn 11 hairpin
    'mia-campus': projectGPS(25.9575, -80.2400, proj),  // Campus/Beach (stadium)
    'mia-t17':    projectGPS(25.9605, -80.2405, proj),  // Turn 17
  };

  console.log('\n' + '='.repeat(60));
  console.log('MIAMI CIRCUIT — circuitMaps.ts entry');
  console.log('='.repeat(60) + '\n');

  console.log('miami: {');
  console.log('  path: `');
  const segs = path.replace(/\s+/g, ' ').trim().split(/(?=C |L |M |Z)/);
  for (const s of segs) console.log('      ' + s.trim());
  console.log('  `,');
  console.log(`  startFinish: { x1: ${gs['mia-main'].x - 15}, y1: ${gs['mia-main'].y}, x2: ${gs['mia-main'].x + 15}, y2: ${gs['mia-main'].y} },`);
  console.log(`  label: { x: 140, y: 95 }`);
  console.log('},\n');

  console.log('GRANDSTAND mapDot VALUES:');
  for (const [id, p] of Object.entries(gs)) console.log(`  ${id}: { x: ${p.x}, y: ${p.y} }`);

  // Write debug SVGs
  const fs = await import('fs');

  // Raw polyline
  const polyPts = rawPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const cleanPolyPts = cleanPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const pathClean = path.replace(/\s+/g, ' ').trim();

  // Numbered dots on simplified points
  const dots = simplified.map((p, i) =>
    `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2" fill="lime" />` +
    `<text x="${(p.x + 3).toFixed(1)}" y="${(p.y + 1).toFixed(1)}" fill="lime" font-size="4" font-family="sans-serif">${i}</text>`
  ).join('\n  ');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
  <rect width="${W}" height="${H}" fill="#1a1a2e" />
  <!-- Raw polyline (gray) -->
  <polyline points="${polyPts}" fill="none" stroke="#333" stroke-width="0.5" />
  <!-- Clean polyline (dark red) -->
  <polyline points="${cleanPolyPts}" fill="none" stroke="#600" stroke-width="1" />
  <!-- Smoothed path (bright red) -->
  <path d="${pathClean}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  <!-- Simplified control points -->
  ${dots}
  <!-- Grandstands -->
  ${Object.entries(gs).map(([id, p]) =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5" />
  <text x="${p.x + 6}" y="${p.y + 3}" fill="#fff" font-size="7" font-family="sans-serif">${id}</text>`
  ).join('\n  ')}
  <text x="140" y="12" fill="#aaa" font-size="8" text-anchor="middle" font-family="sans-serif">Miami International Autodrome — Clean OSM trace</text>
</svg>`;

  fs.writeFileSync('scripts/miami-circuit-preview.svg', svg);
  console.log('\nPreview: scripts/miami-circuit-preview.svg');
}

main().catch(err => { console.error(err); process.exit(1); });
