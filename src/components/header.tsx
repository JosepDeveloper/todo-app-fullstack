import { ModeToggle } from './theme-togle-button'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

import styles from './header.module.css'

function AddTodosDialago () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Agregar Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
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
              placeholder='Limpiar la casa, programar ...'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Descripción
            </Label>
            <Textarea className={`${styles.form} w-[277px]`} id='description' placeholder='Type your message here.' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Agregar Todo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function Header () {
  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-bold'>Todo App</h1>

      <div className='flex gap-4 justify-center items-center'>
        <AddTodosDialago />
        <ModeToggle />
      </div>
    </header>
  )
}
