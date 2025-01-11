const fs = require('fs')
const path = require('path')

function cleanBase64Images(filePath) {
    try {
        // 读取文件内容
        let content = fs.readFileSync(filePath, 'utf8')

        // 匹配 base64 图片格式
        const base64Pattern = /!\[.*?\]\(data:image\/[^;]+;base64,[^\)]+\)/g

        // 删除所有匹配的 base64 图片
        content = content.replace(base64Pattern, '')

        // 写回文件
        fs.writeFileSync(filePath, content, 'utf8')

        console.log(`已清理文件: ${filePath}`)
    } catch (error) {
        console.error(`处理文件时出错 ${filePath}:`, error)
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
        const fullPath = path.join(dir, file)

        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath)
        } else if (file.endsWith('.md')) {
            cleanBase64Images(fullPath)
        }
    })
}

// 处理 posts 目录下的所有 markdown 文件
const postsDir = path.join(__dirname, '../posts')
processDirectory(postsDir)