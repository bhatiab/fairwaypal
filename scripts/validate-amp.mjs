/**
 * validate-amp.mjs
 *
 * Validates every HTML file under public/amp/ against the AMP spec.
 * Uses the official amphtml-validator package (same engine as amp.dev).
 *
 * Usage:  node scripts/validate-amp.mjs
 * Exit code 1 if any file has errors, 0 if all pass.
 */

import { readdir, readFile } from "node:fs/promises";
import { resolve, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import amphtmlValidator from "amphtml-validator";

const __dirname = new URL(".", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const AMP_DIR = resolve(__dirname, "..", "public", "amp");

/* ── Collect all HTML files recursively ── */
async function collectHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await collectHtml(full)));
    } else if (e.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const validator = await amphtmlValidator.getInstance();
  const files = await collectHtml(AMP_DIR);

  if (files.length === 0) {
    console.error("No AMP files found in public/amp/. Run npm run amp:generate first.");
    process.exit(1);
  }

  let errorCount = 0;
  let warnCount = 0;
  let passCount = 0;

  for (const filePath of files) {
    const html = await readFile(filePath, "utf8");
    const result = validator.validateString(html);
    const rel = relative(AMP_DIR, filePath).replace(/\\/g, "/");

    if (result.status === "PASS") {
      passCount++;
      // Only print warnings, not clean passes (keeps output manageable)
      const warnings = result.errors.filter((e) => e.severity === "WARNING");
      if (warnings.length) {
        warnCount += warnings.length;
        console.warn(`  ⚠  /amp/${rel}`);
        for (const w of warnings) {
          console.warn(`      L${w.line}: ${w.message}`);
        }
      }
    } else {
      errorCount++;
      console.error(`  ✗  /amp/${rel}`);
      for (const e of result.errors.filter((e) => e.severity !== "WARNING")) {
        console.error(`      L${e.line}: ${e.message}`);
      }
    }
  }

  console.log(
    `\nAMP validation: ${passCount} passed, ${errorCount} failed, ${warnCount} warnings (${files.length} files total)`
  );

  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Validator crashed:", err);
  process.exit(1);
});
