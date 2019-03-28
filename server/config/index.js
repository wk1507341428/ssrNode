const env = process.env.NODE_ENV

let configDefault = require("./config.default")

let localConfig = null
if (env === 'production') {
  localConfig = require('./config')
} else if (env === 'uat') {
  localConfig = require('./config.uat')
} else {
  localConfig = require('./config.test')
}

console.log(env,"<<<<<<<<<<<",localConfig)

const config = Object.assign(configDefault, localConfig)

module.exports = config
