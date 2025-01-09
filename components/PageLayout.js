import { useEffect } from "react";
import Layout from "./Layout";

export default function PageLayout({ children, posts, onMount }) {
  useEffect(() => {
    // 通用的滚动位置恢复
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    // 执行额外的 mount 逻辑
    onMount?.();

    // 保存滚动位置
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [onMount]);

  return <Layout posts={posts}> {children} </Layout>;
}
