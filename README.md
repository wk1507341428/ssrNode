# 项目说明

### 1. 关于rem

项目内部已经集成rem方案，切使用了`postcss-px2rem`插件，默认设计图宽度为750，在切图时，如果是750宽度的设计图，测量多少写多少px即可，`postcss-px2rem`插件会自动转化为rem单位，如果想用到px单位，则用`PX`单位

---

### 2. 关于环境变量

目前设计有四个环境：[ `development` , `testing` , `uat` , `production` ]，采用 `pm2` 管理进程，默认 `development` 环境和 `testing` 环境不走 build 后的代码，而`uat环境` 和 `production环境` 默认走的是 build 后的代码，这里需要注意下，详情见 `/server/index.js`

启动项目可以直接运行脚本，这里不多做介绍，这里主要介绍用pm2启动项目。

用pm2启动项目首先要了解pm2，这里不做解释，而且脚本已经写好

```

sh deploy.sh development

sh deploy.sh test

sh deploy.sh uat

sh deploy.sh production

```

