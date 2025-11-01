/**
 * Сканирует app/* и components/* на предмет хардкодов (строк в JSX/TS/TSX),
 * пишет отчёт в stdout и в файл tmp/i18n-hardcodes.json.
 * Ищем кириллицу и "подозрительные" короткие lat/strings в UI.
 *
 * Запуск:
 *   node scripts/i18n-find-hardcodes.mjs
 */
import fs from "node:fs";
import path from "node:path";

const roots = ["app", "components"];
const exts = [".tsx", ".ts", ".jsx", ".js"];
const outDir = "tmp";
const outFile = path.join(outDir, "i18n-hardcodes.json");
const cyrillic = /[А-Яа-яЁё]/;
const skipDirs = new Set(["node_modules", ".next", "dist", ".turbo", "public"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (skipDirs.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (exts.some(ext => e.name.endsWith(ext))) files.push(p);
  }
}

function extractLines(file) {
  const src = fs.readFileSync(file, "utf8");
  const lines = src.split("\n");
  const found = [];
  lines.forEach((line, i) => {
    // простая эвристика: строки в кавычках, не являющиеся import/require/aria-label с ключами
    const matches = line.match(/(["'`])((?:(?!\1).)*)\1/g);
    if (!matches) return;
    for (const m of matches) {
      const val = m.slice(1, -1).trim();
      if (!val) continue;
      if (val.startsWith("t(") || val.includes(".")) continue; // грубо отсекаем ключи
      if (val.length < 2) continue;
      const looksUi = cyrillic.test(val) || /^[A-Z][a-z0-9 ,.!?'"()/-]{3,}$/.test(val);
      if (!looksUi) continue;
      // отфильтруем очевидные URL/пути/классы
      if (val.startsWith("/") || val.startsWith("http") || val.includes("{") || val.includes("class-")) continue;
      found.push({ line: i + 1, text: val });
    }
  });
  return found;
}

const files = [];
for (const r of roots) {
  if (fs.existsSync(r)) walk(r);
}

const report = [];
for (const f of files) {
  const found = extractLines(f);
  if (found.length) report.push({ file: f, found });
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(report, null, 2), "utf8");

console.log(`🔎 Просканировано файлов: ${files.length}`);
console.log(`✍️ Найдено файлов с хардкодами: ${report.length}`);
console.log(`📝 Подробный отчёт: ${outFile}`);
