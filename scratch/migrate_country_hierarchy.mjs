import fs from 'fs';
import path from 'path';

// 1. Load region to country mapping
const rawMapping = JSON.parse(fs.readFileSync('scratch/region_country_mapping.json', 'utf8'));
rawMapping['khyber'] = 'pakistan';

const mapping = rawMapping;

const countries = [
  'france',
  'india',
  'italy',
  'usa',
  'switzerland',
  'canada',
  'norway',
  'austria',
  'pakistan',
  'chile'
];

console.log('Mapping loaded with regions:', Object.keys(mapping).length);

// 2. Prepare destination directories:
// For each country:
// Root country folder: d:/livepass/country/<country> (already has index.html or we copy from <country>.html)
// AND also root country folder directly: d:/livepass/<country>/<region>/index.html
// So both:
// https://www.livepasswatch.info/india/ladakh
// https://www.livepasswatch.info/country/india/ladakh
// are fully supported!

countries.forEach(c => {
  if (!fs.existsSync(c)) {
    fs.mkdirSync(c, { recursive: true });
  }
  // Copy country hub page to <country>/index.html if <country>.html exists
  if (fs.existsSync(`${c}.html`)) {
    fs.copyFileSync(`${c}.html`, path.join(c, 'index.html'));
  }
});

// For each region, create both:
// 1) <country>/<region>/index.html
// 2) country/<country>/<region>/index.html
// 3) Keep country/<region>/index.html (for backwards compatibility)

let migratedCount = 0;

for (const [region, country] of Object.entries(mapping)) {
  if (!country) continue;
  
  const sourceHtmlFile = `${region}.html`;
  if (!fs.existsSync(sourceHtmlFile)) {
    console.warn(`Source ${sourceHtmlFile} does not exist, skipping`);
    continue;
  }
  
  let htmlContent = fs.readFileSync(sourceHtmlFile, 'utf8');
  
  // Update canonical URL in htmlContent to https://www.livepasswatch.info/<country>/<region>
  // Also update og:url
  const targetCanonical = `https://www.livepasswatch.info/${country}/${region}`;
  
  htmlContent = htmlContent.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']+["']\s*\/?>/i,
    `<link rel="canonical" href="${targetCanonical}">`
  );
  
  htmlContent = htmlContent.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']+["']\s*\/?>/i,
    `<meta property="og:url" content="${targetCanonical}">`
  );

  // 1) Target: <country>/<region>/index.html
  const targetDir1 = path.join(country, region);
  fs.mkdirSync(targetDir1, { recursive: true });
  fs.writeFileSync(path.join(targetDir1, 'index.html'), htmlContent);

  // 2) Target: country/<country>/<region>/index.html
  const targetDir2 = path.join('country', country, region);
  fs.mkdirSync(targetDir2, { recursive: true });
  fs.writeFileSync(path.join(targetDir2, 'index.html'), htmlContent);

  // 3) Target: country/<region>/index.html (keep updated)
  const targetDir3 = path.join('country', region);
  if (fs.existsSync(targetDir3)) {
    fs.writeFileSync(path.join(targetDir3, 'index.html'), htmlContent);
  }

  migratedCount++;
}

console.log(`Successfully migrated ${migratedCount} regions to /<country>/<region> and /country/<country>/<region>!`);
