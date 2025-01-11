import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import { getCache, setCache } from './cache'

const postsDirectory = path.join(process.cwd(), 'posts')

// 提取公共的 h2 标题处理函数
function extractH2Titles(content) {
  const h2Titles = []

  const processedContent = content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, title) => {
      const id = title
        .trim()
        .toLowerCase()
        .replace(/[\s\u4e00-\u9fa5]/g, (match) => {
          if (match === ' ') return '-'
          return match
        })
        .replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')

      h2Titles.push({
        title: title.trim(),
        id,
      })

      return `<h2 id="${id}">${title}</h2>`
    },
  )

  return { processedContent, h2Titles }
}

// 提取公共的 Markdown 处理函数
async function processMarkdown(content) {
  const processedContent = await remark()
    .use(html, {
      sanitize: false, // 允许原始 HTML
      allowDangerousHtml: true, // 允许危险的 HTML
    })
    .use(gfm)
    .process(content)

  return processedContent.toString()
}

// 添加一个处理图片路径的函数
function processImagePaths(content) {
  const basePath = process.env.NODE_ENV === 'production' ? '/blog' : ''
  return content.replace(
    /!\[([^\]]*)\]\(\/images\/(.*?)\)/g,
    `![$1](${basePath}/images/$2)`,
  )
}

export async function getPostData(id) {
  try {
    // 检查缓存
    const cachedData = getCache(`post-${id}`)
    if (cachedData) return cachedData

    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // 处理图片路径
    const contentWithFixedPaths = processImagePaths(matterResult.content)

    const contentHtml = await processMarkdown(contentWithFixedPaths)
    const { processedContent, h2Titles } = extractH2Titles(contentHtml)

    const postData = {
      id,
      contentHtml: processedContent,
      h2Titles,
      ...matterResult.data,
    }

    // 保存到缓存
    setCache(`post-${id}`, postData)
    return postData
  } catch (error) {
    console.error(`Error getting post data for ${id}:`, error)
    throw error
  }
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getSortedPostsData() {
  try {
    // 检查缓存
    const cachedPosts = getCache('all-posts')
    if (cachedPosts) return cachedPosts

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        const contentHtml = await processMarkdown(matterResult.content)
        const { h2Titles } = extractH2Titles(contentHtml)

        return {
          id,
          title: matterResult.data.title,
          date: matterResult.data.date,
          description: matterResult.data.description,
          h2Titles,
        }
      }),
    )

    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) return 1
      return -1
    })

    // 保存到缓存
    setCache('all-posts', sortedPosts)
    return sortedPosts
  } catch (error) {
    console.error('Error getting posts:', error)
    return []
  }
}
