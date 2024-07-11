import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma/db'

interface bodyRequestPost {
  todoText: string
  todoDescription?: string
  isCheck?: boolean
}

export async function GET () {
  const todos = await prisma.todos.findMany()

  return NextResponse.json(todos)
}

export async function POST (request: Request) {
  let body: bodyRequestPost

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Not are recieve a body' }, { status: 404 })
  }

  if (!body.todoText) {
    return NextResponse.json(
      { message: 'Not are recieve todoText variable' },
      { status: 404 }
    )
  }

  const newTodo = await prisma.todos.create({
    data: body
  })

  return NextResponse.json(
    {
      message: 'A Todo created Correctly',
      data: newTodo
    },
    {
      status: 201
    }
  )
}
