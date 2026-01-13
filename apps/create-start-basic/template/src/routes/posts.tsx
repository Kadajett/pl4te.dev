import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { postsQueryOptions } from '../utils/posts'

export const Route = createFileRoute('/posts')({
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQueryOptions()),
  component: PostsComponent,
})

function PostsComponent() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions())

  return (
    <div className="flex h-full">
      {/* List Panel */}
      <nav className="w-56 shrink-0 border-r border-border bg-muted/30">
        <div className="p-3">
          <h2 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
            Posts
          </h2>
          <ul className="space-y-1">
            {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
              (post) => (
                <li key={post.id}>
                  <Link
                    to="/posts/$postId"
                    params={{ postId: String(post.id) }}
                    className="block rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    activeProps={{
                      className: 'bg-accent text-accent-foreground font-medium',
                    }}
                  >
                    {post.title.substring(0, 20)}
                  </Link>
                </li>
              ),
            )}
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
