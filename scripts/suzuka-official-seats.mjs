#!/usr/bin/env node
/**
 * Fetch the official Suzuka Circuit Google My Maps KML data,
 * extract all named seat marker GPS coordinates, and project
 * them to the 280×180 SVG coordinate space.
 */

const KML_URL = 'https://www.google.com/maps/d/kml?mid=1mP4lvSdP4j5oLc8sbYDsWbt1WwvV7xM&forcekml=1';

async function main() {
  console.log('Fetching KML data from official Suzuka Circuit Google My Maps...');
  const res = await fetch(KML_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const kml = await res.text();

  // Extract all named Placemark points
  // Pattern: <Placemark> <name>X</name> ... <Point> <coordinates>lon,lat,0</coordinates>
  const placemarkRegex = /<Placemark>\s*<name>([^<]+)<\/name>[\s\S]*?<Point>\s*<coordinates>\s*([\d.]+),([\d.]+),[\d.]+\s*<\/coordinates>\s*<\/Point>/g;

  const markers = [];
  let match;
  while ((match = placemarkRegex.exec(kml)) !== null) {
    const name = match[1].trim();
    const lon = parseFloat(match[2]);
    const lat = parseFloat(match[3]);
    if (name && !isNaN(lon) && !isNaN(lat)) {
      markers.push({ name, lat, lon });
    }
  }

  // Also extract named Placemark icons (some use different patterns)
  const iconRegex = /<Placemark>\s*<name>([^<]*)<\/name>\s*<(?:description|styleUrl)[^>]*>[^<]*<\/(?:description|styleUrl)>\s*(?:<styleUrl>[^<]*<\/styleUrl>\s*)?<Point>\s*<coordinates>\s*([\d.]+),([\d.]+)/g;
  while ((match = iconRegex.exec(kml)) !== null) {
    const name = match[1].trim();
    const lon = parseFloat(match[2]);
    const lat = parseFloat(match[3]);
    if (name && !isNaN(lon) && !isNaN(lat)) {
      // Avoid duplicates
      if (!markers.find(m => m.name === name)) {
        markers.push({ name, lat, lon });
      }
    }
  }

  console.log(`\nFound ${markers.length} named markers:\n`);
  
  // Sort by name
  markers.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  
  for (const m of markers) {
    console.log(`  ${m.name.padEnd(40)} lat: ${m.lat.toFixed(6)}  lon: ${m.lon.toFixed(6)}`);
  }

  // Now project these using the same projection as our OSM circuit path
  // We need to use the same projection parameters as the circuit outline
  // From the OSM extraction, the circuit bbox was approximately:
  // Fetch OSM circuit data to get exact bbox
  console.log('\n\nFetching OSM circuit data for projection parameters...');
  const osmRes = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${encodeURIComponent(`[out:json][timeout:60];way(34.835,136.525,34.850,136.545)["highway"="raceway"]["sport"="motor"];(._;>;);out body;`)}`,
  });
  const osmData = await osmRes.json();

  // Build circuit coords (same filtering as the main extraction)
  const nodes = {};
  for (const el of osmData.elements) {
    if (el.type === 'node') nodes[el.id] = { lat: el.lat, lon: el.lon };
  }
  const ways = osmData.elements
    .filter(el => el.type === 'way')
    .filter(w => {
      const name = (w.tags?.name || '') + (w.tags?.['name:en'] || '');
      const nl = name.toLowerCase();
      if (nl.includes('pit lane') || nl.includes('pit')) return false;
      if (nl.includes('kart') || nl.includes('カート')) return false;
      if (nl.includes('南コース') || nl.includes('south')) return false;
      return true;
    });

  // Chain ways (same logic as extraction script)
  const remaining = ways.map(w => ({ id: w.id, nodes: [...w.nodes] }));
  let orderedNodeIds = [...remaining.shift().nodes];
  let maxIter = remaining.length * remaining.length + 10;
  while (remaining.length > 0 && maxIter-- > 0) {
    const lastId = orderedNodeIds[orderedNodeIds.length - 1];
    const firstId = orderedNodeIds[0];
    let found = false;
    for (let i = 0; i < remaining.length; i++) {
      const w = remaining[i];
      if (w.nodes[0] === lastId) { orderedNodeIds.push(...w.nodes.slice(1)); remaining.splice(i, 1); found = true; break; }
      if (w.nodes[w.nodes.length - 1] === lastId) { orderedNodeIds.push(...[...w.nodes].reverse().slice(1)); remaining.splice(i, 1); found = true; break; }
      if (w.nodes[w.nodes.length - 1] === firstId) { orderedNodeIds = [...w.nodes.slice(0, -1), ...orderedNodeIds]; remaining.splice(i, 1); found = true; break; }
      if (w.nodes[0] === firstId) { orderedNodeIds = [...[...w.nodes].reverse().slice(0, -1), ...orderedNodeIds]; remaining.splice(i, 1); found = true; break; }
    }
    if (!found) break;
  }
  const coords = orderedNodeIds.map(id => nodes[id]).filter(Boolean);

  // Calculate projection
  const W = 280, H = 180, PAD = 15;
  const lats = coords.map(c => c.lat);
  const lons = coords.map(c => c.lon);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLon = Math.min(...lons), maxLon = Math.max(...lons);
  const latCenter = (minLat + maxLat) / 2;
  const cosLat = Math.cos(latCenter * Math.PI / 180);
  const dLon = (maxLon - minLon) * cosLat;
  const dLat = maxLat - minLat;
  const usableW = W - 2 * PAD, usableH = H - 2 * PAD;
  const scale = Math.min(usableW / dLon, usableH / dLat);
  const projW = dLon * scale, projH = dLat * scale;
  const offX = PAD + (usableW - projW) / 2;
  const offY = PAD + (usableH - projH) / 2;

  console.log(`\nProjection: bbox lat [${minLat.toFixed(5)}, ${maxLat.toFixed(5)}] lon [${minLon.toFixed(5)}, ${maxLon.toFixed(5)}]`);
  console.log(`Scale: ${scale.toFixed(2)}, offset: (${offX.toFixed(1)}, ${offY.toFixed(1)})`);

  function gps2svg(lat, lon) {
    return {
      x: Math.round(offX + (lon - minLon) * cosLat * scale),
      y: Math.round(offY + (maxLat - lat) * scale),
    };
  }

  console.log('\n' + '═'.repeat(60));
  console.log('ALL OFFICIAL SEAT POSITIONS (projected to 280×180 SVG)');
  console.log('═'.repeat(60) + '\n');

  const projected = markers.map(m => ({
    ...m,
    svg: gps2svg(m.lat, m.lon),
  }));

  for (const m of projected) {
    console.log(`  ${m.name.padEnd(30)} → SVG: { x: ${m.svg.x}, y: ${m.svg.y} }  (GPS: ${m.lat.toFixed(5)}, ${m.lon.toFixed(5)})`);
  }

  // Map our 4 grandstands to the official seat designations
  console.log('\n' + '═'.repeat(60));
  console.log('OUR 4 GRANDSTAND MAPPINGS');
  console.log('═'.repeat(60));
  
  const mappings = {
    'suz-main':  { officialNames: ['V2', 'V1', 'A1'], desc: 'Main Grandstand = V2/V1/A1 (T0)' },
    'suz-esses': { officialNames: ['D', 'C'], desc: 'S-Curves = D/C Seats (T3-T5)' },
    'suz-130r':  { officialNames: ['G'], desc: '130R = G Seat (T15)' },
    'suz-spoon': { officialNames: ['M'], desc: 'Spoon = M Seat (T14)' },
  };

  for (const [id, mapping] of Object.entries(mappings)) {
    const matchingMarkers = projected.filter(m => mapping.officialNames.some(n => m.name.startsWith(n)));
    console.log(`\n  ${id} — ${mapping.desc}`);
    if (matchingMarkers.length > 0) {
      // Average position of matching markers
      const avgX = Math.round(matchingMarkers.reduce((s, m) => s + m.svg.x, 0) / matchingMarkers.length);
      const avgY = Math.round(matchingMarkers.reduce((s, m) => s + m.svg.y, 0) / matchingMarkers.length);
      for (const m of matchingMarkers) {
        console.log(`    ${m.name}: { x: ${m.svg.x}, y: ${m.svg.y} }`);
      }
      console.log(`    → RECOMMENDED mapDot: { x: ${avgX}, y: ${avgY} }`);
    } else {
      console.log(`    No matching marker found`);
    }
  }

  // Also look at the gate markers for reference
  const gates = projected.filter(m => m.name.includes('ゲート') || m.name.includes('Gate'));
  if (gates.length > 0) {
    console.log('\n\nGATE POSITIONS:');
    for (const g of gates) {
      console.log(`  ${g.name}: { x: ${g.svg.x}, y: ${g.svg.y} }`);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
