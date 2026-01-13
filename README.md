# pl4te.dev

A collection of production-ready boilerplate templates and Claude Code Skills optimized for AI-assisted development.

## Available Templates

| Template | Description | Install |
|----------|-------------|---------|
| [create-tanstack-start-shadcn](./apps/create-tanstack-start-shadcn) | TanStack Start + React Query + shadcn/ui + Tailwind v4 | `npx create-tanstack-start-shadcn my-app` |

## Claude Code Skills

This project includes **Bootstrapper Skills** - a set of Claude Code Skills that help you scaffold new projects with modern tech stacks. Think of it as a modern yeoman/npx alternative powered by AI.

### Supported Tech Stacks

| Stack | Description | Example Prompt |
|-------|-------------|----------------|
| **Rust** | Cargo projects with clippy, rustfmt, CI | "Create a new Rust CLI project" |
| **Tauri** | Desktop apps with Rust + web frontend | "Set up a Tauri app with React" |
| **TanStack Router** | Type-safe React routing | "Bootstrap a TanStack Router project" |
| **Python** | Virtual env with uv/poetry, ruff, mypy | "Initialize a Python FastAPI project" |
| **C# .NET** | .NET 8+ Web APIs, console apps | "Create a .NET minimal API" |

### Installing the Skills

#### Option 1: Use with this project

The skills are already included in `.claude/skills/`. Just open Claude Code in this directory and they'll be available automatically.

#### Option 2: Copy to personal skills (use across all projects)

```bash
cp -r .claude/skills/* ~/.claude/skills/
```

#### Option 3: Copy to another project

```bash
cp -r .claude/skills /path/to/your/project/.claude/
```

### Using the Skills

Once installed, just ask Claude Code naturally:

```
Create a new Rust CLI project called my-tool
```

```
Set up a Tauri desktop app with React and TypeScript
```

```
Bootstrap a TanStack Router project for my web app
```

```
Initialize a Python project with FastAPI for a REST API
```

```
Create a .NET 8 minimal API project
```

Claude will automatically detect your intent and use the appropriate skill.

### What Each Skill Provides

- **Prerequisites check** - Verifies required tools are installed
- **Official tooling** - Uses official CLIs when available (cargo, create-tauri-app, etc.)
- **Modern configuration** - Latest best practices and tool versions
- **Project structure** - Recommended directory layouts
- **Essential dependencies** - Common packages for each stack
- **CI/CD templates** - Ready-to-use GitHub Actions workflows
- **Code quality** - Linting, formatting, and type checking setup
- **Post-setup checklist** - Steps to complete after bootstrapping

### Skills Structure

```
.claude/skills/
├── bootstrapper/           # Main orchestrator
│   ├── SKILL.md
│   ├── PREREQUISITES.md    # Tool installation reference
│   └── TEMPLATES.md        # Template quick reference
├── rust-project/
├── tauri-app/
├── tanstack-router/
├── python-venv/
└── csharp-dotnet/
```

## Philosophy

These boilerplates and skills are designed with AI-assisted development in mind:

- **Clear project structure** - Predictable file organization that AI can navigate
- **Type-safe by default** - TypeScript throughout for better AI code generation
- **Modern best practices** - Latest patterns and conventions baked in
- **Minimal but complete** - Everything you need, nothing you don't
- **Well-documented** - READMEs and inline comments for context

## For AI Assistants

Each boilerplate includes:
- Detailed README with project structure
- Example patterns for common tasks
- Type definitions that provide context
- Consistent naming conventions

## Contributing

### Adding a Template

Each template should:
1. Be a standalone npm package in `apps/`
2. Include a CLI for scaffolding (`npx create-*`)
3. Have a comprehensive README
4. Follow the naming convention: `create-[stack]-[variant]`

### Adding a Skill

1. Create a new directory in `.claude/skills/my-stack/`
2. Create `SKILL.md` with YAML frontmatter (name, description) and instructions
3. Include prerequisites, project creation commands, configuration examples
4. Add CI/CD templates and post-setup checklist

## License

MIT
