# pl4te.dev

A collection of production-ready boilerplate templates optimized for AI-assisted development.

## Available Templates

| Template | Description | Install |
|----------|-------------|---------|
| [create-start-basic](./apps/create-start-basic) | TanStack Start + React Query + shadcn/ui + Tailwind v4 | `npx create-start-basic my-app` |

## Philosophy

These boilerplates are designed with AI-assisted development in mind:

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

Want to add a boilerplate? Each template should:
1. Be a standalone npm package in `apps/`
2. Include a CLI for scaffolding (`npx create-*`)
3. Have a comprehensive README
4. Follow the naming convention: `create-[stack]-[variant]`

## License

MIT
