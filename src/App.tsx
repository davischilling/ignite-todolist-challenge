import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './App.module.css'
import {
  Header,
  ToDoPainel,
  ToDoForm,
  ToDoHeader,
  ToDoItem
} from './components'

interface ToDo {
  id: string
  content: string
  isFinished: boolean
}

const App = () => {

  const [toDoList, setToDoList] = useState<ToDo[]>([])

  const handleFormSubmit = (newToDoText: string) => {
    const newToDo: ToDo = {
      id: uuid(),
      content: newToDoText,
      isFinished: false
    }
    setToDoList([...toDoList, newToDo])
  }

  const handleUpdateToDo = (id: string) => {
    const updatedToDoList = toDoList.map(el => {
      if (el.id === id){
        el.isFinished = !el.isFinished
      }
      return el
    })
    setToDoList(updatedToDoList)
  }

  const handleDeleteToDo = (id: string) => {
    const toDoListWithoutDeletedOne = toDoList.filter(el => el.id !== id)
    setToDoList(toDoListWithoutDeletedOne)
  }

  const totalToDoItems = toDoList.length
  const finishedToDoItems = toDoList.reduce((previous, current) => {
    if (current.isFinished){
      return previous + 1
    } else {
      return previous
    }
  }, 0)

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
          <ToDoForm onFormSubmit={handleFormSubmit} />
          <ToDoHeader total={totalToDoItems} finishedToDoItems={finishedToDoItems} />
          {
            toDoList.length ? (
              toDoList.map(ToDoElement => (
                <ToDoItem
                  key={ToDoElement.id}
                  id={ToDoElement.id}
                  content={ToDoElement.content}
                  isFinished={ToDoElement.isFinished}
                  onUpdateToDo={handleUpdateToDo}
                  onDeleteToDo={handleDeleteToDo}
                />
              ))
            ) : (
              <ToDoPainel />
            )
          }
      </main>
    </div>
  )
}

export default App
