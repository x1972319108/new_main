<template>
	<div class="body_box">
		<div class="head">
			<div class="user_name" v-if="user">欢迎您:{{user}}</div>
			<div class="user_name" v-else> <button @click="login" >登陆</button></div>
		<button @click="change">前往第三个个页面</button>
		<input type="text" maxlength="11" @blur="check" v-model="user">
		<input type="password" maxlength="16" v-model="password">
		<form action="">
			姓名：<input type="text" maxlength="4" v-model="name" >
			<!-- 性别：<input type="radio" :value="item" name="sex" v-for="(item,index) in sex" :key='index' @blur="con(item)">{{item}} -->
			爱好：<select @change="check_select($event)">
					<option :value="item.id" v-for="item in hobby" >{{item.id}}--{{item.name}}</option>
				</select>
				<input type="checkbox" id="Saber" value="Saber" v-model="check_name">
				<label for="Saber">Saber</label>
				<input type="checkbox" id="Lancer" value="Lancer" v-model="check_name">
				<label for="Saber">Lancer</label>
				<input type="checkbox" id="Archer" value="Archer" v-model="check_name">
				<label for="Saber">Archer</label>
				<input type="checkbox" id="Rider" value="Rider" v-model="check_name">
				<label for="Saber">Rider</label>
				<input type="checkbox" id="Caster" value="Caster" v-model="check_name">
				<label for="Saber">Caster</label>
				选择的从者有:{{check_name}}
			<button type="reset">重置</button>
		</form>
		<transition class="run_text">
			<p v-if="show">hello</p>
		</transition>
		<!-- <bottom class="bottom_style"></bottom> -->
		</div>
		<div class="foot">
			<div class="left_nav">
				<router-link to="/about/123" @click.native="show_router">About</router-link>
				<router-link to="/home" @click.native="show_router">Home</router-link>
				<router-link to="/second" @click.native="show_router">Second</router-link>
				<router-link to="/test" @click.native="show_router">test</router-link>
				<router-link to="/parameters" @click.native="show_router">Parameters</router-link>
				<button @click="is_show = false">关闭</button>
			</div>
			<router-view class="content" v-show="is_show"></router-view>
		</div>
		
	</div>
</template>

<script>
	import home from './Home'
	import about from './About'
	import second from './second'
	import bottom from '../components/bottom.vue'
	import test from './test'
	import parameters from './parameters'
	export default{
		components:{bottom,home,about,second,test,parameters},
		data(){
			return{
				check_name:[],
				login_show:'',
				user:'',
				is_show:false,
				show:true,
				user:'',
				password:'',
				name:'',
				sex:['男','女'],
				hobby:[
						{id:1,name:'奔跑'},
						{id:2,name:'游泳'},
						{id:3,name:'划船'}
					]
			}
		},
		show(){
			this.user = localStorage.getItem('user')
			
		},
		mounted(){
			this.user = localStorage.getItem('user')
		},
		methods:{
			getuserinfo(){
				this.axios.get('http://swcars.baokunet.cn/api/time')
				.then()
			},
			change(){
				this.$router.push('/third')
			},
			check(){
				console.log('输入值为：'+this.user)
			},
			con(item){
				console.log(item)
			},
			check_select(e){
				console.log(e.target.value)
				console.log(e)
				console.log(e.target.selectedIndex)
			},
			show_router(){
				this.is_show = true
				console.log(this.is_show)
			},
			login(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style lang="scss" scoped>
	a{text-decoration: none;}
	.body_box{height: 100vh;display: flex; flex-direction: column; background-color: bisque;
		.head{
			.run_text{height: 50px; width: 100%;background-color: coral; border-radius: 20px;}
			.user_name{float: right; margin-right: 30px;}
		}
		.bottom_style{height: 150px; width: 100%; position: fixed; bottom: 0px;}
		.foot{display: flex; 
			.left_nav{width: 50px; display: flex; flex-direction: column; background-color: aqua; text-decoration: none;color:black; overflow: hidden;
			router-link-active{text-decoration: none;}
			}
			.content{padding: 20px 50px; height: 100vh; width: 100%; border: 1px red solid;
			// background-image: linear-gradient(to right bottom,aqua,red,green,blue,yellow);
			}
		}
	}
</style>
