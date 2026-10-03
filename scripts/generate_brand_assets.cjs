const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">
  <!-- Brand Background #FB542B / rgb(251,84,43) -->
  <rect width="100" height="100" fill="#FB542B" />

  <!-- Mountain Pass Emblem with safe margins for circle / square masks -->
  <g transform="translate(50, 50) scale(0.82) translate(-50, -50)">
    <defs>
      <linearGradient id="peakLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38BDF8" />
        <stop offset="100%" stop-color="#1D4ED8" />
      </linearGradient>
      <linearGradient id="peakRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#60A5FA" />
        <stop offset="100%" stop-color="#2563EB" />
      </linearGradient>
      <linearGradient id="roadSweep" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38BDF8" />
        <stop offset="50%" stop-color="#60A5FA" />
        <stop offset="100%" stop-color="#93C5FD" />
      </linearGradient>
    </defs>

    <!-- Primary Left Peak -->
    <path d="M12 76 L44 18 L68 76 Z" fill="url(#peakLeft)" />
    
    <!-- Snow Cap Left Peak -->
    <path d="M44 18 L52 33 L44 38 L36 33 Z" fill="#F0F9FF" opacity="0.95" />

    <!-- Secondary Right Peak -->
    <path d="M42 76 L68 28 L88 76 Z" fill="url(#peakRight)" opacity="0.9" />
    
    <!-- Snow Cap Right Peak -->
    <path d="M68 28 L74 39 L68 43 L62 39 Z" fill="#E0F2FE" opacity="0.9" />

    <!-- Dynamic Road Pass Curve -->
    <path d="M8 78 Q 42 60 92 78" stroke="url(#roadSweep)" stroke-width="5" stroke-linecap="round" />
    <!-- Center Divide Line -->
    <path d="M44 70 Q 60 63 76 72" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.8" />
  </g>
</svg>`;

/**
 * Creates a standard Windows ICO buffer containing multiple PNG images.
 */
function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const dirEntrySize = 16;
  const dirSize = images.length * dirEntrySize;
  let currentOffset = 6 + dirSize;

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 0);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    entries.push(entry);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(img => img.buffer)]);
}

async function generateAssets() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  
  // 1. Write both mountain-logo.svg and mountain-logo-v2.svg
  fs.writeFileSync(path.join(publicDir, 'mountain-logo.svg'), svgContent);
  fs.writeFileSync(path.join(publicDir, 'mountain-logo-v2.svg'), svgContent);
  console.log('Updated mountain-logo.svg & mountain-logo-v2.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 2. Generate PNG sizes
  const sizes = [
    { names: ['favicon-16x16.png', 'favicon-v2-16x16.png'], size: 16 },
    { names: ['favicon-32x32.png', 'favicon-v2-32x32.png'], size: 32 },
    { names: ['favicon-48x48.png', 'favicon-v2-48x48.png', 'favicon.png'], size: 48 }, // Google Search favorite 48x48
    { names: ['apple-touch-icon.png', 'apple-touch-icon-v2.png'], size: 180 },
    { names: ['favicon-192x192.png', 'favicon-v2-192x192.png'], size: 192 },
    { names: ['favicon-512x512.png', 'favicon-v2-512x512.png', 'logo.png'], size: 512 },
  ];

  const icoImages = [];

  for (const item of sizes) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png({ compressionLevel: 9 })
      .toBuffer();

    for (const n of item.names) {
      fs.writeFileSync(path.join(publicDir, n), pngBuffer);
    }
    console.log(`Generated ${item.names.join(', ')} (${item.size}x${item.size})`);

    if ([16, 32, 48].includes(item.size)) {
      icoImages.push({ size: item.size, buffer: pngBuffer });
    }
  }

  icoImages.sort((a, b) => a.size - b.size);

  // 3. Generate favicon.ico and favicon-v2.ico
  const icoBuffer = createIco(icoImages);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon-v2.ico'), icoBuffer);
  console.log('Generated favicon.ico and favicon-v2.ico with 16, 32, 48');

  // 4. Generate logo.webp
  const webpBuffer = await sharp(svgBuffer)
    .resize(512, 512)
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo.webp'), webpBuffer);
  fs.writeFileSync(path.join(publicDir, 'logo-v2.webp'), webpBuffer);
  console.log('Generated logo.webp and logo-v2.webp');

  console.log('All brand assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
