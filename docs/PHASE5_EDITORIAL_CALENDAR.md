# Phase 5: Content Plan & Editorial Calendar
Approved by Dave, June 10, 2026. Companion to PROJECT_STATUS_2026-06-10.md.

## Why these posts (the data)
GSC regex pull June 10 (Mar 9 - Jun 8, 2026), queries matching weight/loss/fat/cost/price/much/rate/fee/cheap/afford/busy/minute/session/month: **91 queries, 595 impressions, 0 clicks, avg position 44.9.** Real demand, no page targeting it.

Clusters (impressions @ avg position):
- **Low impact weight loss** (~300 impr across 25+ variants): "low impact workouts for weight loss" 22 @ 50, "low impact exercises for weight loss" 22 @ 66, "best low impact workout for weight loss" 12 @ 42, long tail down to pos 75. Biggest single cluster; one comprehensive post can own it.
- **Weight loss trainer/coach** (~160): "online weight loss coach near me" 70 @ 43 (biggest single query), "personal trainer for weight loss" 63 @ 51, "weight loss personal trainers near me" 14 @ 28, "weight loss coach chicago" 3 @ 27, "weight loss trainer chicago" 3 @ 32.
- **Cost/pricing** (~60): "chicago personal trainer cost" 27 @ 27, "personal trainer chicago cost" 13 @ 47, "personal trainer cost chicago" 7 @ 42, "cost of a personal trainer in chicago" 2 @ 70, "affordable personal trainer chicago" 3 @ 33, "12 week personal training program cost near me" 2 @ 1.
- **Busy professionals / AI-style queries** (~18, already ranking 1-12): "best one-on-one personal training with mindset coaching for busy professionals" 3 @ 1.3, "best fitness biohacking strategies busy professionals chicago" 2 @ 10.5, "customizable fitness training plans studio and on-site sessions" 6 @ 7.5, "personal training packages that include both in-person and virtual sessions" 5 @ 11.8, "flexible month-to-month personal training subscriptions" 2 @ 3.5. These look like AI-assistant sourced queries; reinforce with dedicated content.
- "30 minute" queries: zero current impressions. The 30-vs-60 post is a positioning play (Dave's differentiator: Transform sells 30-minute sessions), not existing demand.

Existing blog: **87 posts** (status doc said 104; 87 is the verified count), mostly generic 2021-2023 advice, no Chicago/commercial angle. No topic overlap with the 6 planned posts, so no cannibalization risk. Blog layout (BlogPost.astro) already appends a free-consultation CTA line with links to /studio-services/ and /contact/ on every post.

## The 6 posts

| # | Target publish | Working title | Primary keywords | Angle / notes | CTA path |
|---|---|---|---|---|---|
| 1 | PUBLISHED June 10, 2026 | How Much Does a Personal Trainer Cost in Chicago? (2026 Guide) | chicago personal trainer cost + variants | Real Chicago market rates vs Transform's published pricing ($45-55/session 1-on-1, $32.50-42.50 group, $60-80 pre-wedding). Dave OK with using real prices (they're public on studio-services). Explain 30-min session model honestly. FAQ section. | "Compare for yourself, first session free" |
| 2 | June wk 5 | The Best Low Impact Workouts for Weight Loss, From a Chicago Personal Trainer | low impact workouts/exercises for weight loss (full cluster) | Comprehensive trainer-authority guide; joint-friendly, over-40, beginners. Sample week plan. | Mid-post + end invite to free coached session |
| 3 | July wk 2 | How to Choose a Personal Trainer for Weight Loss in Chicago | personal trainer for weight loss; weight loss trainer/coach chicago | Buyer's guide; link a success story from /success-stories/ | "Meet us free before you decide" |
| 4 | July wk 4 | 30-Minute vs 60-Minute Personal Training: Which Actually Gets Results? | 30 minute personal training, positioning | Dave's request. Use published research: minimum effective dose, time-efficiency studies, adherence/"no time" barrier data. Defends Transform's 30-min model vs industry-standard 60. | "Try a free 30-minute session and feel the difference" |
| 5 | Aug wk 2 | Personal Training for Busy Professionals: Month-to-Month, In-Person or Virtual | the AI-style package/flexibility queries | Reinforce existing top-10 rankings; cover month-to-month, hybrid in-person/virtual, scheduling | Direct free first session |
| 6 | Aug wk 4 | Do Online Weight Loss Coaches Work? An Honest Look | online weight loss coach near me (70 impr) | Honest pros/cons; links to /online-training/ | Free consult + online training page |

Each post: 1,200-2,000 words, 2-3 internal links to service pages, one image (reuse from public/images/blog library of 141 files, or prepare new), frontmatter matching existing posts (title, excerpt, date, category, image, author: David Bostik).

## Workflow per post (agreed with Dave)
1. Claude drafts to **docs/drafts/** (cannot accidentally go live from there).
2. Dave reviews in plain language; requests changes.
3. On approval: Claude moves file into src/content/blog/ with final frontmatter + image.
4. Claude gives Dave a detailed handoff prompt for Google Antigravity (commit + push; husky pre-commit builds). Dave pastes it. Hostinger updates.
5. Verify live, then start next post.

## Measurement
Watch GSC for the target queries above moving from 0 clicks; track opt-in form submissions (HighLevel automation confirmed working June 10). Re-pull the same regex filter monthly.

## Still open after Phase 5
- Small pre-approved cleanup: switch site email everywhere to contact@transformpersonaltraining.com (test email arrived June 10; Dave confirmed). Do as its own change.
- Phase 6: schema cleanup. Phase 7: conversion path audit. See status doc.
