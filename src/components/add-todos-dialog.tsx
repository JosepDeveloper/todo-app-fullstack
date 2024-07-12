'use client'
import { onSubmit } from '@/actions/add-todo'
import styles from './header.module.css'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

export function AddTodosDialog () {
  const [isOpenDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={isOpenDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant='secondary'>Agregar Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form action={
          async (formData) => {
            const todoText = String(formData.get('textTodo'))

            if (!todoText) {
              toast.error('Usuario en blanco', {
                description: 'El campo nombre del Usuario esta vacio',
                duration: 2000
              })
              return
            }

            onSubmit(formData)
            setOpenDialog(false)
          }
        }
        >
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
            <Button type='submit'>Agregar Todo</Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster position='top-center' richColors />
    </Dialog>
  )
}
