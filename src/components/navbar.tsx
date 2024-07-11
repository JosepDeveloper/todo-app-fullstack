import { ModeToggle } from './theme-togle-button'

export function Navbar () {
  return (
    <nav className='flex justify-between'>
      <h1 className='text-3xl font-bold'>Todo App</h1>

      <ModeToggle />
    </nav>
  )
}
