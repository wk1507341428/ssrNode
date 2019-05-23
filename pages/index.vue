<template>
	<div class="container">
		<div v-if="show">我是首页</div>
		<skeleton v-else></skeleton>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import skeleton from '~/components/skeleton/skeleton'
const axios = require('axios')

export default {
	data(){
		return{
			show: false
		}
	},
	mounted() {

		axios.get('/kang1.wang/v1/subscribe/getTeacherIntroduceInfo')
		console.log(process.env.NODE_ENV)

		setTimeout(()=>{
			this.show = true
		},1000)

	},
	components: {
		Logo,
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
