import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://transformpersonaltraining.com';
const PUBLIC_DIR = path.join(__dirname, '../public');
const CONTENT_DIR = path.join(__dirname, '../src/content/blog');
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Static pages to include
const staticPages = [
    '',
    '/studio-services',
    '/online-training',
    '/success-stories',
    '/meet-the-team',
    '/blog',
    '/contact',
    '/join-the-team'
];

async function generateSitemap() {
    console.log('🗺️  Generating Sitemap...');

    let urls = [];

    // Add static pages
    staticPages.forEach(page => {
        urls.push({
            loc: `${SITE_URL}${page}`,
            lastmod: new Date().toISOString().split('T')[0],
            changefreq: 'weekly',
            priority: page === '' ? '1.0' : '0.8'
        });
    });

    // Add blog posts
    if (fs.existsSync(CONTENT_DIR)) {
        const blogFiles = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'));
        blogFiles.forEach(file => {
            const slug = file.replace('.md', '');
            urls.push({
                loc: `${SITE_URL}/blog/${slug}`,
                lastmod: new Date().toISOString().split('T')[0],
                changefreq: 'monthly',
                priority: '0.6'
            });
        });
        console.log(`   Found ${blogFiles.length} blog posts.`);
    }

    // Generate XML
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write to public directory
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated at public/sitemap.xml with ${urls.length} URLs.`);
}

generateSitemap();
