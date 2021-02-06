<template>
    <div class="body">
        <div><button @click="get_back" class="back">返回</button></div>
        <div class="login_body">
                <h1 class="title">登陆</h1>
                <div class="input_box">账号：<input type="number" v-model="user"></div>
                <div class="input_box">密码：<input type="password" v-model="password" maxlength="16"></div>
                <button @click="login" class="login_btn">登陆</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:'',
            password:''
        }
    },
	computed:{
		
	},
    methods:{
        get_back(){
            this.$router.go(-1)
        },
        login(){
            if(this.user == 123 && this.password == 123){
                localStorage.setItem("user",this.user)
                setTimeout(()=>{
                    this.$router.push({name:'Index'})
                },2000)
                
            }else{
                window.confirm('您输入的账号或密码有误')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.body{ height: 100vh;
    background-image: linear-gradient(to right bottom,red,aqua,blue);
    .back{
        margin-left: 20px;
        margin-top: 20px;     
    }
    .login_body{
        margin: 0 auto;
        margin-top: 100px;
        height: 500px;
        width: 500px;
        background-color: darkkhaki;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 30px;
        .title{
            margin-top: 30px;
            text-align: center;
            letter-spacing: 20px;
            margin-bottom: 20px;
            
        }
        .input_box{text-align: center;line-height: 50px; width: 80%; border-radius: 20px; background-color: darkgoldenrod; margin-bottom: 20px;}
        .login_btn{width: 70px; height: 30px; border-radius: 5px; color: darkorange;}
    }
}
</style>