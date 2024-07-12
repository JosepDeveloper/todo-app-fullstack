'use server'
import prisma from '@/lib/prisma/db'
import { revalidatePath } from 'next/cache'

export const onSubmit = async (fromData: FormData) => {
  const todoText = String(fromData.get('textTodo'))
  const todoDescription = String(fromData.get('todoDescription'))

  if (!todoText) throw new Error('Not are recieve todoText variable')

  const body = {
    todoText,
    todoDescription
  }

  await prisma.todos.create({
    data: body
  })

  revalidatePath('/')
}
