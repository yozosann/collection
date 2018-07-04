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

/**
 * 颜色处理
 * 
 * Sass mix函数的js版本
 * color_1：颜色1
 * color_2：颜色2
 * weight：混合比重默认50，若为10，则代表前者为10 后者90
 * 
 */

export default function(color_1, color_2, weight) {
  function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
  function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal 

  weight = (typeof(weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = "#";

  for(var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
        v2 = h2d(color_2.substr(i, 2)),
        
        // combine the current pairs from each source color, according to the specified weight
        val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0))); 

    while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
    
    color += val; // concatenate val to our new color string
  }
    
  return color; // PROFIT!
};