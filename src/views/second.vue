<template>
	<div>
		<button @click="goback"> go back</button>
		<video src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			controls
			autoplay="muted"
			class="video_box"
		></video>
		<div>保存的值为：{{save_text}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				save_text:''
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.save_text = localStorage.getItem('save_text')
		}
	}
</script>

<style lang="scss" scoped>
	.video_box{border: 1px red solid;}
</style>
