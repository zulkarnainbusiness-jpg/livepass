import fs from 'fs';

const rootFiles = fs.readdirSync('.');
const htmlFiles = rootFiles.filter(f => f.endsWith('.html') && !['index.html', 'about.html', 'terms.html', 'privacy.html', 'country.html'].includes(f));

const countryPages = ['france.html', 'india.html', 'italy.html', 'usa.html', 'switzerland.html', 'canada.html', 'norway.html', 'austria.html', 'pakistan.html', 'chile.html'];

const regionFiles = htmlFiles.filter(f => !countryPages.includes(f));

const results = {};

regionFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const slug = file.replace('.html', '');
  
  // Look for BreadcrumbList in json-ld or HTML breadcrumbs
  // Match item: .../([a-z]+).html where position is 2 or just check breadcrumb text
  let country = null;
  
  const bcMatch = content.match(/itemListElement["']?:\s*\[([\s\S]*?)\]/);
  if (bcMatch) {
    const bcText = bcMatch[1];
    const items = [...bcText.matchAll(/name["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);
    const urls = [...bcText.matchAll(/item["']?:\s*["']([^"']+)["']/g)].map(m => m[1]);
    
    // Check if any url is <country>.html or name is Country
    for (let u of urls) {
      for (let c of ['france', 'india', 'italy', 'usa', 'switzerland', 'canada', 'norway', 'austria', 'pakistan', 'chile']) {
        if (u.includes('/' + c) || u.includes('/' + c + '.html')) {
          country = c;
          break;
        }
      }
      if (country) break;
    }
    if (!country) {
      for (let name of items) {
        let n = name.toLowerCase();
        if (n.includes('india')) country = 'india';
        else if (n.includes('united states') || n.includes('usa')) country = 'usa';
        else if (n.includes('switzerland') || n.includes('swiss')) country = 'switzerland';
        else if (n.includes('austria')) country = 'austria';
        else if (n.includes('france')) country = 'france';
        else if (n.includes('italy')) country = 'italy';
        else if (n.includes('canada')) country = 'canada';
        else if (n.includes('norway')) country = 'norway';
        else if (n.includes('pakistan')) country = 'pakistan';
        else if (n.includes('chile')) country = 'chile';
        if (country) break;
      }
    }
  }

  // Also check HTML breadcrumbs: e.g. <div class="breadcrumbs"> ... <a href="india.html">India</a>
  if (!country) {
    const htmlBc = content.match(/class=["'][^"']*breadcrumb[^"']*["'][\s\S]*?<\/nav>/i) || content.match(/class=["'][^"']*breadcrumb[^"']*["'][\s\S]*?<\/div>/i);
    if (htmlBc) {
      for (let c of ['france', 'india', 'italy', 'usa', 'switzerland', 'canada', 'norway', 'austria', 'pakistan', 'chile']) {
        if (htmlBc[0].toLowerCase().includes(c)) {
          country = c;
          break;
        }
      }
    }
  }
  
  results[slug] = country;
});

const unassigned = Object.entries(results).filter(([k, v]) => !v);
console.log('Unassigned count:', unassigned.length);
if (unassigned.length > 0) {
  console.log('Unassigned list:', unassigned.map(x => x[0]));
}

const breakdown = {};
Object.entries(results).forEach(([k, v]) => {
  breakdown[v] = (breakdown[v] || 0) + 1;
});
console.log('Breakdown:', breakdown);

fs.writeFileSync('scratch/region_country_mapping.json', JSON.stringify(results, null, 2));
