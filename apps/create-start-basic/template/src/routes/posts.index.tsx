import { createFileRoute } from '@tanstack/react-router'
import { FileText } from 'lucide-react'

export const Route = createFileRoute('/posts/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-4">
        <FileText className="size-8 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-medium">No post selected</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Select a post from the list to view its content.
      </p>
    </div>
  )
}
