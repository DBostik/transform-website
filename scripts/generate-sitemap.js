import fs from 'fs';
import path from 'path';

const SITE = 'https://transformpersonaltraining.com';
const DIST_DIR = 'dist';
const SITEMAP_FILE = path.join(DIST_DIR, 'sitemap.xml');

function getFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, allFiles);
        } else {
            if (file.endsWith('.html')) {
                allFiles.push(name);
            }
        }
    }
    return allFiles;
}

try {
    console.log('Generating sitemap manually...');
    const files = getFiles(DIST_DIR);

    const urls = files.map(file => {
        // Normalize path and remove 'dist' prefix
        let urlPath = file
            .replace(/\\/g, '/')
            .replace(/^dist\//, '/')
            .replace(/\/index\.html$/, '/')
            .replace(/\.html$/, '');

        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        return `${SITE}${urlPath}`;
    });

    // Unique URLs only
    const uniqueUrls = [...new Set(urls)].filter(url => !url.includes('/404'));

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_FILE, sitemapContent);
    console.log(`✅ Success! Sitemap generated at ${SITEMAP_FILE}`);
    console.log(`Found ${uniqueUrls.length} pages.`);
} catch (error) {
    console.error('❌ Error generating sitemap:', error);
}
