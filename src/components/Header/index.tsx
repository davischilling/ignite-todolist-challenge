import styles from './Header.module.css'
import todoLogo from '../../assets/todo-logo.svg'

export const Header = () => (
  <header className={styles.header}>
    <img src={todoLogo} alt="ToDo List Logo" />
  </header>
)