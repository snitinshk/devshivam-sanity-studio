# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a [Sanity Studio](https://www.sanity.io/) project with multiple workspaces:

| Workspace | `basePath` | Sanity project | Dataset |
|-----------|------------|----------------|---------|
| Krishiv Labs blogs | `/krishivlabs-blogs` | `o58x9hzu` | `production` |
| indiaXguide | `/indiaxguide` | `pd1mib79` | `production` |

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
- [schemaTypes/krishivlabs/](schemaTypes/krishivlabs/) — Schemas for the Krishiv Labs workspace; export from `index.ts` as `krishivlabsSchemaTypes`.
- [schemaTypes/indiaXguide/](schemaTypes/indiaXguide/) — Schemas for indiaXguide; export from `index.ts` as `indiaXguideSchemaTypes`.
- `static/` — Static assets served by the Studio.

## Code Style

Prettier config (from `package.json`): no semicolons, single quotes, 100-char print width, no bracket spacing.
