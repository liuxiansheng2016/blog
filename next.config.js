/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 启用静态导出
    images: {
        unoptimized: true, // GitHub Pages 不支持图片优化
    },
    basePath: process.env.NODE_ENV === 'production' ?
        'https://github.com/liuxiansheng2016/blog' :
        '', // 替换 'blog' 为你的仓库名
}

module.exports = nextConfig