import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('🚀 LivePassWatch Static Site Prerender Engine...');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Please run vite build first.');
  process.exit(1);
}

// Copy static .html files to dist directory for production serving
const rootFiles = fs.readdirSync(rootDir);
const htmlFiles = rootFiles.filter(file => file.endsWith('.html'));

console.log(`📦 Copying ${htmlFiles.length} static HTML pass pages to dist/`);

htmlFiles.forEach(file => {
  const srcPath = path.resolve(rootDir, file);
  const destPath = path.resolve(distDir, file);
  fs.copyFileSync(srcPath, destPath);
});

// Copy sitemap.xml and robots.txt if present
['sitemap.xml', 'robots.txt'].forEach(file => {
  const srcPath = path.resolve(rootDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.resolve(distDir, file));
  }
});

console.log('✅ SSG Prerendering completed successfully! All pass pages and sitemap bundled into dist/.');
