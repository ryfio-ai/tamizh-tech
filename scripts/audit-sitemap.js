const http = require('http');

async function run() {
  try {
    const res = await fetch('http://localhost:3000/sitemap.xml');
    const xml = await res.text();
    const urls = (xml.match(/<loc>(.*?)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, ''));
    console.log('Auditing ' + urls.length + ' URLs from sitemap.xml...');

    const not200 = [];
    let count200 = 0;

    for (let i = 0; i < urls.length; i++) {
      const u = urls[i];
      const parsed = new URL(u);
      const path = parsed.pathname;

      try {
        const resp = await fetch('http://localhost:3000' + path, { redirect: 'manual' });
        if (resp.status === 200) {
          count200++;
        } else {
          not200.push({ url: u, path, status: resp.status, location: resp.headers.get('location') });
          console.log(`[${resp.status}] ${path} ${resp.headers.get('location') ? '-> ' + resp.headers.get('location') : ''}`);
        }
      } catch (err) {
        not200.push({ url: u, path, error: err.message });
        console.log(`[ERROR] ${path}: ${err.message}`);
      }
    }

    console.log(`\nAudit complete!`);
    console.log(`Total 200 OK: ${count200}`);
    console.log(`Total Non-200 / Issues: ${not200.length}`);
    if (not200.length > 0) {
      console.log('Details:', JSON.stringify(not200, null, 2));
    }
  } catch (err) {
    console.error('Fatal audit error:', err);
  }
}

run();
