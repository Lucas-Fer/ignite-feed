import Header from "./components/Header"

import './global.css'
import styles from './App.module.css'
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

const posts = [
  {
    id: 1,
    authorData: {
      avatarUrl: 'https://github.com/lucas-fer.png',
      name: 'Lucas Fernandes',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', text: 'Fala, pessoal 👋', },
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', text: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-03 20:00:00'),
  },

  {
    id: 2,
    authorData: {
      avatarUrl: 'https://img.freepik.com/fotos-gratis/jovem-em-uma-camisa-trabalhando-no-laptop-roxo_155003-14131.jpg?w=740&t=st=1664973094~exp=1664973694~hmac=d7229443ab6d449588e5338519680a58e8d78e84b3d590a4748f59b5a1eaff82',
      name: 'José',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', text: 'Salve, time 👋', },
      { type: 'paragraph', text: 'Finalizei um curso de LGPD, estou ansioso para aplicar tudo que foi aprendido!' },
    ],
    publishedAt: new Date('2022-10-05 20:00:00'),
  },
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Post
                key={post.id}
                authorData={post.authorData}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
