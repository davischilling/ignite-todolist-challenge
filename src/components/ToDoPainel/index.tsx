import { ClipboardText } from 'phosphor-react'
import styles from './ToDoPainel.module.css'

export const ToDoPainel = () => (
  <div className={styles.wrapper}>
    <ClipboardText size={56} />
    <div className={styles.textContent}>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </div>
)