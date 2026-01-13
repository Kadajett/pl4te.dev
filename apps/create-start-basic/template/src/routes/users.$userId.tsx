import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { userQueryOptions } from '../utils/users'
import { NotFound } from 'src/components/NotFound'
import { UserErrorComponent } from 'src/components/UserError'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Mail } from 'lucide-react'

export const Route = createFileRoute('/users/$userId')({
  loader: ({ params: { userId }, context }) =>
    context.queryClient.ensureQueryData(userQueryOptions(userId)),
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>
  },
})

function UserComponent() {
  const { userId } = Route.useParams()
  const { data: user } = useSuspenseQuery(userQueryOptions(userId))

  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="size-4" />
          <span>{user.email}</span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={`/api/users/${user.id}`}>
            <Code className="mr-2 size-4" />
            View as JSON
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
