import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma/db'

export async function GET () {
  const todos = await prisma.todos.findMany()

  return NextResponse.json(todos)
}
