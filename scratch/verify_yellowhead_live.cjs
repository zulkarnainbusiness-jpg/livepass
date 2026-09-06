const https = require('https');

const url = 'https://www.livepasswatch.info/passes/canada/british-columbia/yellowhead-pass';

console.log(`Auditing live URL: ${url}`);

https.get(url, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`Page size: ${data.length} bytes`);
    
    // Canonical check
    const canonicalMatch = data.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    console.log(`Canonical URL: ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);

    // Title check
    const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
    console.log(`Title (${titleMatch ? titleMatch[1].length : 0} chars): ${titleMatch ? titleMatch[1] : 'MISSING'}`);

    // Meta description
    const descMatch = data.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    console.log(`Meta Description (${descMatch ? descMatch[1].length : 0} chars): ${descMatch ? descMatch[1] : 'MISSING'}`);

    // JSON-LD Schemas
    const jsonLdMatches = data.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    console.log(`Found ${jsonLdMatches ? jsonLdMatches.length : 0} JSON-LD blocks`);
    if (jsonLdMatches) {
      jsonLdMatches.forEach((block, i) => {
        try {
          const content = block.replace(/<\/?script[^>]*>/gi, '');
          const parsed = JSON.parse(content);
          console.log(`Schema #${i+1} @type: ${parsed['@type'] || (parsed['@graph'] ? parsed['@graph'].map(g => g['@type']).join(', ') : 'unknown')}`);
        } catch (e) {
          console.log(`Schema #${i+1} parse error: ${e.message}`);
        }
      });
    }

    // Target 19 keywords check
    const targetKeywords = [
      'Yellowhead Pass opening date',
      'Yellowhead Pass is open',
      'Yellowhead Pass road conditions',
      'Yellowhead Pass road status',
      'Yellowhead Pass pass status report',
      'when does Yellowhead Pass open',
      'Yellowhead Pass closed',
      'Yellowhead Pass is closed',
      'Yellowhead Pass is it open today',
      'is Yellowhead Pass closed today',
      'Yellowhead Pass webcam',
      'Yellowhead Pass live webcam',
      'Yellowhead Pass cameras',
      'Yellowhead Pass summit camera',
      'when does Yellowhead Pass close for winter',
      'Yellowhead Pass map',
      'is Yellowhead Pass open right now',
      'Yellowhead Pass weather today',
      'Yellowhead Pass snow'
    ];

    console.log('\n--- TARGET KEYWORDS VERIFICATION ---');
    let matchedCount = 0;
    const lowerData = data.toLowerCase();
    targetKeywords.forEach(kw => {
      const found = lowerData.includes(kw.toLowerCase());
      if (found) matchedCount++;
      console.log(`${found ? '✅' : '❌'} "${kw}"`);
    });
    console.log(`Target keywords matched: ${matchedCount}/${targetKeywords.length}`);

    // French keywords check
    const frenchKeywords = [
      'Col Tête-Jaune',
      'état de la route',
      'caméras en direct',
      'météo',
      'conditions routières'
    ];
    console.log('\n--- REGIONAL FRENCH KEYWORDS VERIFICATION ---');
    frenchKeywords.forEach(kw => {
      const found = lowerData.includes(kw.toLowerCase());
      console.log(`${found ? '✅' : '❌'} "${kw}"`);
    });

    // Camera check
    console.log('\n--- WEBCAMS VERIFICATION ---');
    ['images.drivebc.ca/bchighwaycam/pub/cameras/182.jpg', 'images.drivebc.ca/bchighwaycam/pub/cameras/183.jpg', 'images.drivebc.ca/bchighwaycam/pub/cameras/184.jpg', 'images.drivebc.ca/bchighwaycam/pub/cameras/185.jpg'].forEach(cam => {
      const found = data.includes(cam);
      console.log(`${found ? '✅' : '❌'} Camera URL: ${cam}`);
    });

    // Verification methodology link check
    const hasMethLink = data.includes('/verification-methodology');
    console.log(`\n${hasMethLink ? '✅' : '❌'} Verification Methodology Link: /verification-methodology`);
  });
}).on('error', (e) => {
  console.error(`Error fetching URL: ${e.message}`);
});
