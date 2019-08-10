<template>
	<div class="container">
		<div @click="jump" v-if="show">
            <div>我是首页,环境变量=>{{env}} <i class="iconfont icon-copyright"></i> </div> 
            <div>{{ '我是过滤器' | test_filter }}</div> 
        </div>
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
	font-size: 16PX;
}
</style>
