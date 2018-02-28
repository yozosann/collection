// 求和
export const sum = arr => arr.reduce((prev, cur) => prev + cur, 0)

// 获取 locations.search 参数
export const getQuery = (key = '') => {
  const query = qs.parse(location.search.slice(1))
  return key ? query[key] : query
}

// 过滤 json
export const only = (data = {}, keys = []) => keys.reduce((prev, cur) => {
  prev[cur] = data[cur]
  return prev
}, {})

// 解析 url
export const parseUrl = (url = '') => {
  const a = document.createElement('a')
  a.href = url
  return only(a, ['protocol', 'host', 'pathname', 'port', 'search', 'hash'])
}

// 快速循环
Array.apply(null, { length: 20 }).map(function () {
  return createElement('p', 'hi')
})