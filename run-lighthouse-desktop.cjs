const { execSync } = require('child_process');
const fs = require('fs');

console.log('Running Desktop Lighthouse...');
const env = { ...process.env, CHROME_PATH: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' };

const out = execSync(
  'npx -y lighthouse http://localhost:4173/ --preset=desktop --throttling-method=provided --chrome-flags="--headless --no-sandbox" --output=json --quiet',
  { env, maxBuffer: 100 * 1024 * 1024 }
);

fs.writeFileSync('desktop-results.json', out);
const r = JSON.parse(out);

console.log('\n========================================');
console.log('       DESKTOP LIGHTHOUSE REPORT         ');
console.log('========================================');
for (const c in r.categories) {
  console.log(`${r.categories[c].title}: ${Math.round(r.categories[c].score * 100)}`);
}

const a = r.audits;
console.log('\n--- CORE WEB VITALS ---');
console.log('FCP:', a['first-contentful-paint']?.displayValue);
console.log('LCP:', a['largest-contentful-paint']?.displayValue);
console.log('Speed Index:', a['speed-index']?.displayValue);
console.log('TBT:', a['total-blocking-time']?.displayValue);
console.log('CLS:', a['cumulative-layout-shift']?.displayValue);

console.log('\n--- AGENTIC BROWSING ---');
r.categories['agentic-browsing']?.auditRefs?.forEach(ref => {
  const aud = a[ref.id];
  console.log(`${ref.id}: score=${aud?.score} (${aud?.title})`);
});
