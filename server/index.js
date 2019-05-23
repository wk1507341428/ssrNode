const Koa = require('koa')
const consola = require('consola')
const bodyParser = require('koa-bodyparser')
const { Nuxt, Builder } = require('nuxt')
const api = require('./api/index')

const app = new Koa()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = ["testing","development"].includes(app.env)

consola.info("环境变量",app.env)
consola.info("环境变量",app.env,config.dev)

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  
  // bodyParser
  app.use(bodyParser())

  // 挂载api路由
  app.use(api.routes()).use(api.allowedMethods())

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
