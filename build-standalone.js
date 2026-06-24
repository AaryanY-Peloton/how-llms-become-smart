#!/usr/bin/env node
/* Build a single self-contained HTML file with every image inlined as a
   base64 data URI. Run:  node build-standalone.js
   Output: LLM-talk-standalone.html  (open it anywhere — no images/ folder needed). */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'index.html');
const IMG_DIR = path.join(__dirname, 'images');
const OUT = path.join(__dirname, 'LLM-talk-standalone.html');

const MIME = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
};

let html = fs.readFileSync(SRC, 'utf8');

// 1. Collect every image the deck might reference: data-img="..." plus direct src="images/..."
const referenced = new Set();
for (const m of html.matchAll(/data-img="([^"]+)"/g)) referenced.add(m[1]);
for (const m of html.matchAll(/src="images\/([^"]+)"/g)) referenced.add(decodeURIComponent(m[1]));

// 2. Build base64 map only for files that actually exist on disk.
const map = {};
let embedded = 0, missing = [];
for (const fn of referenced) {
  const p = path.join(IMG_DIR, fn);
  if (!fs.existsSync(p)) { missing.push(fn); continue; }
  const ext = path.extname(fn).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const b64 = fs.readFileSync(p).toString('base64');
  map[fn] = `data:${mime};base64,${b64}`;
  embedded++;
}

// 3. Inject the map as window.__IMG__ right after <body> so it exists before any script runs.
//    (Use a function replacer so $ in base64 is never treated as a replacement token.)
const inject = `<script>window.__IMG__=${JSON.stringify(map)};</script>`;
html = html.replace('<body>', () => '<body>\n' + inject);

// 4. Inline the one direct <img src="images/..."> (the transformer diagram) so it works with no folder.
html = html.replace(/src="images\/([^"]+)"/g, (full, fn) => {
  const key = decodeURIComponent(fn);
  return map[key] ? `src="${map[key]}"` : full;
});

fs.writeFileSync(OUT, html);

const mb = (fs.statSync(OUT).size / 1048576).toFixed(2);
console.log(`✓ wrote ${path.basename(OUT)}  (${mb} MB, ${embedded} images embedded)`);
if (missing.length) console.log('  note: no file on disk for: ' + missing.join(', ') + ' (placeholder will show)');
