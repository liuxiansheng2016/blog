import styles from './Layout.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ posts = [], children }) {
  const router = useRouter()
  const [expandedItems, setExpandedItems] = useState({})

  useEffect(() => {
    // 从 localStorage 恢复导航条展开状态
    const savedExpandedItems = localStorage.getItem('expandedItems')
    if (savedExpandedItems) {
      setExpandedItems(JSON.parse(savedExpandedItems))
    }
  }, [])

  useEffect(() => {
    // 当 expandedItems 变化时，保存到 localStorage
    localStorage.setItem('expandedItems', JSON.stringify(expandedItems))
  }, [expandedItems])

  const [navItems, setNavItems] = useState([
    {
      title: '首页',
      path: '/',
    },
  ])

  // 当 posts 改变时更新导航项
  useEffect(() => {
    const updatedNavItems = [
      {
        title: '首页',
        path: '/',
      },
    ]

    posts.forEach((post) => {
      const navItem = {
        title: post.title,
        path: `/posts/${post.id}`,
      }

      // 如果有 h2Titles，添加为子项
      if (post.h2Titles?.length > 0) {
        navItem.subItems = post.h2Titles.map((h2) => ({
          title: h2.title,
          path: `/posts/${post.id}#${h2.id}`,
        }))
      }

      updatedNavItems.push(navItem)
    })

    setNavItems(updatedNavItems)
  }, [posts])

  // 切换子导航的展开/折叠状态
  const toggleSubNav = (path) => {
    setExpandedItems((prev) => ({
      ...prev,
      [path]: !prev[path],
    }))
  }

  // 检查当前路径是否激活
  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/'
    }
    return router.asPath.startsWith(path)
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <h2>笔记导航</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <div
                  className={`${styles.navItem} ${
                    item.subItems ? styles.hasChildren : ''
                  }`}
                  onClick={() => item.subItems && toggleSubNav(item.path)}
                >
                  <Link
                    href={item.path}
                    className={`${styles.link} ${
                      isActive(item.path) ? styles.active : ''
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <span
                      className={`${styles.arrow} ${
                        expandedItems[item.path] ? styles.expanded : ''
                      }`}
                    />
                  )}
                </div>
                {item.subItems && expandedItems[item.path] && (
                  <ul className={styles.subNav}>
                    {item.subItems.map((subItem) => {
                      const isActiveSubItem = decodeURIComponent(router.asPath) === subItem.path
                      return (
                        <li key={subItem.path}>
                          <p
                            onClick={(e) => {
                              e.preventDefault()
                              router.push(subItem.path)
                            }}
                            className={`${styles.link} ${
                              isActiveSubItem ? styles.active : ''
                            }`}
                          >
                            {subItem.title}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}