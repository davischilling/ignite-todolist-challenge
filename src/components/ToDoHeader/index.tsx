import styles from './ToDoHeader.module.css'

interface ToDoHeader {
  total: number
  finishedToDoItems: number
}

export const ToDoHeader = ({ total, finishedToDoItems }: ToDoHeader) => (
  <div className={styles.wrapper}>
    <div className={styles.createdTask}>
      <strong>Tarefas criadas</strong>
      <button>{total}</button>
    </div>
    <div className={styles.finishedTask}>
      <strong>Concluídas</strong>
      <button>{finishedToDoItems}</button>
    </div>
  </div>
)