import { ListAllTodos } from '@/components/list-all-todos'
import { todosArray } from './types/todo.types'

async function fetchTodos () {
  const res = await fetch('http://localhost:3000/api/todos', { cache: 'no-store' })

  return await res.json()
}

export default async function HomePage () {
  const allTodos: todosArray = await fetchTodos()

  return (
    <main>
      <div className='flex'>
        <ListAllTodos allTodos={allTodos} />
      </div>
    </main>
  )
}
