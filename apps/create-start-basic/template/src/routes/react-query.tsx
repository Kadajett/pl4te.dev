import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2, Circle, Trash2 } from 'lucide-react'

// =============================================================================
// Types
// =============================================================================

interface Todo {
  id: number
  title: string
  completed: boolean
}

// =============================================================================
// Mock Data Store (simulates a backend)
// =============================================================================

let mockTodos: Todo[] = [
  { id: 1, title: 'Learn React Query', completed: true },
  { id: 2, title: 'Build awesome apps', completed: false },
  { id: 3, title: 'Ship to production', completed: false },
]

// =============================================================================
// API Functions (Mock implementations with real-world examples in comments)
// =============================================================================

/**
 * Fetches all todos
 *
 * Real-world implementation with fetch:
 * ```ts
 * const getTodos = async (): Promise<Todo[]> => {
 *   const response = await fetch('/api/todos')
 *   if (!response.ok) throw new Error('Failed to fetch todos')
 *   return response.json()
 * }
 * ```
 *
 * Real-world implementation with axios:
 * ```ts
 * import axios from 'axios'
 * const getTodos = async (): Promise<Todo[]> => {
 *   const { data } = await axios.get<Todo[]>('/api/todos')
 *   return data
 * }
 * ```
 */
const getTodos = async (): Promise<Todo[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return [...mockTodos]
}

/**
 * Creates a new todo
 *
 * Real-world implementation with fetch:
 * ```ts
 * const createTodo = async (title: string): Promise<Todo> => {
 *   const response = await fetch('/api/todos', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ title, completed: false }),
 *   })
 *   if (!response.ok) throw new Error('Failed to create todo')
 *   return response.json()
 * }
 * ```
 *
 * Real-world implementation with axios:
 * ```ts
 * const createTodo = async (title: string): Promise<Todo> => {
 *   const { data } = await axios.post<Todo>('/api/todos', { title, completed: false })
 *   return data
 * }
 * ```
 */
const createTodo = async (title: string): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  }
  mockTodos = [...mockTodos, newTodo]
  return newTodo
}

/**
 * Toggles a todo's completed status
 *
 * Real-world implementation with fetch:
 * ```ts
 * const toggleTodo = async (id: number): Promise<Todo> => {
 *   const response = await fetch(`/api/todos/${id}/toggle`, { method: 'PATCH' })
 *   if (!response.ok) throw new Error('Failed to toggle todo')
 *   return response.json()
 * }
 * ```
 */
const toggleTodo = async (id: number): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const todo = mockTodos.find((t) => t.id === id)
  if (!todo) throw new Error('Todo not found')
  todo.completed = !todo.completed
  return { ...todo }
}

/**
 * Deletes a todo
 *
 * Real-world implementation with fetch:
 * ```ts
 * const deleteTodo = async (id: number): Promise<void> => {
 *   const response = await fetch(`/api/todos/${id}`, { method: 'DELETE' })
 *   if (!response.ok) throw new Error('Failed to delete todo')
 * }
 * ```
 */
const deleteTodo = async (id: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 200))
  mockTodos = mockTodos.filter((t) => t.id !== id)
}

// =============================================================================
// Route Definition
// =============================================================================

export const Route = createFileRoute('/react-query')({
  component: ReactQueryDemo,
})

// =============================================================================
// Component
// =============================================================================

function ReactQueryDemo() {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const queryClient = useQueryClient()

  // Query: Fetch todos
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  // Mutation: Create todo
  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // Invalidate and refetch the todos query
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setNewTodoTitle('')
    },
  })

  // Mutation: Toggle todo
  const toggleMutation = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  // Mutation: Delete todo
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoTitle.trim()) {
      createMutation.mutate(newTodoTitle.trim())
    }
  }

  return (
    <div className="p-4 space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>React Query Demo</CardTitle>
          <CardDescription>
            A simple todo app demonstrating useQuery and useMutation hooks.
            Check the source code for real-world fetch/axios examples in comments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add Todo Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              disabled={createMutation.isPending}
            />
            <Button type="submit" disabled={createMutation.isPending || !newTodoTitle.trim()}>
              {createMutation.isPending ? 'Adding...' : 'Add'}
            </Button>
          </form>

          {/* Error State */}
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Error loading todos: {error instanceof Error ? error.message : 'Unknown error'}
              </AlertDescription>
            </Alert>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          )}

          {/* Todo List */}
          {todos && (
            <ul className="space-y-2">
              {todos.length === 0 ? (
                <li className="text-muted-foreground text-center py-4">
                  No todos yet. Add one above!
                </li>
              ) : (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center gap-2 p-2 rounded-sm border border-border"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => toggleMutation.mutate(todo.id)}
                      disabled={toggleMutation.isPending}
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="size-5 text-green-500" />
                      ) : (
                        <Circle className="size-5 text-muted-foreground" />
                      )}
                    </Button>
                    <span
                      className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}
                    >
                      {todo.title}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 text-destructive hover:text-destructive"
                      onClick={() => deleteMutation.mutate(todo.id)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </li>
                ))
              )}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">How it works</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>useQuery</strong> fetches and caches the todo list. It automatically handles
            loading and error states.
          </p>
          <p>
            <strong>useMutation</strong> handles create, toggle, and delete operations. On success,
            it invalidates the cache to trigger a refetch.
          </p>
          <p>
            Open the <strong>React Query DevTools</strong> (flower icon at bottom) to inspect the
            cache and queries in real-time.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
