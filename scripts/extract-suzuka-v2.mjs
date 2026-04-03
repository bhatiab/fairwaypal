#!/usr/bin/env node
/**
 * Complete Suzuka Circuit extraction with wider bbox to include Spoon Curve.
 * Uses official KML data for grandstand positions.
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Wider bbox to capture Spoon Curve (extends further west and north)
const QUERY = `
[out:json][timeout:60];
way(34.835,136.518,34.852,136.545)["highway"="raceway"]["sport"="motor"];
(._;>;);
out body;
`;

async function fetchOSM() {
  console.log('Fetching with wider bbox (including Spoon Curve)...');
  const res = await fetch(OVERPASS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(QUERY)}`,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Exclusion filters for non-F1 circuit ways
function isMainCircuit(w) {
  const name = (w.tags?.name || '') + ' ' + (w.tags?.['name:en'] || '');
  const nl = name.toLowerCase();
  // Exclude pit lane
  if (nl.includes('pit lane') || nl.includes('pit')) return false;
  // Exclude kart tracks
  if (nl.includes('kart') || nl.includes('カート')) return false;
  // Exclude south course (鈴鹿サーキット国際南コース)
  if (nl.includes('南コース') || nl.includes('south')) return false;
  // Exclude amusement park rides (Japanese names)
  if (nl.includes('プッチグランプリ')) return false;
  if (nl.includes('DREAM R') && !nl.includes('straight')) return false;
  if (nl.includes('アクロ')) return false;
  if (nl.includes('ene-1')) return false;
  if (nl.includes('ロッキー')) return false;
  if (nl.includes('チララ')) return false;
  if (nl.includes('アドベンチャー')) return false;
  // Exclude advance kart (アドバンスカート)
  if (nl.includes('アドバンス')) return false;
  // Exclude DREAM R (amusement park attraction)
  if (nl.includes('dream r')) return false;
  // Exclude specific known amusement-park-adjacent ways by ID
  // way/466005789 is a 36-node unnamed loop in the amusement park area
  if (w.id === 466005789) return false;
  // Exclude unnamed ways that are in the amusement park area
  // (filtered later by connectivity)
  return true;
}

function buildCircuit(data) {
  const nodes = {};
  for (const el of data.elements) {
    if (el.type === 'node') nodes[el.id] = { lat: el.lat, lon: el.lon };
  }

  const ways = data.elements.filter(el => el.type === 'way').filter(isMainCircuit);
  
  console.log(`\nFiltered to ${ways.length} F1 circuit ways:`);
  for (const w of ways) {
    const name = w.tags?.['name:en'] || w.tags?.name || '(unnamed)';
    const firstNode = nodes[w.nodes[0]];
    const lastNode = nodes[w.nodes[w.nodes.length - 1]];
    console.log(`  way/${w.id}: "${name}" [${w.nodes.length} nodes] ` +
      `lon: ${firstNode?.lon.toFixed(4)}→${lastNode?.lon.toFixed(4)}`);
  }

  // Separate approach: find the LONGEST connected chain
  // Try starting from each way and see which gives the longest chain
  let bestChain = [];
  let bestLength = 0;

  for (let startIdx = 0; startIdx < ways.length; startIdx++) {
    const remaining = ways.map(w => ({ id: w.id, nodes: [...w.nodes], name: w.tags?.['name:en'] || w.tags?.name || '' }));
    const start = remaining.splice(startIdx, 1)[0];
    let chain = [...start.nodes];

    let progress = true;
    while (progress) {
      progress = false;
      const lastId = chain[chain.length - 1];
      const firstId = chain[0];

      for (let i = 0; i < remaining.length; i++) {
        const w = remaining[i];
        if (w.nodes[0] === lastId) { chain.push(...w.nodes.slice(1)); remaining.splice(i, 1); progress = true; break; }
        if (w.nodes[w.nodes.length - 1] === lastId) { chain.push(...[...w.nodes].reverse().slice(1)); remaining.splice(i, 1); progress = true; break; }
        if (w.nodes[w.nodes.length - 1] === firstId) { chain = [...w.nodes.slice(0, -1), ...chain]; remaining.splice(i, 1); progress = true; break; }
        if (w.nodes[0] === firstId) { chain = [...[...w.nodes].reverse().slice(0, -1), ...chain]; remaining.splice(i, 1); progress = true; break; }
      }
    }

    if (chain.length > bestLength) {
      bestLength = chain.length;
      bestChain = chain;
    }
  }

  const coords = bestChain.map(id => nodes[id]).filter(Boolean);
  console.log(`\nBest chain: ${coords.length} points`);

  if (coords.length > 2) {
    const first = coords[0];
    const last = coords[coords.length - 1];
    const dist = Math.hypot((first.lat - last.lat) * 111000, (first.lon - last.lon) * 111000 * Math.cos(first.lat * Math.PI / 180));
    console.log(`Loop closure: ${dist.toFixed(1)}m`);
    console.log(`GPS extent: lat [${Math.min(...coords.map(c => c.lat)).toFixed(5)}, ${Math.max(...coords.map(c => c.lat)).toFixed(5)}]`);
    console.log(`            lon [${Math.min(...coords.map(c => c.lon)).toFixed(5)}, ${Math.max(...coords.map(c => c.lon)).toFixed(5)}]`);
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
  const scale = Math.min(usableW / dLon, usableH / dLat);

  const projW = dLon * scale;
  const projH = dLat * scale;
  const offX = pad + (usableW - projW) / 2;
  const offY = pad + (usableH - projH) / 2;

  return {
    points: coords.map(c => ({
      x: offX + (c.lon - minLon) * cosLat * scale,
      y: offY + (maxLat - c.lat) * scale,
    })),
    proj: { minLat, maxLat, minLon, maxLon, cosLat, scale, offX, offY }
  };
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

const r = v => v.toFixed(1);

function gps2svg(lat, lon, proj) {
  return {
    x: Math.round(proj.offX + (lon - proj.minLon) * proj.cosLat * proj.scale),
    y: Math.round(proj.offY + (proj.maxLat - lat) * proj.scale),
  };
}

async function main() {
  const data = await fetchOSM();
  console.log(`Elements: ${data.elements.length}`);

  const coords = buildCircuit(data);
  if (coords.length < 10) { console.error('Too few points'); process.exit(1); }

  const W = 280, H = 180, PAD = 15;
  const { points, proj } = projectToSVG(coords, W, H, PAD);

  const simp = rdp(points, 1.0);
  console.log(`\nSimplified: ${points.length} → ${simp.length} points`);

  const path = catmullRom(simp, true, 0.5);

  // Official grandstand GPS positions from Suzuka Circuit Google My Maps KML
  const officialSeats = {
    // V2 markers from KML (center of V2 sections along main straight)
    'suz-main': gps2svg(34.84440, 136.53990, proj),   // Center of V2 sections
    // D seats (S-Curve sections T5-T6, center of D markers)
    'suz-esses': gps2svg(34.84200, 136.53780, proj),   // Center of D sections
    // G-1 seat (130R, T15)
    'suz-130r': gps2svg(34.84440, 136.53173, proj),    // G-1 (130R permanent)
    // M seats (Spoon Curve, T14)
    'suz-spoon': gps2svg(34.84853, 136.52160, proj),   // Center of M sections
  };

  // ── Output ──
  const pathStr = path.replace(/\s+/g, ' ').trim();
  const segments = pathStr.split(/(?=[MCLZ])/);

  console.log('\n' + '═'.repeat(60));
  console.log('SUZUKA CIRCUIT — circuitMaps.ts entry (COMPLETE with Spoon)');
  console.log('═'.repeat(60));
  console.log('\nsuzuka: {');
  console.log('  path: `');
  for (const s of segments) {
    const trimmed = s.trim();
    if (trimmed) console.log('    ' + trimmed);
  }
  console.log('  `,');

  const mainGS = officialSeats['suz-main'];
  console.log(`  startFinish: { x1: ${mainGS.x - 15}, y1: ${mainGS.y}, x2: ${mainGS.x + 15}, y2: ${mainGS.y} },`);
  console.log(`  label: { x: 140, y: 95 }`);
  console.log('},');

  console.log('\nGRANDSTAND mapDot (from official Suzuka Circuit KML):');
  for (const [id, p] of Object.entries(officialSeats)) {
    console.log(`  ${id}: { x: ${p.x}, y: ${p.y} }`);
  }

  // Write preview SVG with official positions
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
  <rect width="${W}" height="${H}" fill="#1a1a2e" />
  <path d="${pathStr}" fill="none" stroke="#E10600" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  ${Object.entries(officialSeats).map(([id, p]) =>
    `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5" />
  <text x="${p.x + 6}" y="${p.y + 3}" fill="white" font-size="7" font-family="sans-serif">${id.replace('suz-', '').toUpperCase()}</text>`
  ).join('\n  ')}
  <text x="140" y="12" fill="#666" font-size="8" text-anchor="middle" font-family="sans-serif">Suzuka Circuit — Complete with Spoon (from OSM + official KML)</text>
</svg>`;

  const fs = await import('fs');
  fs.writeFileSync('scripts/suzuka-preview-v2.svg', svgContent);
  console.log('\n✓ Preview: scripts/suzuka-preview-v2.svg');

  console.log(`\nControl points (${simp.length}):`);
  for (let i = 0; i < simp.length; i++) {
    console.log(`  [${i}] x:${r(simp[i].x)} y:${r(simp[i].y)}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
