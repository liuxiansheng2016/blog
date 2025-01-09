import PageLayout from "../../components/PageLayout";
import styles from "./Post.module.css";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/markdown";

export default function Post({ postData, allPostsData }) {
  const handleMount = () => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!postData) return <div> 文章加载失败 </div>;

  return (
    <PageLayout posts={allPostsData} onMount={handleMount}>
      <article className={styles.article}>
        <h1> {postData.title} </h1>{" "}
        <div className={styles.meta}>
          <time> {postData.date} </time>{" "}
        </div>{" "}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />{" "}
      </article>{" "}
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = await getSortedPostsData();

  const updatedPosts = allPostsData.map((post) => {
    if (post.id === params.id) {
      return {
        ...post,
        h2Titles: postData.h2Titles,
      };
    }
    return post;
  });

  return {
    props: {
      postData,
      allPostsData: updatedPosts,
    },
  };
}
