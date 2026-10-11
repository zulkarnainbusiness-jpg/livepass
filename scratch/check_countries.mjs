import fs from 'fs';

const countries = ['france', 'india', 'italy', 'usa', 'switzerland', 'canada', 'norway', 'austria', 'pakistan', 'chile'];
const mapping = {};

countries.forEach(c => {
  const file = c + '.html';
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = [...content.matchAll(/href=["']([a-zA-Z0-9_-]+)\.html["']/g)].map(m => m[1]);
    const unique = [...new Set(matches)].filter(m => 
      m !== 'index' && m !== 'about' && m !== 'terms' && m !== 'privacy' && m !== 'country' && m !== c
    );
    mapping[c] = unique;
  }
});

console.log(JSON.stringify(mapping, null, 2));
