# create-tanstack-start-shadcn

A CLI to scaffold a TanStack Start application with React Query, shadcn/ui, and Tailwind CSS v4.

## Quick Start

```bash
# npm
npx create-tanstack-start-shadcn my-app

# yarn
yarn create tanstack-start-shadcn my-app

# pnpm
pnpm create tanstack-start-shadcn my-app

# bun
bun create tanstack-start-shadcn my-app
```

### With Package Manager Flag

Skip the package manager prompt by passing a flag:

```bash
npx create-tanstack-start-shadcn my-app --use-pnpm
npx create-tanstack-start-shadcn my-app --use-yarn
npx create-tanstack-start-shadcn my-app --use-bun
```

## What's Included

This starter template comes with a modern, production-ready stack:

### Core Framework
- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework with SSR
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with file-based routes
- **[TanStack React Query](https://tanstack.com/query)** - Powerful data fetching with SSR integration
- **React 19** - Latest React with concurrent features

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible components
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Lucide Icons](https://lucide.dev)** - Beautiful & consistent icons

### Developer Experience
- **TypeScript** - Full type safety
- **TanStack Router Devtools** - Debug your routes
- **React Query Devtools** - Inspect your queries
- **Vite** - Lightning fast HMR

## Project Structure

```
my-app/
├── src/
│   ├── components/       # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── routes/           # File-based routes
│   │   ├── __root.tsx    # Root layout
│   │   ├── index.tsx     # Home page (/)
│   │   ├── posts.tsx     # Posts layout (/posts)
│   │   ├── posts.$postId.tsx  # Post detail (/posts/:postId)
│   │   └── ...
│   ├── styles/           # Global styles
│   │   └── app.css       # Tailwind imports
│   └── utils/            # Shared utilities
│       ├── posts.tsx     # Posts data fetching & query options
│       └── users.tsx     # Users data fetching & query options
├── public/               # Static assets
├── components.json       # shadcn/ui config
├── tsconfig.json         # TypeScript config
└── vite.config.ts        # Vite config
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm run start
```

## Adding shadcn/ui Components

This project uses shadcn/ui for UI components. Add new components with:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).

## React Query Integration

The starter includes a proper React Query + TanStack Router integration pattern:

### Query Options Pattern

```tsx
// src/utils/posts.tsx
export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })
```

### Route Loader + Component

```tsx
// src/routes/posts.tsx
export const Route = createFileRoute('/posts')({
  // Pre-fetch data in loader (SSR compatible)
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(postsQueryOptions()),
  component: PostsComponent,
})

function PostsComponent() {
  // Use the same query options - data is already cached
  const { data: posts } = useSuspenseQuery(postsQueryOptions())
  return <div>{/* render posts */}</div>
}
```

## Customization

### Changing the Theme

Edit `src/styles/app.css` to customize colors, fonts, and other design tokens. The file uses CSS variables that integrate with Tailwind and shadcn/ui.

### Adding New Routes

Create a new file in `src/routes/`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>About page</div>
}
```

The route is automatically registered - no manual configuration needed.

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://api.example.com
```

Access in code with `import.meta.env.VITE_API_URL`.

## Documentation

- [TanStack Start Docs](https://tanstack.com/start/latest/docs)
- [TanStack Router Docs](https://tanstack.com/router/latest/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## License

MIT
