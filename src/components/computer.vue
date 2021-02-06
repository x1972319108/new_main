<template>
	<div class="computer">
		<h5 class="title">这是一个计算器插件</h5>
		<div class="content_show"> 
			{{sum}}
			<div class="symbol" v-if="symbol == 1">x</div>
			<div class="symbol" v-else-if="symbol == 2">-</div>
			<div class="symbol" v-else="symbol == 3">+</div>	
		</div>
		<div class="button_box">
			<div class="button_num">
				<div class="for_num" v-for="(item,index) in num" @click="num_submit(item)"  :key='index'>{{item}}</div>
			</div>
			<div class="button_symbol">
				<div class="symbol_style" @click="multiply">X</div>
				<div class="symbol_style" @click="reduce">-</div>
				<div class="symbol_style" @click="plus">+</div>
			</div>
		</div>
		<div class="symol_box" style="display: flex;">
			<div class="for_num">+/-</div>
			<div class="for_num" @click="num_submit(0)">0</div>
			<div class="for_num" @click="num_submit('.')" style="margin-right: 6px;">.</div>
			<div class="for_num" >=</div>
		</div>
		<!-- <input type="text" style="height: 20px;" v-model="watch_use"/> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				symbol:1,
				num:['1','2','3','4','5','6','7','8','9'],
				sum:'0',
				watch_use:0
			}
		},
		watch:{
			watch_user() {
				handler
				console.log('我变奇怪了')
			},
			immediate:true,
			deep:true
		},
		methods:{
			num_submit(i){
				if(this.sum.length >= 11){
					window.confirm('不能再点了,再点下去我的身体就要坏掉了')
				}else{
					if(this.sum == 0){
						this.sum = i
					}else{
						this.sum += i
					}
				}	
			},
			multiply(){
				this.symbol = 1
				this.watch_use += 1
				console.log(this.watch_use)
			},
			reduce(){
				this.symbol =2
				this.watch_use += 1
				console.log(this.watch_use)
			},
			plus(){
				this.symbol = 3
				this.watch_use += 1
				console.log(this.watch_use)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.computer{
		border: 1px solid #4B453B;
		border-radius: 10px;
		height: 530px;
		width: 320px;
		background-color: deepskyblue;
		box-shadow: 10px 10px 5px #888;
	}
	.title{height: 40px; width: 100%; line-height: 40px; text-align: center; color:red}
	.content_show{ height: 100px; width:310px; margin-bottom: 35px; line-height: 100px; text-align: right; font-size: 32px;  padding-right: 10px; position: relative;}
	.symbol{position: absolute; right:10px;bottom:-25px; font-size: 24px; color:white;}
	.button_box{display: flex; }
	.button_num{width: 240px; display: flex; flex-wrap: wrap-reverse;}
	.for_num{width: 74px; border: 1px #E6E6E6 solid; height:50px; text-align: center; line-height: 50px; margin-right: 3px;}
	.for_num:hover{background-color: #FBF4EB;}
	
	.button_symbol{display: flex; flex-direction: column;}
	.symbol_style{height: 50px; line-height: 50px; text-align: center; width: 74px; border: 1px #E6E6E6 solid; }
	.symbol_style:hover{background-color: #FBF4EB;}
	
</style>
