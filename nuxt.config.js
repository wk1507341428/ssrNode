const pkg = require('./package')


module.exports = {
	mode: 'spa',
	env: {
		NODE_ENV: process.env.NODE_ENV
	},

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{ innerHTML: require('./assets/js/adapter.js'), type: 'text/javascript', charset: 'utf-8' },
		],
		__dangerouslyDisableSanitizers: ['script']
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
        '@/assets/font/font_1271314_tt6tmlyg79/iconfont.css'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
        './plugins/main.js'
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
        '@nuxtjs/style-resources'
	],
	// 为全局提供scss变量
	styleResources: {
		scss: '~/assets/scss/variable.scss',
	},
	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	** Build configuration
	*/
	build: {
		//  see https://zh.nuxtjs.org/faq/postcss-plugins/
		postcss: {
			// plugins: {
			// 	'postcss-px2rem': {
			// 		remUnit: 75
			// 	}
			// }
		},

		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
