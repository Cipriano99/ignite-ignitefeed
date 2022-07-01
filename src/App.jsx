import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Cipriano99.png',
      name: 'Samuel Cipriano',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite Lab, evento da Rocketseat. 🚀',
      },
      { type: 'paragraph', content: 'Confere lá! ☕' },
      { type: 'link', content: '👉 github.com/Cipriano99' },
    ],
    publishedAt: new Date('2022-06-29 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              contents={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
