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
import * as ajax from './api/index'

export default {
	data(){
		return{
            show: true,
            env: null
		}
	},
	async mounted() {
        try{
            let result = await ajax.test({a:1})
        }catch(err){
            console.log(err.message)
        }
        this.env = process.env.NODE_ENV

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
