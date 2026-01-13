import { Await, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Suspense, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const personServerFn = createServerFn({ method: 'GET' })
  .inputValidator((d: string) => d)
  .handler(({ data: name }) => {
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

const slowServerFn = createServerFn({ method: 'GET' })
  .inputValidator((d: string) => d)
  .handler(async ({ data: name }) => {
    await new Promise((r) => setTimeout(r, 1000))
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

export const Route = createFileRoute('/deferred')({
  loader: async () => {
    return {
      deferredStuff: new Promise<string>((r) =>
        setTimeout(() => r('Hello deferred!'), 2000),
      ),
      deferredPerson: slowServerFn({ data: 'Tanner Linsley' }),
      person: await personServerFn({ data: 'John Doe' }),
    }
  },
  component: Deferred,
})

function Deferred() {
  const [count, setCount] = useState(0)
  const { deferredStuff, deferredPerson, person } = Route.useLoaderData()

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Deferred Data Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div data-testid="regular-person" className="text-sm">
            <span className="font-medium">Instant:</span> {person.name} - {person.randomNumber}
          </div>
          <Suspense fallback={<Skeleton className="h-5 w-48" />}>
            <Await
              promise={deferredPerson}
              children={(data) => (
                <div data-testid="deferred-person" className="text-sm">
                  <span className="font-medium">Deferred (1s):</span> {data.name} - {data.randomNumber}
                </div>
              )}
            />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-7 w-36" />}>
            <Await
              promise={deferredStuff}
              children={(data) => (
                <h3 data-testid="deferred-stuff" className="text-lg font-semibold">{data}</h3>
              )}
            />
          </Suspense>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <span className="text-sm">Count: {count}</span>
            <Button size="sm" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
