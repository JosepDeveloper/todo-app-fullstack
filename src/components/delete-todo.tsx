'use client'

import { Button } from './ui/button'

interface PropsDeleteTodos {
  id: string
}

const fetchDeleteTodo = async (id: string) => {
  const URL = 'http://localhost:3000/api/todos'

  const headers = {
    'Content-Type': 'application/json'
  }

  const body = JSON.stringify({
    id
  })

  await fetch(URL, {
    method: 'DELETE',
    body,
    headers
  })
}

export const DeleteTodo = ({ id }: PropsDeleteTodos) => {
  const handleClick = () => {
    fetchDeleteTodo(id)
    window.location.reload()
  }

  return (
    <Button
      onClick={handleClick}
      variant='destructive'
    >
      Eliminar
    </Button>
  )
}
