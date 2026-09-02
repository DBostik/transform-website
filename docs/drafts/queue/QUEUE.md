# Blog Post Queue (posts 2-12, pre-written June 2026)

Companion to docs/PHASE5_EDITORIAL_CALENDAR.md. Posts 7-12 approved by Dave June 11, 2026.

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
| 5 | 05-personal-training-for-busy-professionals.md | Personal Training for Busy Professionals: Month-to-Month, In-Person or Virtual | approved | done | |
| 6 | 06-do-online-weight-loss-coaches-work.md | Do Online Weight Loss Coaches Work? An Honest Look | not started | needed | |
| 7 | 07-how-long-does-it-take-to-see-results-with-a-personal-trainer.md | How Long Does It Take to See Results With a Personal Trainer? | not started | needed | |
| 8 | 08-best-personal-training-in-chicago.md | Best Personal Training in Chicago: How to Compare Your Options | not started | needed | |
| 9 | 09-what-a-12-week-transformation-actually-looks-like.md | What a 12-Week Transformation Actually Looks Like | not started | needed | |
| 10 | 10-personal-training-over-40.md | Personal Training Over 40: Why Joint-Friendly Beats No-Pain-No-Gain | not started | needed | |
| 11 | 11-how-to-stay-fit-through-a-chicago-winter.md | How to Stay Fit Through a Chicago Winter | not started | needed | |
| 12 | 12-how-to-get-through-the-holidays-without-losing-your-progress.md | How to Get Through the Holidays Without Losing Your Progress | not started | needed | |

## Target staging dates (every other Wednesday)

Post 2: June 24, 2026. Post 3: July 8. Post 4: July 22. Post 5: August 5. Post 6: August 19. Post 7: September 2. Post 8: September 16. Post 9: September 30. Post 10: October 14. Post 11: October 28. Post 12: November 11.
