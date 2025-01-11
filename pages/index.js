import Layout from "../components/Layout";
import Link from "next/link";
import Description from "../components/Description";
import styles from "./index.module.css";
import { getSortedPostsData } from "../lib/markdown";

export default function Home({ allPostsData }) {
  return (
    <Layout posts={allPostsData}>
      <h1> 这是我的学习笔记，仅作参考，因为还有一些代码截图没有导入进来，所以内容并不完整 </h1>{" "}
      <div>
        <h2> 最新笔记 </h2>{" "}
        {allPostsData.map(({ id, date, title, description }) => (
          <article key={id} className={styles.article}>
            <h3>
              <Link href={`/posts/${id}`}> {title} </Link>{" "}
            </h3>{" "}
            <time dateTime={date}> {date} </time>{" "}
            <Description text={description} />{" "}
          </article>
        ))}{" "}
      </div>{" "}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
