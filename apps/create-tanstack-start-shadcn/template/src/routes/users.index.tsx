import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Users, Code } from 'lucide-react'

export const Route = createFileRoute('/users/')({
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-4">
        <Users className="size-8 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-medium">No user selected</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Select a user from the list to view their profile.
      </p>
      <Button variant="outline" size="sm" className="mt-4" asChild>
        <a href="/api/users">
          <Code className="mr-2 size-4" />
          View all as JSON
        </a>
      </Button>
    </div>
  )
}
