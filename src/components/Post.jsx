import styles from './Post.module.css';

export const Post = ({author,content}) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/brunoyottabyte.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Bruno Siqueira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="19 de agosto ás 20:43:36" dateTime='2022-08-19 20:43:36'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

         <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p><a href="">👉 jane.design/doctorcare</a></p>

          <p>
              <a href='#'>#novoprojeto </a>
              <a href='#'>#nlw </a>
              <a href='#'>#rocketseat  </a>
          </p>
      </div>
    </article>
  )
}
