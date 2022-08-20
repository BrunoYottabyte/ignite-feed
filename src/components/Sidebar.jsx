import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
 
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1603738115219-d2d66074819d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" />

        <div className={styles.profile}>
            <img className={styles.avatar} src="http://github.com/brunoyottabyte.png" alt="" />
            <strong>Bruno dos Santos</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}