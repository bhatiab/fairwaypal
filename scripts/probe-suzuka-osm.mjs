#!/usr/bin/env node
/**
 * Probe OSM for Suzuka circuit using multiple query strategies.
 */

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

const queries = [
  {
    name: 'leisure=track in Suzuka bbox',
    q: `[out:json][timeout:30];way(34.835,136.525,34.850,136.545)["leisure"="track"];out tags;`
  },
  {
    name: 'any motorsport way in Suzuka bbox',
    q: `[out:json][timeout:30];way(34.835,136.525,34.850,136.545)["sport"];out tags;`
  },
  {
    name: 'landuse in Suzuka bbox (raceway)',
    q: `[out:json][timeout:30];(way(34.835,136.525,34.850,136.545)["landuse"];way(34.835,136.525,34.850,136.545)["highway"="raceway"];);out tags;`
  },
  {
    name: 'highway=raceway in Suzuka bbox',
    q: `[out:json][timeout:30];way(34.835,136.525,34.850,136.545)["highway"="raceway"];out tags;`
  },
  {
    name: 'name~Suzuka',
    q: `[out:json][timeout:30];(way(34.830,136.520,34.855,136.550)["name"~"Suzuka",i];relation(34.830,136.520,34.855,136.550)["name"~"Suzuka",i];);out tags;`
  },
  {
    name: 'any way with name in tight bbox',
    q: `[out:json][timeout:30];way(34.838,136.530,34.848,136.542);out tags qt 20;`
  },
];

async function run() {
  for (const { name, q } of queries) {
    console.log(`\n── ${name} ──`);
    try {
      const res = await fetch(OVERPASS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(q)}`,
      });
      const data = await res.json();
      const elements = data.elements || [];
      console.log(`  → ${elements.length} elements`);
      for (const el of elements.slice(0, 5)) {
        console.log(`    ${el.type}/${el.id}: ${JSON.stringify(el.tags || {}).slice(0, 200)}`);
      }
    } catch (e) {
      console.log(`  → Error: ${e.message}`);
    }
  }
}

run();
