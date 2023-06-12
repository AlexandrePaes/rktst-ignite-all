import { Header } from './components/Header';
import {Post} from './components/Post';
//import './styles.css';
import './components/global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlexandrePaes.png',
      name: 'Alexandre Paes',
      role: 'Full Stack Dev'
    },
    content: [
      { type: 'paragraph', content: 'First paragraph of contents...' },
      { type: 'paragraph', content: '2nd paragraph of contents...' },
      { type: 'link', content: 'someone.someprofession/someattribuition' },
    ],
    publishedAt: new Date('2023-01-16 17:34'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AlexandrePaes.png',
      name: 'Alex Paes',
      role: 'Full Stack Dev'
    },
    content: [
      { type: 'paragraph', content: '1st paragraph of contents...' },
      { type: 'paragraph', content: '2nd paragraph of contents...' },
      { type: 'link', content: 'someone.someprofession/someattribuition' },
    ],
    publishedAt: new Date('2023-01-17 17:00'),
  },
];

export function App() {
  return (
    <div>
     <Header />

     <div className={ styles.wrapper }>
        <Sidebar />

        <main>

           {/* v2 */}
           {post.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            )
           })}

{/*                     
          {// v1}
          <Post
            author="Alexandre Paes"
            content="Any simple text"
            separator="-----------------------------------------"
          />
          <Post
            author="Alex Monteiro"
            content="Any simple text once again"
            separator="-----------------------------------------"
          />
          <Post
            author="Ahlex Paes"
            content="Any simple text once again"
            separator="-----------------------------------------"
          /> */}
          
        </main>
     </div>
    </div>
  )
}
