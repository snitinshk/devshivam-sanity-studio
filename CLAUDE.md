# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a [Sanity Studio](https://www.sanity.io/) v3 project for the content management backend of `shivamshukla.dev`. It connects to Sanity project `o58x9hzu` (dataset: `production`).

## Commands

```bash
pnpm dev           # Start local dev server (Sanity Studio)
pnpm build         # Build for production
pnpm deploy        # Deploy Studio to Sanity's hosted URL
pnpm deploy-graphql  # Deploy GraphQL API
```

No test runner is configured.

## Architecture

- [sanity.config.ts](sanity.config.ts) — Studio entry point: registers plugins (`structureTool`, `visionTool`) and wires in schema types.
- [schemaTypes/](schemaTypes/) — All Sanity document/object schemas. New types must be exported from [schemaTypes/index.ts](schemaTypes/index.ts) and added to the `schemaTypes` array to appear in the Studio.
- `static/` — Static assets served by the Studio.

## Code Style

Prettier config (from `package.json`): no semicolons, single quotes, 100-char print width, no bracket spacing.
