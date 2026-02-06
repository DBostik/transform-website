# Handoff Guide - Designer & Engineer

This document provides detailed instructions for the Designer and Engineer skills to execute the Transform Personal Training website rebuild.

---

## For the Designer (@designer skill)

### Your Mission
Create a modern, high-converting design system and page layouts for Transform Personal Training that:
- Builds trust and authority in the fitness industry
- Converts visitors into consultation bookings
- Works flawlessly on mobile, tablet, and desktop
- Aligns with the brand's transformation-focused messaging

### What You Need to Read
1. **PLAN.md** - Sections: Design Spec, SEO Strategy (for content structure)
2. **Current Website** - https://www.transformpersonaltraining.com (for brand analysis)
3. **This document** - For specific instructions

### Assets You'll Need from User
- [ ] Logo files (SVG, PNG - high resolution)
- [ ] Brand colors (if different from current site)
- [ ] Trainer photos (professional headshots)
- [ ] Client testimonial photos
- [ ] Before/after transformation images
- [ ] Studio photos (interior, equipment)
- [ ] Any existing brand guidelines

### Your Deliverables

#### 1. Tailwind Configuration (`tailwind.config.js`)
Create a custom Tailwind config with:
- **Color Palette**: Extract from current site or create fresh palette
  - Primary color (brand color)
  - Secondary/accent colors
  - Neutral grays
  - Success/CTA colors (high contrast)
- **Typography Scale**: Font families, sizes, weights, line heights
- **Spacing Scale**: Consistent spacing system
- **Breakpoints**: Mobile, tablet, desktop, large desktop
- **Custom Components**: Button styles, card styles, form styles

#### 2. Component Library
Design reusable components:
- **Buttons**: Primary, secondary, outline, CTA
- **Cards**: Service cards, testimonial cards, team member cards
- **Forms**: Input fields, textareas, select dropdowns, submit buttons
- **Navigation**: Desktop nav, mobile hamburger menu, footer
- **Sections**: Hero, features, testimonials, CTA blocks
- **Icons**: Service icons, social media icons, UI icons

#### 3. Page Layouts (Figma or HTML/CSS)
Design complete layouts for:
1. **Homepage**
   - Hero section with primary CTA
   - Services overview (Studio + Online)
   - Social proof (testimonials)
   - "What Happens First" section
   - Founder story
   - Consultation form
   - Footer

2. **Studio Services Page**
   - Service details
   - Benefits list
   - Pricing/packages
   - Booking CTA
   - Location info

3. **Online Training Page**
   - Program features
   - Technology/app showcase
   - Pricing comparison
   - Sign-up CTA

4. **Success Stories Page**
   - Testimonial grid/carousel
   - Before/after images
   - Client quotes

5. **Meet the Team Page**
   - Trainer profiles
   - Credentials
   - Personal stories

6. **Contact Page**
   - Contact form
   - Map
   - Hours and info

7. **Blog Listing & Post Template**
   - Blog grid
   - Single post layout

#### 4. Design System Documentation
Document:
- Color usage guidelines
- Typography hierarchy
- Spacing rules
- Component usage
- Responsive behavior
- Accessibility considerations

### Design Principles to Follow
1. **Trust & Authority**: Professional, polished, credible
2. **Transformation-Focused**: Emphasize results and success stories
3. **Clear CTAs**: Obvious, high-contrast calls-to-action
4. **Mobile-First**: Design for mobile, enhance for desktop
5. **Fast & Light**: Minimize heavy graphics, optimize for speed
6. **Accessible**: WCAG 2.1 AA compliance (color contrast, font sizes)

### Recommended Prompt for Designer Skill

```
I need you to create a complete design system and page layouts for Transform Personal Training, a Chicago-based personal training studio. 

CONTEXT:
- Current website: www.transformpersonaltraining.com (analyze for brand identity)
- Business: In-studio and online personal training with guaranteed results
- Target audience: Chicago professionals seeking fitness transformation
- Key differentiator: Personalized 30-minute sessions, founder lost 150lbs

DELIVERABLES:
1. Tailwind CSS configuration with custom color palette, typography, and components
2. Component library (buttons, cards, forms, navigation)
3. Complete page layouts for: Homepage, Studio Services, Online Training, Success Stories, Meet the Team, Contact, Blog
4. Design system documentation

DESIGN REQUIREMENTS:
- Modern, fresh aesthetic (not generic fitness stock photos)
- Trust-building and professional
- Mobile-first responsive design
- High-converting CTAs for consultation bookings
- Transformation-focused messaging
- Fast-loading (minimal heavy graphics)
- WCAG 2.1 AA accessible

BRAND ANALYSIS:
Please analyze the current website to extract:
- Color palette
- Typography preferences
- Imagery style
- Brand voice/messaging

Then create a refreshed design that modernizes while preserving brand recognition.

TECHNICAL CONSTRAINTS:
- Framework: Astro
- Styling: Tailwind CSS v4
- Must integrate HighLevel forms (embedded)
- Must support schema markup and SEO meta tags

Please start by analyzing the current site and proposing a color palette and typography system for my approval before proceeding with full layouts.
```

