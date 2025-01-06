import styles from './Layout.module.css'
import Link from 'next/link'

export default function Layout({ posts = [], children }) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <h2> 博客导航 </h2>{' '}
          <ul>
            <li>
              <Link href="/"> 首页 </Link>{' '}
            </li>{' '}
            {posts.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}> {title} </Link>{' '}
              </li>
            ))}{' '}
          </ul>{' '}
        </nav>{' '}
      </aside>{' '}
      <main className={styles.main}> {children} </main>{' '}
    </div>
  )
}
