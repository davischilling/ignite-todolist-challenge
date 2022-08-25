import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './ToDoForm.module.css'

interface ToDoFormProps {
  onFormSubmit: (newToDoText: string) => void
}

export const ToDoForm = ({ onFormSubmit }: ToDoFormProps) => {
  const [newToDoText, setNewToDoText] = useState('')

  const handleNewToDoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewToDoText(event.target.value)
  }
  
  const handleNewToDoTextInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }
  
  const handleOnFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    onFormSubmit(newToDoText)
    setNewToDoText('')
  }

  const isNewToDoEmpty = newToDoText.length === 0

  return (
    <form onSubmit={handleOnFormSubmit} className={styles.formWrapper}>
      <input
        name='newToDoText'
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newToDoText}
        onChange={handleNewToDoTextChange}
        onInvalid={handleNewToDoTextInvalid}
        required
      />
      <button
        type='submit'
        disabled={isNewToDoEmpty}
      >
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}