---

## For the Engineer (@engineer skill)

### Your Mission
Build a lightning-fast, SEO-optimized website using Astro and Tailwind CSS that:
- Achieves 90+ Lighthouse scores across all metrics
- Ranks highly for "personal training Chicago" keywords
- Integrates seamlessly with HighLevel CRM
- Provides a flawless user experience on all devices

### What You Need to Read
1. **PLAN.md** - Sections: Tech Spec, Roadmap, SEO Strategy
2. **docs/SEO_STRATEGY.md** - Complete SEO implementation guide
3. **Designer's Deliverables** - Tailwind config, components, layouts
4. **This document** - For specific instructions

### Prerequisites from User
- [ ] HighLevel account credentials or webhook URLs
- [ ] Domain registrar access (for DNS)
- [ ] Google Analytics 4 property ID
- [ ] Any existing analytics to preserve
- [ ] Content for all pages (text, images)

### Your Deliverables

#### Phase 1: Foundation & Setup
```bash
# Initialize Astro project
npm create astro@latest . -- --template minimal --install --git --typescript strict --tailwind

# Install dependencies
npm install @astrojs/sitemap @astrojs/image

# Set up Git
git init
git add .
git commit -m "Initial commit: Astro + Tailwind setup"

# Create branch structure
git checkout -b develop
```

**File Structure:**
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Layout.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Testimonials.astro
│   │   └── CTA.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   └── Form.astro
│   └── SEO.astro
├── pages/
│   ├── index.astro (homepage)
│   ├── studio-services.astro
│   ├── online-training.astro
│   ├── success-stories.astro
│   ├── meet-the-team.astro
│   ├── join-the-team.astro
│   ├── contact.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
├── layouts/
│   └── BaseLayout.astro
├── styles/
│   └── global.css
└── utils/
    └── seo.ts
public/
├── images/
├── fonts/
└── robots.txt
```

#### Phase 2: SEO Component
Create reusable SEO component (`src/components/SEO.astro`):
```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  schema?: object;
}

const { title, description, ogImage, schema } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<head>
  <!-- Basic Meta Tags -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:type" content="website" />
  {ogImage && <meta property="og:image" content={ogImage} />}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {ogImage && <meta name="twitter:image" content={ogImage} />}

  <!-- Schema Markup -->
  {schema && (
    <script type="application/ld+json" set:html={JSON.stringify(schema)} />
  )}
</head>
```

#### Phase 3: Core Pages Implementation
Build each page following the roadmap in PLAN.md Phase 3.

**Key Implementation Details:**

1. **Image Optimization:**
```astro
---
import { Image } from '@astrojs/image/components';
---

<Image
  src="/images/hero.jpg"
  alt="Personal trainer working with client in Chicago studio"
  width={1200}
  height={800}
  format="webp"
  quality={80}
  loading="eager"
  fetchpriority="high"
/>
```

2. **Schema Markup:**
Use examples from `docs/SEO_STRATEGY.md` for each page type.

3. **Heading Hierarchy:**
Follow structure from `docs/SEO_STRATEGY.md` - one H1 per page, logical H2-H6 structure.

#### Phase 4: HighLevel Integration

**Option 1: Embed HighLevel Forms**
```astro
<!-- Embed HighLevel form via iframe or script -->
<div id="highlevel-form-container">
  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
  <iframe 
    src="[HighLevel Form URL]" 
    style="width:100%;height:500px;border:none;"
    title="Contact Form"
  ></iframe>
</div>
```

**Option 2: Custom Form with Webhook**
```astro
---
// src/pages/api/submit-form.ts
export async function post({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');

  // Send to HighLevel webhook
  const response = await fetch('[HighLevel Webhook URL]', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone }),
  });

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
---
```

#### Phase 5: Performance Optimization

**Checklist:**
- [ ] All images optimized (WebP/AVIF)
- [ ] Lazy loading for below-fold images
- [ ] Font preloading: `<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>`
- [ ] Minimal JavaScript (Astro ships zero JS by default)
- [ ] CSS purging (Tailwind does this automatically)
- [ ] Sitemap generated: `@astrojs/sitemap`
- [ ] Robots.txt configured
- [ ] Compression enabled (Vercel/Netlify does this)

#### Phase 6: Deployment

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Netlify:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Environment Variables:**
```
HIGHLEVEL_WEBHOOK_URL=https://...
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SITE_URL=https://www.transformpersonaltraining.com
```

### Recommended Prompt for Engineer Skill

```
I need you to build the Transform Personal Training website using Astro and Tailwind CSS based on the approved design system.

