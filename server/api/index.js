const axios = require('axios')
const Router = require('koa-router')
const config = require('../config/index')

const router = new Router()

// 接口代理
config.proxyList.forEach( item => {
    router.all(item.prefix + '/*', createService(item))
})

// 通用远程调用接口封装
function createService ({host, prefix}) {
    return async ctx => {
      let axiosConfig = {
        baseURL: host,
        url: ctx.path.replace(prefix, ""),
        method: ctx.method,
        responseType: 'json',
        params: ctx.query,
        withCredentials: true
      }
      const method = ctx.method.toLowerCase()
      if(method === 'post' || method === 'put' || method === 'patch') {
        axiosConfig.data = ctx.request.body
      }
      console.log('proxy ---->', axiosConfig.baseURL, axiosConfig.url)
      let { data } = await axios(axiosConfig)
      ctx.body = data
    }
}

module.exports = router