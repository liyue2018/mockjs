/*
* @Author: yongze-chen
* @Date:   2018-07-12 10:57:31
* @Last Modified by:   yongze-chen
* @Last Modified time: 2018-07-12 14:42:21
*/
// 获取mockjs插件
const Mock = require('mockjs')

// 获取mock.Random 对象

var Random = Mock.Random

// mock一组数据demo

const productData = function (opt) {
  console.log('opt', opt)
  let products = []
  for (let i = 0; i < 30; i++) {
    // 定义假数据生成规则
    let newProductObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + '' + Random.time(),
      email: Random.email(),
      name: Random.cname()
    }
    products.push(newProductObject)
  }
  return {
    data: products
  }
}
// 当post 或get 请求道/products路由时Mock会拦截请求并返回

Mock.mock('/products', /post|get/i, productData)
