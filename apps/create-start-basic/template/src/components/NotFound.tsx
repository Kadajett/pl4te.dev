import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-4 p-4">
      <div className="text-muted-foreground">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go back
        </Button>
        <Button asChild>
          <Link to="/">Start Over</Link>
        </Button>
      </div>
    </div>
  )
}
