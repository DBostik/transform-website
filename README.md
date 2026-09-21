# Transform Personal Training - Website Rebuild

## Project Overview

This is a complete rebuild of the Transform Personal Training website (www.transformpersonaltraining.com) to create a modern, fast, SEO-optimized, and mobile-responsive experience.

**Business:** Transform Personal Training  
**Location:** 2900 N Broadway St, Chicago, IL 60657  
**Services:** In-studio personal training, online coaching, nutrition guidance  
**Current Site:** https://www.transformpersonaltraining.com

---

## Project Goals

1. **Modern Design**: Fresh, contemporary aesthetic that builds trust and authority
2. **Performance**: Lightning-fast load times with excellent Core Web Vitals scores
3. **SEO Excellence**: Top rankings for "personal training Chicago" and related keywords
4. **Mobile-First**: Flawless experience on all devices
5. **Conversion-Focused**: Clear CTAs and optimized forms for lead generation
6. **HighLevel Integration**: Seamless connection to existing CRM

---

## Technology Stack

- **Framework**: Astro (performance-first static site generator)
- **Styling**: Tailwind CSS v4
- **Hosting**: Hostinger, serving the committed `dist/` folder from GitHub `main` (see `DEPLOYMENT_INSTRUCTIONS.md`)
- **Forms**: HighLevel integration via webhooks
- **Analytics**: Google Analytics 4, Google Search Console
- **SEO**: Schema.org JSON-LD, optimized meta tags

---

## Project Structure

```
Transform Website/
├── .agent/                  # Agent skills and workflows
│   ├── skills/
│   │   ├── architect/      # Planning and strategy
│   │   ├── designer/       # UI/UX design
│   │   ├── engineer/       # Development
│   │   └── sentinel/       # QA and testing
│   └── workflows/
├── docs/                    # Documentation
│   ├── SEO_STRATEGY.md     # Comprehensive SEO guide
│   └── HANDOFF_GUIDE.md    # Designer/Engineer handoff
├── PLAN.md                  # Master project plan (single source of truth)
├── README.md                # This file
└── [src/]                   # Source code (to be created)
```

---

## Key Documents

### 📋 PLAN.md
**The single source of truth for this project.**  
Contains:
- Current project status
- Complete tech stack specifications
- Design specifications
- Detailed roadmap (Phases 1-9)
- Bug log
- Next steps

### 🔍 docs/SEO_STRATEGY.md
**Comprehensive SEO implementation guide.**  
Contains:
- Target keywords
- Meta tag templates
- Schema markup examples
- Core Web Vitals optimization
- Local SEO strategy
- Content strategy

### 🎨 docs/HANDOFF_GUIDE.md
**Instructions for designer and engineer.**  
Contains:
- How to use the plan
- Prompts for each skill
- Asset requirements
- Integration details

---

## Current Status

**Phase:** Planning & Research ✅  
**Next Phase:** Design System Creation  
**Ready For:** Designer skill (`@designer`)

---

## How to Use This Project

### For the Architect (You)
1. Review and update `PLAN.md` as the project evolves
2. Keep roadmap current with completed tasks
3. Clarify specs when designer/engineer has questions
4. Maintain the "single source of truth"

### For the Designer
1. Read `PLAN.md` sections: Design Spec, SEO Strategy (for content structure)
2. Read `docs/HANDOFF_GUIDE.md` for detailed instructions
3. Create design system in Tailwind config
4. Design all page layouts and components
5. Update `PLAN.md` with design decisions

### For the Engineer
1. Read `PLAN.md` sections: Tech Spec, Roadmap
2. Read `docs/HANDOFF_GUIDE.md` for detailed instructions
3. Implement designs using Astro + Tailwind
4. Integrate HighLevel forms
5. Optimize for performance and SEO
6. Update `PLAN.md` roadmap as tasks complete

### For the Sentinel (QA)
1. Review `PLAN.md` for acceptance criteria
2. Test all functionality across devices/browsers
3. Audit SEO implementation
4. Verify Core Web Vitals scores
5. Document bugs in `PLAN.md` Bug Log

---

## Quick Start Commands

### When Engineer Initializes Project:
```bash
# Create new Astro project with Tailwind
npm create astro@latest . -- --template minimal --install --git --typescript strict --tailwind

# Install additional dependencies
npm install @astrojs/sitemap @astrojs/image

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Important Links

- **Current Website**: https://www.transformpersonaltraining.com
- **Google Business**: [To be added]
- **HighLevel Account**: [Credentials needed from user]
- **Domain Registrar**: [To be confirmed with user]

---

## Contact Information

**Business Owner**: Dave Bostik  
**Business Phone**: (312) 635-5139  
**Business Email**: contact@email.transformfitcoach.com  
**Studio Address**: 2900 N Broadway St, Chicago, IL 60657

---

## Next Steps

1. ✅ **Planning Complete** - PLAN.md and SEO_STRATEGY.md created
2. ⏳ **Gather Assets** - Logo, photos, testimonials, HighLevel credentials
3. ⏳ **Design Phase** - Use `@designer` skill to create design system
4. ⏳ **Development Phase** - Use `@engineer` skill to build website
5. ⏳ **QA Phase** - Use `@sentinel` skill to test and audit
6. ⏳ **Launch** - Deploy to production and migrate domain

---

## Questions or Issues?

Refer to `PLAN.md` for detailed specifications. If you need clarification on any aspect of the project, ask the Architect (`@architect` skill) to update the plan.

 
