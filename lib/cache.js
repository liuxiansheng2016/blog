// 简单的内存缓存实现
const cache = new Map()

export function getCache(key) {
    const item = cache.get(key)
    if (!item) return null

    // 检查缓存是否过期（1小时）
    if (Date.now() - item.timestamp > 3600000) {
        cache.delete(key)
        return null
    }

    return item.data
}

export function setCache(key, data) {
    cache.set(key, {
        data,
        timestamp: Date.now(),
    })
}