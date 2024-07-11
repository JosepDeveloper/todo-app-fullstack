import { AddTodosDialog } from './add-todos-dialog'
import { ModeToggle } from './theme-togle-button'

export function Header () {
  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-bold'>Todo App</h1>

      <div className='flex gap-4 justify-center items-center'>
        <AddTodosDialog />
        <ModeToggle />
      </div>
    </header>
  )
}