CONTEXT:
- Project Plan: Read PLAN.md for complete specifications
- SEO Strategy: Read docs/SEO_STRATEGY.md for implementation details
- Design System: [Designer will provide Tailwind config and component designs]
- Tech Stack: Astro + Tailwind CSS v4, hosted on Vercel/Netlify

YOUR TASKS:
1. Initialize Astro project with Tailwind CSS
2. Set up project structure (components, pages, layouts)
3. Create reusable SEO component with meta tags and schema markup
4. Build all pages per PLAN.md Phase 3 roadmap:
   - Homepage
   - Studio Services
   - Online Training
   - Success Stories
   - Meet the Team
   - Join the Team
   - Contact
   - Blog (listing + post template)
5. Integrate HighLevel forms (webhook URLs: [TO BE PROVIDED])
6. Implement all schema markup from docs/SEO_STRATEGY.md
7. Optimize for Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
8. Set up deployment pipeline to Vercel/Netlify
9. Configure sitemap, robots.txt, and analytics

SEO REQUIREMENTS (CRITICAL):
- One H1 per page with target keyword
- Unique title and meta description per page (see docs/SEO_STRATEGY.md)
- Schema markup on every page (LocalBusiness, Person, Review, FAQ, Article)
- All images with descriptive alt text and proper dimensions
- Responsive images with srcset
- Preload hero images with fetchpriority="high"
- Font-display: swap for web fonts

PERFORMANCE REQUIREMENTS:
- Lighthouse score: 90+ on all metrics
- LCP < 2.5 seconds
- INP < 200 milliseconds
- CLS < 0.1
- All images in WebP/AVIF format
- Lazy loading for below-fold images

INTEGRATION REQUIREMENTS:
- HighLevel form integration (consultation form, contact form)
- Google Analytics 4
- Google Search Console verification
- Sitemap auto-generation

Please follow the roadmap in PLAN.md Phase 1-8 and update the roadmap as you complete each task. Start with Phase 1: Foundation & Setup.
```

---

## Collaboration Workflow

### Designer → Engineer Handoff
1. Designer completes design system and layouts
2. Designer commits Tailwind config to Git
3. Designer provides component specifications
4. Designer updates PLAN.md with design decisions
5. Engineer pulls latest changes and begins implementation

### Engineer → Sentinel Handoff
1. Engineer completes all pages and integrations
2. Engineer deploys to staging environment
3. Engineer updates PLAN.md roadmap (mark completed tasks)
4. Sentinel begins testing and QA
5. Sentinel documents bugs in PLAN.md Bug Log

### Architect Oversight
- Architect reviews PLAN.md regularly
- Architect clarifies specs when questions arise
- Architect approves major decisions
- Architect maintains single source of truth

---

## Common Questions

### Q: What if the user doesn't have all assets ready?
**A:** Use placeholder content and note in PLAN.md what's needed. Designer can use stock photos temporarily, but mark them clearly for replacement.

### Q: What if HighLevel integration is complex?
**A:** Start with embedded forms (simplest). If custom styling needed, use custom forms with webhook API. Document any issues in PLAN.md.

### Q: What if we need to change the tech stack?
**A:** Consult Architect first. Update PLAN.md with rationale. Get user approval before proceeding.

### Q: How do we handle content writing?
**A:** Use existing content from current site as starting point. Optimize for SEO using keywords from docs/SEO_STRATEGY.md. Flag any missing content for user to provide.

---

## Success Criteria

### Design Phase Complete When:
- [ ] Tailwind config created with custom theme
- [ ] All components designed and documented
- [ ] All page layouts designed (mobile + desktop)
- [ ] Design system documentation complete
- [ ] User has approved designs

### Development Phase Complete When:
- [ ] All pages built and responsive
- [ ] All forms integrated with HighLevel
- [ ] All SEO elements implemented (meta tags, schema, headings)
- [ ] Lighthouse scores 90+ on all metrics
- [ ] Site deployed to staging environment
- [ ] PLAN.md roadmap updated

### Ready for Launch When:
- [ ] All QA issues resolved
- [ ] User has approved final site
- [ ] Analytics and tracking installed
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Sitemap submitted to Google Search Console

---

## Emergency Contacts

**User (Dave Bostik):** [Contact info in README.md]  
**Architect:** Use `@architect` skill for plan clarifications  
**Designer:** Use `@designer` skill for design questions  
**Engineer:** Use `@engineer` skill for technical implementation  
**Sentinel:** Use `@sentinel` skill for QA and testing

