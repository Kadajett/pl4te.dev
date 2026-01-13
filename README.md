# pl4te.dev

Production-ready boilerplate templates with optional Claude Code Skills for AI-assisted development.

## Quick Start

Just want to scaffold a project? Use npx:

```bash
# TanStack Start + React Query + shadcn/ui + Tailwind v4
npx create-tanstack-start-shadcn my-app
```

That's it. No AI required.

## Available Templates

| Template | Stack | Install |
|----------|-------|---------|
| [create-tanstack-start-shadcn](./apps/create-tanstack-start-shadcn) | TanStack Start, React Query, shadcn/ui, Tailwind v4 | `npx create-tanstack-start-shadcn my-app` |

---

## For AI-Assisted Development

This project includes **Claude Code Skills** that enhance AI-assisted development. Skills teach Claude how to scaffold projects and work with specific tech stacks.

### Option 1: Let Claude Download Skills Automatically

Copy and paste this command to Claude Code:

```
Download the bootstrapper skill from https://raw.githubusercontent.com/Kadajett/pl4te.dev/main/.claude/skills/bootstrapper/SKILL.md and save it to ~/.claude/skills/bootstrapper/SKILL.md
```

Or for project-local skills:

```
Download the bootstrapper skill from https://raw.githubusercontent.com/Kadajett/pl4te.dev/main/.claude/skills/bootstrapper/SKILL.md and save it to .claude/skills/bootstrapper/SKILL.md
```

### Option 2: Manual Download

```bash
# Create skills directory
mkdir -p ~/.claude/skills/bootstrapper

# Download the bootstrapper skill
curl -o ~/.claude/skills/bootstrapper/SKILL.md \
  https://raw.githubusercontent.com/Kadajett/pl4te.dev/main/.claude/skills/bootstrapper/SKILL.md

# Optional: Download templates reference
curl -o ~/.claude/skills/bootstrapper/TEMPLATES.md \
  https://raw.githubusercontent.com/Kadajett/pl4te.dev/main/.claude/skills/bootstrapper/TEMPLATES.md
```

### Option 3: Clone the Repo

```bash
git clone https://github.com/Kadajett/pl4te.dev.git
cd pl4te.dev

# Skills are in .claude/skills/ - Claude Code will detect them automatically
```

### Using Skills with Claude Code

Once the bootstrapper skill is installed, just ask Claude naturally:

```
Create a new TanStack Start app with shadcn
```

```
Set up a Rust CLI project
```

```
Bootstrap a Python FastAPI project
```

Claude will use the skill to run the appropriate scaffolding commands.

### Supported Tech Stacks

| Stack | Command | Description |
|-------|---------|-------------|
| TanStack Start + shadcn | `npx create-tanstack-start-shadcn` | Full-stack React with SSR |
| Rust | `cargo new` | CLI tools, libraries |
| Tauri | `npm create tauri-app@latest` | Desktop apps |
| TanStack Router | `npx create-tanstack-app@latest` | React SPAs |
| Python | `uv init` / `python3 -m venv` | Scripts, APIs |
| C# .NET | `dotnet new` | APIs, desktop apps |

### What the Bootstrapper Skill Provides

- Prerequisites checks (Node.js, git, etc.)
- Official CLI commands for each stack
- Post-setup recommendations
- Links to comprehensive dev documentation

### Project Skills vs Bootstrapper Skills

- **Bootstrapper skill** (in this repo): Helps Claude create new projects
- **Project skills** (in scaffolded projects): Helps Claude work within the project

When you scaffold with `npx create-tanstack-start-shadcn`, the new project includes its own `.claude/skills/` with development documentation specific to that stack.

---

## Philosophy

These templates are designed for both human and AI-assisted development:

- **Clear project structure** - Predictable file organization
- **Type-safe by default** - TypeScript throughout
- **Modern best practices** - Latest patterns baked in
- **Minimal but complete** - Everything you need, nothing you don't
- **Well-documented** - Skills provide context for AI assistants

## Contributing

### Adding a Template

1. Create a new package in `apps/`
2. Include a CLI for scaffolding (`npx create-*`)
3. Add a `.claude/skills/` directory with development documentation
4. Update this README

### Adding a Skill

1. Create a directory in `.claude/skills/my-skill/`
2. Create `SKILL.md` with YAML frontmatter:
   ```yaml
   ---
   name: my-skill
   description: What this skill does and when to use it
   ---
   ```
3. Add instructions, examples, and commands

## License

MIT
