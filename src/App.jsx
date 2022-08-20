import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css';

import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
                author="Bruno dos Santos"
                content="EU IREI MUITO LONGE! SE DEUS É POR NÓS, QUEM SERÁ CONTRA NÓS? NÃO FUI EU QUEM DISSE, SEJA FORTE E CORAJOSO? ENTÃO SONHE E VÁ ATRÁS!"
            />
          </main>
      </div>
    </div>
  )
}

export default App
