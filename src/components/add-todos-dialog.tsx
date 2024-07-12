import styles from './header.module.css'
import { Button } from './ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import prisma from '@/lib/prisma/db'
import { revalidatePath } from 'next/cache'

export function AddTodosDialog () {
  const onSubmit = async (fromData: FormData) => {
    'use server'

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Agregar Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form action={onSubmit}>
          <DialogHeader>
            <DialogTitle>Agregar Todo</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Nombre
              </Label>
              <Input
                id='name'
                name='textTodo'
                placeholder='Limpiar la casa, programar ...'
                className='col-span-3'
                required
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Descripción
              </Label>
              <Textarea name='todoDescription' className={`${styles.form} w-[277px]`} id='description' placeholder='Escribe tu descripcion aqui.' />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type='submit'>Agregar Todo</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
