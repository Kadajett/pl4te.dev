import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Build Something Amazing
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A modern full-stack starter with TanStack Start, Tailwind CSS, and
          shadcn/ui components. Everything you need to ship fast.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Type-Safe Routing</CardTitle>
              <CardDescription>
                TanStack Router provides fully type-safe navigation and params.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Catch routing errors at compile time, not runtime. Enjoy
                autocomplete for all your routes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Styling</CardTitle>
              <CardDescription>
                Tailwind CSS v4 with CSS variables for theming.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautiful, responsive designs with utility-first CSS. Dark mode
                ready out of the box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Component Library</CardTitle>
              <CardDescription>
                Pre-built shadcn/ui components ready to use.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Accessible, customizable components that you own. Copy, paste,
                and make them yours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p>Built with TanStack Start, Tailwind CSS, and shadcn/ui</p>
      </footer>
    </div>
  )
}
