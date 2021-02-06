<template>
  <div class="home">
      <div class="swiper_box">
          <div class="swiper_item" v-for="(item,index) in img" :key="index">
              <img :src="item.src" mode="aspectFit" v-show="n == index">
          </div>
      </div>
      <div class="save_local_box">
          <h2>存储test</h2>
          <div>你要存储的值：{{str_text}}</div>
		  <div @click="getuserinfo">获取东西</div>
          <input type="text" v-model="str_text" placeholder="输入你要存储的值">
          <input type="button" value="存储" @click="save_local_text">
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
        str_text:'',
        img:[
          {
            src: require( '../assets/f1abdd628535e5dd415896b961c6a7efcf1b62cd.jpg')
          },
          {
            src:  require('../assets/1138fbdeb48f8c54d229814d2d292df5e1fe7f47.jpg')
          },
          {
           src: require('../assets/79511012_p0_master1200.jpg')
          },
          {
           src: require('../assets/71897900_p0_master1200.jpg')
          },
          {
            src: require('../assets/78089000_p0_master1200.jpg')
          },
          {
            src: require('../assets/80495010_p0_master1200.jpg')
          },
          {
            src: require('../assets/76308743_p0_master1200.jpg')
          }
        ],
        n:0
    }
  },   
  methods:{
    play(){
      setInterval(this.autoplay,2000);
    },
    autoplay(){
      this.n++;
      if(this.n == this.img.length){
        this.n=0;
      }
    },
    save_local_text(){
      localStorage.setItem('save_text',this.str_text)

    },
	getuserinfo(){
		this.axios.get('http://swcars.baokunet.cn/api/time')
	}
  },
  mounted:function(){
    this.play();
  }
}
</script>
<style lang="scss" scoped>
  .home{height:100vh; width: 100%; background-image: url('../assets/80722910_p0_master1200.jpg'); background-size: 100%;}
  .swiper_box{height: 300px; width: 15%; display: flex; flex-direction: column; border: 1px red solid;
    .swiper_item{height: 300px; width: 50px;
      img{height: 300px;}
    }
  }
  .save_local_box{}
</style>