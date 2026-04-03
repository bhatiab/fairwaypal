#!/usr/bin/env node
/**
 * Extract Suzuka F1 circuit outline from OSM highway=raceway ways.
 * Chains the segments (excluding pit lane, kart track, south course)
 * into a closed loop, projects to 280×180 SVG, and outputs the path.
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Get all raceway segments with full geometry in Suzuka bbox
const QUERY = `
[out:json][timeout:60];
way(34.835,136.525,34.850,136.545)["highway"="raceway"]["sport"="motor"];
(._;>;);
out body;
`;

async function fetchOSM() {
  console.log('Fetching raceway segments from OSM...');
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(QUERY)}`,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function buildCircuit(data) {
  // Build node lookup
  const nodes = {};
  for (const el of data.elements) {
    if (el.type === 'node') nodes[el.id] = { lat: el.lat, lon: el.lon };
  }

  // Get all raceway ways, filter out pit lane, kart tracks, and south course
  const ways = data.elements
    .filter(el => el.type === 'way')
    .filter(w => {
      const name = (w.tags?.name || '') + (w.tags?.['name:en'] || '');
      const nameLower = name.toLowerCase();
      // Exclude pit lane, kart, south course
      if (nameLower.includes('pit lane') || nameLower.includes('pit')) return false;
      if (nameLower.includes('kart') || nameLower.includes('カート')) return false;
      if (nameLower.includes('南コース') || nameLower.includes('south')) return false;
      return true;
    });

  console.log(`\nFiltered to ${ways.length} main circuit ways:`);
  for (const w of ways) {
    const name = w.tags?.['name:en'] || w.tags?.name || '(unnamed)';
    console.log(`  way/${w.id}: "${name}" [${w.nodes.length} nodes]`);
  }

  // Chain ways into a single ordered sequence
  // Each way has 'oneway=yes' so we follow the node order
  const remaining = ways.map(w => ({
    id: w.id,
    nodes: [...w.nodes],
    name: w.tags?.['name:en'] || w.tags?.name || '(unnamed)',
  }));

  // Start with the first segment
  const chain = remaining.shift();
  let orderedNodeIds = [...chain.nodes];
  console.log(`\nChaining from: ${chain.name}`);

  let maxIter = remaining.length * remaining.length + 10;
  while (remaining.length > 0 && maxIter-- > 0) {
    const lastId = orderedNodeIds[orderedNodeIds.length - 1];
    let found = false;

    for (let i = 0; i < remaining.length; i++) {
      const w = remaining[i];

      // Normal direction (start connects to our end)
      if (w.nodes[0] === lastId) {
        console.log(`  + ${w.name} (forward)`);
        orderedNodeIds.push(...w.nodes.slice(1));
        remaining.splice(i, 1);
        found = true;
        break;
      }
      // Reverse direction
      if (w.nodes[w.nodes.length - 1] === lastId) {
        console.log(`  + ${w.name} (reversed)`);
        orderedNodeIds.push(...[...w.nodes].reverse().slice(1));
        remaining.splice(i, 1);
        found = true;
        break;
      }
    }

    if (!found) {
      // Try connecting to the front
      const firstId = orderedNodeIds[0];
      for (let i = 0; i < remaining.length; i++) {
        const w = remaining[i];
        if (w.nodes[w.nodes.length - 1] === firstId) {
          console.log(`  + ${w.name} (prepend forward)`);
          orderedNodeIds = [...w.nodes.slice(0, -1), ...orderedNodeIds];
          remaining.splice(i, 1);
          found = true;
          break;
        }
        if (w.nodes[0] === firstId) {
          console.log(`  + ${w.name} (prepend reversed)`);
          orderedNodeIds = [...[...w.nodes].reverse().slice(0, -1), ...orderedNodeIds];
          remaining.splice(i, 1);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      console.warn(`\n  ⚠ Cannot connect ${remaining.length} remaining ways:`);
      for (const w of remaining) console.warn(`    way/${w.id}: "${w.name}"`);
      break;
    }
  }

  // Convert to coordinate pairs
  const coords = orderedNodeIds.map(id => nodes[id]).filter(Boolean);
  console.log(`\nTotal circuit points: ${coords.length}`);

  // Check if it's a closed loop
  if (coords.length > 2) {
    const first = coords[0];
    const last = coords[coords.length - 1];
    const dist = Math.hypot(first.lat - last.lat, first.lon - last.lon);
    console.log(`Loop closure distance: ${(dist * 111000).toFixed(1)}m`);
    if (dist * 111000 < 100) {
      console.log('✓ Circuit forms a closed loop');
    }
  }

  return coords;
}

function projectToSVG(coords, W = 280, H = 180, pad = 15) {
  const lats = coords.map(c => c.lat);
  const lons = coords.map(c => c.lon);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLon = Math.min(...lons), maxLon = Math.max(...lons);

  const latCenter = (minLat + maxLat) / 2;
  const cosLat = Math.cos(latCenter * Math.PI / 180);
  const dLon = (maxLon - minLon) * cosLat;
  const dLat = maxLat - minLat;

  const usableW = W - 2 * pad;
  const usableH = H - 2 * pad;
  const scaleX = usableW / dLon;
  const scaleY = usableH / dLat;
  const scale = Math.min(scaleX, scaleY);

  const projW = dLon * scale;
  const projH = dLat * scale;
  const offX = pad + (usableW - projW) / 2;
  const offY = pad + (usableH - projH) / 2;

  const proj = { minLat, maxLat, minLon, maxLon, cosLat, scale, offX, offY };

  const points = coords.map(c => ({
    x: offX + (c.lon - minLon) * cosLat * scale,
    y: offY + (maxLat - c.lat) * scale,
  }));

  return { points, proj };
}

function rdp(pts, eps) {
  if (pts.length <= 2) return pts;
  let dmax = 0, idx = 0;
  const n = pts.length - 1;
  for (let i = 1; i < n; i++) {
    const d = pDist(pts[i], pts[0], pts[n]);
    if (d > dmax) { idx = i; dmax = d; }
  }
  if (dmax > eps) {
    const l = rdp(pts.slice(0, idx + 1), eps);
    const r = rdp(pts.slice(idx), eps);
    return [...l.slice(0, -1), ...r];
  }
  return [pts[0], pts[n]];
}

function pDist(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / Math.sqrt(lenSq);
}

function catmullRom(pts, closed = true, t = 0.5) {
  const n = pts.length;
  if (n < 3) return `M ${pts.map(p => `${r(p.x)} ${r(p.y)}`).join(' L ')}`;

  let d = `M ${r(pts[0].x)} ${r(pts[0].y)}`;
  const len = closed ? n : n - 1;

  for (let i = 0; i < len; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];

    const c1x = p1.x + (p2.x - p0.x) * t / 3;
    const c1y = p1.y + (p2.y - p0.y) * t / 3;
    const c2x = p2.x - (p3.x - p1.x) * t / 3;
    const c2y = p2.y - (p3.y - p1.y) * t / 3;

    d += ` C ${r(c1x)} ${r(c1y)}, ${r(c2x)} ${r(c2y)}, ${r(p2.x)} ${r(p2.y)}`;
  }

  if (closed) d += ' Z';
  return d;
}

function r(v) { return v.toFixed(1); }

function gps2svg(lat, lon, proj) {
  return {
    x: Math.round(proj.offX + (lon - proj.minLon) * proj.cosLat * proj.scale),
    y: Math.round(proj.offY + (proj.maxLat - lat) * proj.scale),
  };
}

async function main() {
  const data = await fetchOSM();
  console.log(`Received ${data.elements.length} elements`);

  const coords = buildCircuit(data);
  if (coords.length < 10) {
    console.error('Too few points');
    process.exit(1);
  }

  const W = 280, H = 180, PAD = 15;
  const { points, proj } = projectToSVG(coords, W, H, PAD);

  // Simplify — keep enough detail for recognisable shape
  const simp = rdp(points, 1.0);
  console.log(`\nSimplified: ${points.length} → ${simp.length} points`);

  const path = catmullRom(simp, true, 0.5);

  // Grandstand real GPS positions
  const grandstands = {
    'suz-main':  gps2svg(34.84320, 136.54100, proj),  // Main / Pit straight
    'suz-esses': gps2svg(34.84580, 136.53350, proj),  // S-Curves (Turns 1-7)
    'suz-130r':  gps2svg(34.84080, 136.53900, proj),  // 130R / Casio
    'suz-spoon': gps2svg(34.83850, 136.53100, proj),  // Spoon Curve
  };

  // ── Output ──
  console.log('\n' + '═'.repeat(60));
  console.log('SUZUKA CIRCUIT — circuitMaps.ts entry');
  console.log('═'.repeat(60));

  const pathStr = path.replace(/\s+/g, ' ').trim();

  // Pretty-print path breaking on commands
  const segments = pathStr.split(/(?=[MCLZ])/);
  console.log('\nsuzuka: {');
  console.log('  path: `');
  for (const s of segments) {
    const trimmed = s.trim();
    if (trimmed) console.log('    ' + trimmed);
  }
  console.log('  `,');

  const mainGS = grandstands['suz-main'];
  console.log(`  startFinish: { x1: ${mainGS.x - 15}, y1: ${mainGS.y}, x2: ${mainGS.x + 15}, y2: ${mainGS.y} },`);
  console.log(`  label: { x: 140, y: 95 }`);
  console.log('},');

  console.log('\nGRANDSTAND mapDot:');
  for (const [id, p] of Object.entries(grandstands)) {
    console.log(`  ${id}: { x: ${p.x}, y: ${p.y} }`);
  }

  // Write preview SVG
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
  <rect width="${W}" height="${H}" fill="#1a1a2e" />
  <path d="${pathStr}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  ${Object.entries(grandstands).map(([id, p]) =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5" />
  <text x="${p.x + 6}" y="${p.y + 3}" fill="white" font-size="7" font-family="sans-serif">${id.replace('suz-', '').toUpperCase()}</text>`
  ).join('\n  ')}
  <text x="140" y="12" fill="#666" font-size="8" text-anchor="middle" font-family="sans-serif">Suzuka Circuit (OSM data, ${simp.length} control points)</text>
</svg>`;

  const fs = await import('fs');
  fs.writeFileSync('scripts/suzuka-preview.svg', svgContent);
  console.log('\n✓ Preview saved: scripts/suzuka-preview.svg');

  // Also dump the raw simplified control points
  console.log(`\nControl points (${simp.length}):`);
  for (let i = 0; i < simp.length; i++) {
    console.log(`  [${i}] x:${r(simp[i].x)} y:${r(simp[i].y)}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
