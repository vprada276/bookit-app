---
name: commit-push
description: Stage changed files, write a clean conventional commit message, and push to origin/main. Use after completing any meaningful task. The auto-save Stop hook is a fallback — this is the primary commit path.
disable-model-invocation: false
---

When invoked, do the following:

1. Run `git status --short` to see what has changed.
2. Run `git diff HEAD` to understand what actually changed (don't just rely on filenames).
3. Based on the diff, determine the conventional commit type:
   - `feat` — new feature or visible behaviour
   - `fix` — bug fix
   - `style` — UI/visual change with no logic change
   - `refactor` — code restructure without behaviour change
   - `chore` — config, deps, tooling, gitignore
   - `docs` — CLAUDE.md, README, or comment changes
4. Write a commit message following this format:
   - Subject line: `type: concise description in present tense` (max 72 chars, no period)
   - Body (optional): one or two lines explaining *why* if the diff alone doesn't make it obvious
   - Footer: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
5. Stage all relevant changed files with `git add` (be specific — list files, don't blindly `git add -A` if unrelated files are dirty).
6. Commit using a HEREDOC to preserve formatting.
7. Run `git push origin main`.
8. Confirm with the commit hash and a one-line summary of what was pushed.

If `$ARGUMENTS` is provided, treat it as the commit message subject line (skip the diff analysis for the subject, but still write the footer and push).
