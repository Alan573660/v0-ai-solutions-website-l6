/**
 * Полуавтоматическая замена найденных хардкодов на t("..."):
 * - Читает tmp/i18n-hardcodes.json (результат i18n-find-hardcodes.mjs)
 * - Использует маппинг ключей из tmp/i18n-map.json (создайте вручную или сгенерите)
 * - Делает точечные замены строковых литералов на t("key")
 *
 * Защита от поломок: делает бэкап каждого файла в tmp/backups/<path>.
 *
 * Запуск:
 *   node scripts/i18n-replace.mjs
 */
import fs from "node:fs";
import path from "node:path";

const reportFile = "tmp/i18n-hardcodes.json";
const mapFile = "tmp/i18n-map.json";
const backupRoot = "tmp/backups";

if (!fs.existsSync(reportFile)) {
  console.error("Нет отчёта tmp/i18n-hardcodes.json — сначала запустите i18n-find-hardcodes.mjs");
  process.exit(1);
}
if (!fs.existsSync(mapFile)) {
  console.error("Нет маппинга tmp/i18n-map.json — создайте файл вида {\"Some Text\":\"namespace.key\",...}");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportFile, "utf8"));
const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));

function backup(file) {
  const dest = path.join(backupRoot, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(file, dest);
}

for (const item of report) {
  const file = item.file;
  let src = fs.readFileSync(file, "utf8");
  let replaced = 0;

  for (const { text } of item.found) {
    const key = map[text];
    if (!key) continue;
    const literal = JSON.stringify(text); // безопасное представление
    const regex = new RegExp(literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    if (regex.test(src)) {
      if (replaced === 0) backup(file);
      src = src.replace(regex, `t("${key}")`);
      replaced++;
    }
  }

  if (replaced) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`✅ ${file}: заменено ${replaced} литералов`);
  }
}

console.log("Готово. Проверьте изменения и запустите `pnpm i18n:check`.");
