---
name: bootstrapper
description: Bootstrap new projects with modern tech stacks. Use when creating new applications, setting up projects, initializing codebases, or when the user mentions project setup, scaffolding, or bootstrapping. Supports Rust, Tauri, TanStack Router, Python, and C# .NET projects.
---

# Project Bootstrapper

A comprehensive project scaffolding system that helps you create new applications with modern, production-ready configurations.

## Supported Tech Stacks

| Stack | Description | Use Case |
|-------|-------------|----------|
| **Rust** | Systems programming with Cargo | CLI tools, libraries, high-performance applications |
| **Tauri** | Rust + Web frontend desktop apps | Cross-platform desktop applications |
| **TanStack Router** | Type-safe React routing | Modern React SPAs with file-based routing |
| **Python venv** | Python with virtual environment | Scripts, APIs, data science, automation |
| **C# .NET** | .NET Core/8+ applications | APIs, desktop apps, enterprise software |

## How to Use

When asked to bootstrap a project, I will:

1. **Clarify requirements**: Ask about project name, target directory, and specific needs
2. **Check prerequisites**: Verify required tools are installed
3. **Select appropriate skill**: Use the specialized skill for the chosen stack
4. **Execute setup**: Run the official installers/scaffolding tools when available
5. **Apply best practices**: Configure linting, formatting, testing, and CI/CD

## Quick Commands

To bootstrap a project, ask me to:
- "Create a new Rust CLI project"
- "Set up a Tauri desktop app with React"
- "Bootstrap a TanStack Router project"
- "Initialize a Python project with virtual environment"
- "Create a new .NET 8 Web API"

## Prerequisites Check

Before bootstrapping, I'll verify these tools are available:

```bash
# Check common tools
which git && git --version
```

For stack-specific requirements, see the individual skill files.

## Project Naming Conventions

- Use lowercase with hyphens: `my-awesome-project`
- Avoid spaces and special characters
- Keep names concise but descriptive

## Post-Setup Recommendations

After bootstrapping, I'll suggest:
- Setting up version control (if not already a git repo)
- Configuring CI/CD pipelines
- Adding appropriate .gitignore entries
- Setting up pre-commit hooks
- Configuring IDE/editor settings
