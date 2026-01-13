import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { usersQueryOptions } from '../utils/users'

export const Route = createFileRoute('/users')({
  loader: ({ context }) => context.queryClient.ensureQueryData(usersQueryOptions()),
  component: UsersComponent,
})

function UsersComponent() {
  const { data: users } = useSuspenseQuery(usersQueryOptions())

  return (
    <div className="flex h-full">
      {/* List Panel */}
      <nav className="w-56 shrink-0 border-r border-border bg-muted/30">
        <div className="p-3">
          <h2 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
            Users
          </h2>
          <ul className="space-y-1">
            {[
              ...users,
              { id: 'i-do-not-exist', name: 'Non-existent User', email: '' },
            ].map((user) => (
              <li key={user.id}>
                <Link
                  to="/users/$userId"
                  params={{ userId: String(user.id) }}
                  className="block rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  activeProps={{
                    className: 'bg-accent text-accent-foreground font-medium',
                  }}
                >
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content Panel */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
