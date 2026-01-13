# Project Templates Reference

Quick reference for all available project templates across supported tech stacks.

## Template Selection Guide

| Need | Recommended Stack | Template |
|------|-------------------|----------|
| CLI tool | Rust | `cargo new --bin` |
| High-performance library | Rust | `cargo new --lib` |
| Desktop app (cross-platform) | Tauri + React | `create-tauri-app --template react-ts` |
| Full-stack React app (SSR) | TanStack Start + shadcn | `npx create-tanstack-start-shadcn` |
| Modern web SPA | TanStack Router | `create-tanstack-app` |
| REST API (Python) | Python + FastAPI | Manual + FastAPI |
| REST API (.NET) | .NET Minimal API | `dotnet new web` |
| Data science | Python | Manual + Jupyter |
| Enterprise API | .NET Web API | `dotnet new webapi` |
| Background service | .NET Worker | `dotnet new worker` |

## Rust Templates

```bash
# Binary application
cargo new my-cli

# Library
cargo new --lib my-lib

# Workspace (monorepo)
mkdir my-workspace && cd my-workspace
# Then configure Cargo.toml with [workspace]
```

## Tauri Templates

```bash
# Interactive
npm create tauri-app@latest

# With specific frontend
npm create tauri-app@latest my-app -- --template react-ts
npm create tauri-app@latest my-app -- --template vue-ts
npm create tauri-app@latest my-app -- --template svelte-ts
npm create tauri-app@latest my-app -- --template solid-ts

# Full Rust stack
npm create tauri-app@latest my-app -- --template leptos
npm create tauri-app@latest my-app -- --template yew
```

## TanStack Start + shadcn/ui Templates

```bash
# Full-stack React with SSR, React Query, shadcn/ui, Tailwind v4
npx create-tanstack-start-shadcn my-app

# With specific package manager
npx create-tanstack-start-shadcn my-app --use-pnpm
npx create-tanstack-start-shadcn my-app --use-yarn
npx create-tanstack-start-shadcn my-app --use-bun
```

**Includes:**
- TanStack Start (full-stack framework)
- TanStack Router (file-based routing)
- TanStack React Query (data fetching with SSR integration)
- shadcn/ui components (new-york style)
- Tailwind CSS v4
- TypeScript
- Sidebar layout with navigation
- Server functions and API routes examples
- Deferred data loading demo

## TanStack Router Templates

```bash
# Interactive (recommended)
npx create-tanstack-app@latest

# Manual with Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @tanstack/react-router @tanstack/router-devtools
npm install -D @tanstack/router-plugin
```

## Python Templates

```bash
# With uv (fastest)
uv init my-project
cd my-project && uv venv

# With Poetry
poetry new my-project

# Standard venv
mkdir my-project && cd my-project
python3 -m venv .venv
source .venv/bin/activate
```

### Python Project Types

| Type | Additional Packages |
|------|---------------------|
| CLI | `typer`, `rich` |
| Web API | `fastapi`, `uvicorn` |
| Data Science | `pandas`, `numpy`, `jupyter` |
| Web Scraping | `httpx`, `beautifulsoup4` |
| Automation | `playwright`, `selenium` |

## .NET Templates

```bash
# Console application
dotnet new console -n MyApp

# Minimal API (lightweight)
dotnet new web -n MyApi

# Web API with controllers
dotnet new webapi -n MyApi --use-controllers

# Blazor Server
dotnet new blazorserver -n MyBlazorApp

# Blazor WebAssembly
dotnet new blazorwasm -n MyBlazorApp

# Worker Service (background jobs)
dotnet new worker -n MyWorker

# gRPC Service
dotnet new grpc -n MyGrpcService

# Class Library
dotnet new classlib -n MyLibrary

# xUnit Test Project
dotnet new xunit -n MyTests
```

## Common Configurations

### Git Initialization
All projects should initialize git:
```bash
git init
```

### Editor Config
Create `.editorconfig` for consistent formatting across editors.

### CI/CD
Each skill includes GitHub Actions workflow templates.

## Quick Start Commands

### Full-Stack React App (TanStack Start + shadcn)
```bash
npx create-tanstack-start-shadcn my-app
cd my-app
npm run dev
```

### Full-Stack Desktop App (Tauri + React)
```bash
npm create tauri-app@latest my-desktop-app -- --template react-ts
cd my-desktop-app
npm install
npm run tauri dev
```

### Modern React SPA
```bash
npx create-tanstack-app@latest my-web-app
cd my-web-app
npm install
npm run dev
```

### Python API
```bash
uv init my-api && cd my-api
uv venv && source .venv/bin/activate
uv pip install fastapi uvicorn
```

### .NET API
```bash
dotnet new web -n my-api -o my-api
cd my-api
dotnet run
```

### Rust CLI
```bash
cargo new my-cli
cd my-cli
cargo run
```
