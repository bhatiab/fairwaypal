# FairwayPal

This repository is a cleaned scaffold forked from an older event-content project. The legacy sport-specific routes, datasets, generated static exports, and branding have been removed while preserving the underlying application setup you wanted to keep.

## Preserved Pieces

- Next.js 14 App Router structure
- Tailwind CSS configuration
- shadcn UI setup in src/components/ui
- Vercel configuration
- Reusable Expedia CTA and GetYourGuide widget helpers

## Local Development

On this Windows setup, use `npm.cmd` instead of `npm` when PowerShell execution policy blocks script execution.

```sh
npm.cmd install
npm.cmd run dev
```

## Validation

```sh
npm.cmd run lint
npm.cmd run typecheck
```

## Next Step

Build the FairwayPal product routes and data model on top of this reduced base rather than reusing any of the removed event-specific content architecture.
