# SEO Project Status, June 10, 2026

Working state of the SEO overhaul. Written so any future session (or person) can pick up instantly.

## Site facts (verified this session)
- Astro 4.16 static site, builds to /dist. Hosted on Hostinger (LiteSpeed), NOT Firebase. `.htaccess` controls routing/redirects.
- Canonical domain: https://transformpersonaltraining.com (non-www, trailing slashes). www, http, and no-slash variants all 301 correctly.
- transformfitcoach.com 301s to the main domain (root only; deep paths 404, HEAD requests 405). Email domain MX: main domain = Hostinger mail, fitcoach = Google Workspace.
- Deploy flow: commit (husky pre-commit runs `npm run build` + stages dist) -> push to GitHub via Google Antigravity -> Hostinger updates. DEPLOYMENT_INSTRUCTIONS.md has manual zero-downtime swap fallback.
- Forms: HighLevel/LeadConnector iframes. Working Quick Lead form ID: DePsF4xxRYG8Xte6IjhU (homepage + 3 service pages). Contact page form: TTPaX8eoout8rttFXD1e. Popup (disabled trigger): qXzxX9rUnMDpX0jgk5RU.
- 104 blog posts in src/content/blog (dates 2021 to Feb 2026).

## Deployed and live-verified June 10, 2026
1. CONVERSION: dead consultation forms on /studio-services/, /online-training/, /success-stories/ replaced with working HighLevel embed. (They previously submitted nowhere; leads were silently lost.)
2. Homepage: visible 5-question FAQ section added (matches FAQPage schema word for word); title now "Personal Trainer Chicago | Transform Personal Training"; schema sameAs fixed to real profiles (facebook.com/Transformpt, instagram.com/transformfitcoach, Yelp).
3. Titles/descriptions updated: studio-services ("Private Personal Training Studio in Chicago | Transform"), success-stories, meet-the-team, blog.
4. All internal links use trailing slashes (no more per-click 301s). Footer gained Blog link.
5. Favicons created and linked (blue T monogram). public/: favicon.ico, 16/32 pngs, apple-touch-icon.png.
6. llms.txt added for AI crawlers.
7. Branded 404 page (404.astro + ErrorDocument), returns proper 404 status.
8. .htaccess: rescue 301s for /healthy-restaurants-in-chicago/ (-> /blog/the-top-7-healthy-restaurants-in-chicago/) and /stop-the-insanity/ (-> /blog/), HSTS header, long-cache for hashed assets (1y immutable) and images (30d).
9. success-stories: descriptive alt text on all 27 before/after images, Lakeview mention in hero.
10. OG share image switched to 39KB webp (was 566KB png).
All of the above verified live: status codes, titles, redirects, headers, form embeds, FAQ rendering.

## Key data (GSC, Mar 9 to Jun 8, 2026)
- 182 clicks / 30.1K impressions / 0.6% CTR / avg position 12.4.
- "personal trainer near me": 8,297 impressions at pos 7.4 (won via GBP, not website).
- Chicago cluster (~4,600 impressions/3mo): personal trainer chicago 1,059 @ 11.5; personal training chicago 444 @ 10.5; best personal training chicago 203 @ 5.3; studio variants ~490 @ 9.5-11.
- Lakeview queries: only 25 impressions; "personal trainer lakeview" already pos 4.9. Lincoln Park: 54 impressions @ ~18.8 (small; LP page = optional someday, build as genuinely unique content if done).
- Homepage "ghost": old http://www. homepage indexed separately (69 clicks @ pos 6.6 vs real page 86 @ 12.5). Redirects now live; Google will consolidate over weeks. Expect a rankings bump from this alone.
- Cost queries (~70 impr, pos 27-70): untapped; add pricing FAQ to studio-services.
- Weight loss queries: pos 27-51, need content. Blog currently earns mostly non-commercial impressions (quote/recipe queries).

## Remaining roadmap (priority order)
1. OWNER: Google Business Profile optimization (checklist delivered in chat, Phase 3). Biggest lever for "near me". Steady review generation (2-3/month) + reply to all.
2. OWNER: send test email to contact@transformpersonaltraining.com; if received, update site email everywhere (footer, contact page, schema, llms.txt) to unify citations. Facebook already lists this address.
3. OWNER: one test submission through a live form to confirm HighLevel automation fires.
4. Phase 5 (not started): content gap analysis + 3-month editorial calendar (2 posts/month). Targets: weight loss Chicago cluster, pricing/cost content, 30-minute workout angle, busy professionals. Every post links to free consultation CTA.
5. Phase 6 (not started): schema upgrades. Remove self-serving aggregateRating (5.0/33) from homepage LocalBusiness (Google ignores it; counts drift). Add LocalBusiness schema to contact page. Person schema for Dave exists on meet-the-team.
6. Phase 7 (not started): conversion path audit. Known items: blog newsletter form is dead (remove or wire to GHL), blog index has no consultation CTA, CTA wording inconsistent across pages ("Schedule Free Consultation" vs "Book a Breakthrough Call" etc.), studio-services hero lacks a CTA button, GHL iframes could lazy-load, PopupForm ships disabled but still loads its iframe on blog/service pages.
7. Optional: pricing FAQ section on studio-services ("How much does a personal trainer cost in Chicago?"), Lincoln Park page (unique content only), GA4 install for lead measurement, path-preserving forwarding for transformfitcoach.com deep links, delete dead code (src/pages/api/*, HiddenGHL* components, stale public/sitemap.xml).
8. Watch: GSC over next 2-4 weeks for www-consolidation bump; resubmit sitemap if needed.

## Cautions for future sessions
- Owner is non-technical: explain in plain language, one major change at a time, always distinguish local files vs live site, never deploy without his go.
- node_modules on his Mac was corrupted once (possibly iCloud Desktop sync offloading files); fix is `npm ci`. Consider moving project off iCloud-synced Desktop.
- Do NOT run npm install/ci into the mounted folder from a Linux sandbox (platform-specific binaries); build-test in a sandbox copy instead.
- Do NOT recommend replacing HighLevel forms or removing the Mindbody Members link.
