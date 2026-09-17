# Blog Post Queue (posts 2-12, pre-written June 2026)

Companion to docs/PHASE5_EDITORIAL_CALENDAR.md. Approval status for every post lives in the status board below and nowhere else.

## How this works

- Claude drafts each post here as `02-<slug>.md` through `12-<slug>.md` with frontmatter date set to the placeholder `SET AT PUBLISH`.
- Dave reviews each draft in chat. When he approves it, its status below changes to **approved**.
- Every other Wednesday at 9am the scheduled task `biweekly-blog-draft-transform` stages the lowest-numbered **approved** post: sets the real date (format like "July 8, 2026"), moves the file to `src/content/blog/<slug>.md` with the number prefix dropped, marks it published here and in the calendar doc, and hands Dave a ready-to-paste Google Antigravity publishing prompt. Dave publishes it himself. Nothing goes live automatically.
- The task skips its run if fewer than 12 days have passed since the most recent published date below. It never stages a post that is not approved, and it never stages a post whose image file is missing from `public/images/blog/`.
- Images: every post gets a NEW image. Dave generates each one in Nano Banana from a prompt Claude provides with the draft; Claude converts it to webp under 150KB and saves it to `public/images/blog/`.

## Status board

Statuses: not started / drafted / approved / published. Image: needed / done.

| # | File | Working title | Status | Image | Published |
|---|------|---------------|--------|-------|-----------|
| 1 | (already live) how-much-does-a-personal-trainer-cost-in-chicago.md | How Much Does a Personal Trainer Cost in Chicago? (2026 Guide) | published | done | June 10, 2026 |
| 2 | 02-best-low-impact-workouts-for-weight-loss.md | The Best Low Impact Workouts for Weight Loss, From a Chicago Personal Trainer | published | done | June 24, 2026 |
| 3 | 03-how-to-choose-a-personal-trainer-for-weight-loss-in-chicago.md | How to Choose a Personal Trainer for Weight Loss in Chicago | published | done | July 8, 2026 |
| 4 | 04-30-minute-vs-60-minute-personal-training.md | 30-Minute vs 60-Minute Personal Training: Which Actually Gets Results? | published | done | September 2, 2026 |
| 5 | 05-personal-training-for-busy-professionals.md | Personal Training for Busy Professionals: Month-to-Month, In-Person or Virtual | published | done | September 16, 2026 |
| 6 | 06-do-online-weight-loss-coaches-work.md | Do Online Weight Loss Coaches Work? An Honest Look | approved | done | |
| 7 | 07-how-long-does-it-take-to-see-results-with-a-personal-trainer.md | How Long Does It Take to See Results With a Personal Trainer? | drafted | done | |
| 8 | 08-best-personal-training-in-chicago.md | Best Personal Training in Chicago: How to Compare Your Options | not started | needed | |
| 9 | 09-what-a-12-week-transformation-actually-looks-like.md | What a 12-Week Transformation Actually Looks Like | not started | needed | |
| 10 | 10-personal-training-over-40.md | Personal Training Over 40: Why Joint-Friendly Beats No-Pain-No-Gain | not started | needed | |
| 11 | 11-how-to-stay-fit-through-a-chicago-winter.md | How to Stay Fit Through a Chicago Winter | not started | needed | |
| 12 | 12-how-to-get-through-the-holidays-without-losing-your-progress.md | How to Get Through the Holidays Without Losing Your Progress | not started | needed | |
| 13 | 13-is-personal-training-worth-it-in-chicago.md | Is Personal Training Worth It in Chicago? A Private Studio Reality Check | published | done | September 9, 2026 |
| 14 | 14-online-vs-in-person-personal-training.md | Online vs In-Person Personal Training: How to Pick | not started | needed | |
| 15 | 15-what-daily-check-ins-actually-mean.md | What Daily Check-Ins With a Coach Actually Mean | not started | needed | |

## Staging dates

The scheduled task stages the lowest-numbered approved post on its next run, subject to the 12-day gap rule. There is no fixed per-post calendar. Most recent published post: post 5 on September 16, 2026.

Cadence decision (Sept 17, 2026): one new post every other week. The off week goes to improving an existing page instead of publishing more.

## Intended order (approval controls what stages, not the file number)

Posts 14 and 15 come from the Querywright briefs pack and support the online training push. Posts 11 and 12 are seasonal and need their months.

1. Post 6, online weight loss coaches (approved) - Sept 30
2. Post 7, how long results take - Oct 14
3. Post 14, online vs in-person - Oct 28
4. Post 11, Chicago winter (seasonal) - Nov 11
5. Post 12, holidays (seasonal) - Nov 25
6. Post 15, daily check-ins - Dec 9
7. Posts 8, 9, 10 after that

Briefs for the two new posts:
- Post 14: primary keyword "online personal training vs in person". A decision guide, not a sales pitch: the Lakeview studio for locals who want hands-on 30-minute sessions, online for distance, travel and schedule. Same coaches, different delivery. Dual CTA, free first session for locals and a free coaching call for everyone else. 1,400-1,800 words.
- Post 15: primary keywords "personal training with daily check-ins", "daily support". What a check-in actually is between workouts: logging, what the coach replies to, what happens on a missed day, nutrition notes. This is the wedge against template and AI programs. Link /online-training/. Do not promise response times beyond the published one (within 24 hours, usually faster). 1,200-1,600 words.
