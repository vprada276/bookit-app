# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Bookit** — a service discovery and booking web app (Uber Eats-style, for local services). Stack: React 19, TypeScript 6, Vite 8, Tailwind CSS 3, React Router 7, Lucide React.

The app is a web app today. The long-term goal is a native mobile app (App Store + Play Store) via a framework like React Native or Capacitor — keep that migration in mind when making architectural decisions.

## Working style

**Always propose a plan and wait for approval before writing any code.** Describe what you'll change and why, then implement only after the user confirms.

## Build & dev commands

```
npm run dev        # start dev server (Vite, port 5173)
npm run build      # tsc -b && vite build (type errors block build)
npm run lint       # eslint . (flat config, eslint v9+)
npm run preview    # preview production build locally
```

## TypeScript gotchas

- TypeScript 6 with `erasableSyntaxOnly` — type-only imports are removed automatically; don't use `import type` as a crutch, but don't fight it either.
- `noUnusedLocals` and `noUnusedParameters` are enabled — remove any unused variables before finishing.
- `moduleResolution: bundler` — path imports resolve like a bundler, not Node. No `.js` extension needed.
- React 19 new JSX transform is active — **do not import React** at the top of components.

## Code style

- Tailwind utility classes only — no inline `style={{}}` props, no CSS modules.
- Custom Tailwind tokens: `primary-{50-900}` (indigo), `shadow-card`, `shadow-card-hover`, `shadow-float`.
- Components are functions (not classes). Props interfaces are defined inline or in `src/types/index.ts` for shared shapes.
- No Prettier rules are custom — Prettier runs with defaults after every edit via a PostToolUse hook.

## Data layer

All business data lives in `src/data/` as typed TypeScript arrays. The plan is to replace this with **Supabase** in a future phase. When touching data:
- Keep helper functions in `src/data/businesses.ts` (`getBusinessById`, etc.) — these are the single swap point for Supabase queries later.
- Add new entity types to `src/types/index.ts` first, before writing data or components.
- Never hardcode business or category data outside of `src/data/`.

## Mobile-first

Every UI change must work on small screens **before** desktop. Test responsive layout at every step. Use Tailwind's mobile-first breakpoints (`sm:`, `md:`, `lg:`). No fixed widths that break on narrow viewports.

## Git workflow

**After completing any task — no exceptions — commit and push to GitHub.** This is mandatory, not optional. Every session must leave the repo in a pushed state so work is never lost.

- All commits go directly to `main` — no feature branches.
- Commit at the end of every logical unit of work: a new feature, a bug fix, a config change, a refactor. Do not batch multiple unrelated changes into one commit.
- Use the `/commit-push` skill to write a clean conventional commit and push. If the skill is unavailable, run `git add`, `git commit`, and `git push origin main` directly.
- The Stop hook auto-saves with `chore: auto-save` if a session ends without committing — that's a safety net, not a substitute for a real commit.
- Commit message format: `type: short description` (e.g. `feat: add search filter`, `fix: booking modal validation`).
- Never leave the session without verifying `git status` is clean and `git log --oneline -1` shows the latest work on GitHub.

## No tests yet

There is no test framework configured. Do not add test files unless explicitly asked. If asked to add tests, use **Vitest** (it ships with Vite, zero config).
