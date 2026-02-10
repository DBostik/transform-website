import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';
const PUBLIC_DIR = './public';
const SITE_URL = 'https://transformpersonaltraining.com';

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
}

function getPages(dir, baseUrl = '') {
    const files = fs.readdirSync(dir);
    let pages = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            pages = pages.concat(getPages(filePath, path.join(baseUrl, file)));
        } else if (file.endsWith('.astro') || file.endsWith('.md')) {
            let pagePath = path.join(baseUrl, file);

            // Remove file extension
            pagePath = pagePath.replace(/\.(astro|md)$/, '');

            // Handle index pages
            if (pagePath.endsWith('index')) {
                pagePath = pagePath.replace(/index$/, '');
            }

            // Normalize slashes
            pagePath = pagePath.replace(/\\/g, '/');

            // Remove trailing slash if it exists (unless it's root)
            if (pagePath.length > 0 && pagePath.endsWith('/')) {
                pagePath = pagePath.slice(0, -1);
            }

            // Filter out special files/directories if needed (e.g., 404, etc.)
            if (pagePath !== '404') {
                pages.push(pagePath);
            }
        }
    }
    return pages;
}

const pages = getPages(PAGES_DIR);
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
console.log('Sitemap generated successfully at public/sitemap.xml');
