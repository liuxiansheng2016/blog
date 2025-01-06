import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/markdown'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout posts={allPostsData}>
      <h1> 欢迎来到我的博客 </h1>{' '}
      <div>
        <h2> 最新文章 </h2>{' '}
        {allPostsData.map(({ id, date, title, description }) => (
          <article key={id}>
            <h3>
              <Link href={`/posts/${id}`}> {title} </Link>{' '}
            </h3>{' '}
            <time> {date} </time> <p> {description} </p>{' '}
          </article>
        ))}{' '}
      </div>{' '}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
