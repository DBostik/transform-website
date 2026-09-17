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
| 2 | PUBLISHED June 24, 2026 | The Best Low Impact Workouts for Weight Loss, From a Chicago Personal Trainer | low impact workouts/exercises for weight loss (full cluster) | Comprehensive trainer-authority guide; joint-friendly, over-40, beginners. Sample week plan. | Mid-post + end invite to free coached session |
| 3 | PUBLISHED July 8, 2026 | How to Choose a Personal Trainer for Weight Loss in Chicago | personal trainer for weight loss; weight loss trainer/coach chicago | Buyer's guide; link a success story from /success-stories/ | "Meet us free before you decide" |
| 4 | PUBLISHED September 2, 2026 | 30-Minute vs 60-Minute Personal Training: Which Actually Gets Results? | 30 minute personal training, positioning | Dave's request. Use published research: minimum effective dose, time-efficiency studies, adherence/"no time" barrier data. Defends Transform's 30-min model vs industry-standard 60. | "Try a free 30-minute session and feel the difference" |
| 5 | PUBLISHED September 16, 2026 | Personal Training for Busy Professionals: Month-to-Month, In-Person or Virtual | the AI-style package/flexibility queries | Reinforce existing top-10 rankings; cover month-to-month, hybrid in-person/virtual, scheduling | Direct free first session |
| 6 | Staging Sept 30, 2026 | Do Online Weight Loss Coaches Work? An Honest Look | online weight loss coach near me (70 impr) | DRAFTED AND APPROVED Sept 17, 2026, image done. Honest pros and cons, the research, what it costs, seven vetting questions, and a 90-day expectation section. Links to /online-training/ | Free coaching call + studio option for locals |

Each post: 1,200-2,000 words, 2-3 internal links to service pages, one NEW image per post (Dave generates in Nano Banana from a prompt Claude supplies with each draft; saved as webp under 150KB in public/images/blog/), frontmatter matching existing posts (title, excerpt, date, category, image, author: David Bostik).

## Workflow per post (agreed with Dave)
1. Claude drafts to **docs/drafts/** (cannot accidentally go live from there).
2. Dave reviews in plain language; requests changes.
3. On approval: Claude moves file into src/content/blog/ with final frontmatter + image.
4. Claude gives Dave a detailed handoff prompt for Google Antigravity (commit + push; husky pre-commit builds). Dave pastes it. Hostinger updates.
5. Verify live, then start next post.

## Measurement
Watch GSC for the target queries above moving from 0 clicks; track opt-in form submissions (HighLevel automation confirmed working June 10). Re-pull the same regex filter monthly.

## Posts 7-15 (Sep 2026 onward) — TOPICS proposed; approval is per post
CORRECTION (Sept 17, 2026): an earlier version of this heading said Dave approved posts 7-12 on June 11. That was wrong, and the same wrong line has been removed from QUEUE.md. Only the topics were agreed. Each post is approved individually after Dave reads the draft, and QUEUE.md's status board is the only record of approval.

| # | Target publish | Working title | Goes after | Notes |
|---|---|---|---|---|
| 7 | Sep wk 2 | How Long Does It Take to See Results With a Personal Trainer? | evergreen pre-purchase question | Honest timelines; bridges to 12-week framing; free session CTA |
| 8 | Sep wk 4 | Best Personal Training in Chicago: How to Compare Your Options | best personal training chicago (203 impr @ pos 5.3) | Editorial comparison guide; complements homepage, don't duplicate its content |
| 9 | Oct wk 2 | What a 12-Week Transformation Actually Looks Like | 12 week personal training program cost near me (@ pos 1), transformation queries | Walk through the journey week by week; heavy success-stories linking |
| 10 | Oct wk 4 | Personal Training Over 40: Why Joint-Friendly Beats No-Pain-No-Gain | the over-40 buyer behind the low impact cluster | Links to post 2 (low impact) and success stories |
| 11 | Nov wk 2 | How to Stay Fit Through a Chicago Winter | seasonal/local | Private indoor studio angle; Lakeview mention |
| 12 | Nov wk 4 | How to Get Through the Holidays Without Losing Your Progress | seasonal | Link existing Drinking and Dieting post; CTA: start in December, beat the January rush |
| 14 | Oct 28, 2026 | Online vs In-Person Personal Training: How to Pick | online personal training vs in person | Added Sept 17, 2026 from the Querywright briefs pack. Decision guide, not a pitch: studio for locals who want hands-on 30-minute sessions, online for distance, travel and schedule. Same coaches, different delivery | Dual CTA: free first session for locals, free coaching call for everyone else |
| 15 | Dec 9, 2026 | What Daily Check-Ins With a Coach Actually Mean | personal training with daily check-ins, daily support | Added Sept 17, 2026 from the Querywright briefs pack. What a check-in is between workouts: logging, what the coach replies to, missed-day protocol, nutrition notes. The wedge against template and AI programs. Do not promise response times beyond the published one |

## Pre-written queue workflow (supersedes per-post drafting once queue exists)
Approved drafts live in docs/drafts/queue/ as 02-<slug>.md ... 12-<slug>.md with QUEUE.md tracking status. Frontmatter date stays "SET AT PUBLISH" until staging. Every other Wednesday the scheduled task "biweekly-blog-draft-transform" (after it has been updated to staging mode) sets the date, moves the next approved file into src/content/blog/, marks it published here and in QUEUE.md, and hands Dave the Antigravity publishing prompt. Dave publishes; nothing goes live automatically.

## Cadence decision (Sept 17, 2026)
One new post every other week, not weekly. Publishing frequency is not a Google ranking factor, and the blog already holds 93 posts, 85 of them pre-2026 with a median of 553 words. The off week goes to improving an existing page: refreshing a thin legacy post, adding internal links, or improving a service page. Revisit in about 90 days using Search Console.

Intended order: 6 (Sept 30), 7 (Oct 14), 14 (Oct 28), 11 (Nov 11, seasonal), 12 (Nov 25, seasonal), 15 (Dec 9), then 8, 9 and 10. The scheduled task stages the lowest-numbered APPROVED post, so approval order controls what actually ships.

## Online training push (Sept 17, 2026)
Shipped in commits 2d541ab and ab3c3f5, both live-verified:
- /online-training/ rewritten around a real coach rather than an app, with published pricing starting at $127/week, a weekly live 1-on-1 video call as the headline differentiator, and a dedicated HighLevel form used only on that page.
- Homepage: non-local line in the services intro, Online Coaching card rewritten, online FAQ answer rewritten in both the visible copy and the JSON-LD with a link to /online-training/.
- Posts 1, 3 and 13 updated so the blog no longer sends non-local readers only to the Lakeview studio, and so no published post contradicts the new published price. Post 5 already linked.
Full status, including what is still open from the Grok master plan, is in the Drive doc "Online Training Growth Plan — STATUS UPDATE Sept 17, 2026 (SHIPPED)".

## Still open after Phase 5
- Small pre-approved cleanup: switch site email everywhere to contact@transformpersonaltraining.com (test email arrived June 10; Dave confirmed). Do as its own change.
- Phase 6: schema cleanup. Phase 7: conversion path audit. See status doc.
- Sitewide titles and meta descriptions have never been audited. docs/SEO_STRATEGY.md is from February 2026 and still recommends creating /online-fitness-coaching/, which is a doorway page and must NOT be built.
- The blog layout (src/layouts/BlogPost.astro) appends a studio-only CTA to all 93 posts. Adding an online option there is a one-line change; deferred because those legacy posts get little traffic.
