<template>
	<div class="">
		<h5>这里是组件传参测试页面</h5>
		<div style="display: flex; justify-content: space-around;">
			<com></com>
		<!-- 	<com></com>
			<com></com> -->
		</div>
	
	</div>
</template>

<script>
	import com from '../components/computer.vue'
	
	export default{
		components:{com},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
		
</style>
