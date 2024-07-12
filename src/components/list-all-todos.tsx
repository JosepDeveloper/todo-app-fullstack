import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { todosArray } from '@/app/types/todo.types'
import { Separator } from '@/components/ui/separator'
import { Button } from './ui/button'
import { capitalize } from '@/lib/capitalize'
import { DeleteTodo } from './delete-todo'

interface PropsComponent {
  allTodos: todosArray
}

export function ListAllTodos ({ allTodos }: PropsComponent) {
  return (
    <ul className='w-full grid grid-cols-3 gap-10 gap-x-[6rem]'>
      {
        allTodos.map((todoEl) => {
          const { id, todoText, todoDescription, createdTodo } = todoEl
          const dateFormater = capitalize(
            new Date(createdTodo).toLocaleDateString('es', { year: 'numeric', month: 'long', day: '2-digit', weekday: 'short' })
          )

          return (
            <li key={id}>
              <Card className='w-96 h-96'>
                <CardHeader className='h-[100px]'>
                  <CardTitle className='text-2xl'>{todoText}</CardTitle>
                  <CardDescription>{dateFormater}</CardDescription>
                </CardHeader>

                <Separator />

                <CardContent className='h-[184px]'>
                  {
                    todoDescription
                      ? <p className='mt-5'>{todoDescription}</p>
                      : <p className='mt-5 text-white/50'>Sin Descripción</p>
                  }
                </CardContent>

                <Separator />

                <CardFooter className='h-[100px] flex gap-5 justify-end items-center'>
                  <Button variant='outline'>Editar</Button>
                  <DeleteTodo id={id} />
                </CardFooter>
              </Card>
            </li>
          )
        })
      }
    </ul>
  )
}
