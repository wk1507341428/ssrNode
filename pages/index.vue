<template>
	<div class="container">
		<div @click="jump" class="iconfont icon-copyright" v-if="show">我是首页,环境变量=>{{env}}</div>
		<skeleton v-else></skeleton>
	</div>
</template>

<script>
import skeleton from '~/components/skeleton/skeleton'
const axios = require('axios')

export default {
	data(){
		return{
            show: false,
            env: null
		}
	},
	mounted() {

		axios.get('/kang1.wang/v1/subscribe/getTeacherIntroduceInfo')
		console.log(process.env.NODE_ENV)

        this.env = process.env.NODE_ENV
		setTimeout(()=>{
			this.show = true
		},1000)

    },
    methods:{
        jump(){
            this.$router.push({ path:"/rem" })
        }
    },
	components: {
		skeleton
	}
}
</script>

<style lang="scss" scoped>
.container{
	text-align: center;
	font-size: 37PX;
}
</style>
