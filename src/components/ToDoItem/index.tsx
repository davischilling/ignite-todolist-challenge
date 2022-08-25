import { Trash, CheckCircle, Circle } from 'phosphor-react'
import styles from './ToDoItem.module.css'

interface ToDoItemProps {
  id: string
  content: string
  isFinished: boolean
  onDeleteToDo: (id: string) => void
  onUpdateToDo: (id: string) => void
}

export const ToDoItem = ({ id, content, isFinished, onDeleteToDo, onUpdateToDo }: ToDoItemProps) => {

  const handleUpdateToDo = () => {
    onUpdateToDo(id)
  }
  
  const handleDeleteToDo = () => {
    onDeleteToDo(id)
  }

  return (
    <div className={styles.wrapper}>
      {
        isFinished ? (
          <>
            <button title='Tarefa finalizada' onClick={handleUpdateToDo}>
              <CheckCircle size={18} color={'#5E60CE'} />
            </button>
            <span className={styles.finishedTask}>{content}</span>
          </>
        ) : (
          <>
            <button title='Tarefa pendente' onClick={handleUpdateToDo}>
              <Circle size={18} color={'#4EA8DE'} />
            </button>
            <span className={styles.notFinishedTask}>{content}</span>
          </>
        )
      }
      <button title='Deletar tarefa' onClick={handleDeleteToDo}>
        <Trash size={18} color={'#D9D9D9'} />
      </button>
    </div>
  )
}