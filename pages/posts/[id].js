import Layout from '../../components/Layout'
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from '../../lib/markdown'
import styles from './Post.module.css'

export default function Post({ postData, allPostsData }) {
  if (!postData) {
    return <div> 文章加载失败 </div>
  }

  return (
    <Layout posts={allPostsData}>
      <article className={styles.article}>
        <h1> {postData.title} </h1>{' '}
        <div className={styles.meta}>
          <time> {postData.date} </time>{' '}
        </div>{' '}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />{' '}
      </article>{' '}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const allPostsData = getSortedPostsData()

  return {
    props: {
      postData,
      allPostsData,
    },
  }
}
