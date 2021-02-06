<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>传参：{{num}}</h4>
    <div> <input type="button" value="change" @click="change_nav"></div>
    <div class="nav_top">
        <ul>
          <li  @click="change(index)" :class="[show_index == index ? 'item_show':'item_noshow']" @mouseenter="change_nav(index)" @mouseleave="leave_mouse" v-for="(item,index) in list" :key="index">{{item.title}}
            <div :class="[is_show == index ? 'show_nav' :'no_show_nav']" >这是导航栏的内容</div>
            <!-- <div class="show_nav" :style="{ display: display }">这是导航栏的内容</div> -->
          </li>
        </ul>
           
    </div>
    <div class="content_box" v-show="0 == show_index">
       <h4>这是首页的内容</h4>
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
    <div class="content_box" v-show="1 == show_index">
      这是的关于我们内容
    </div>
    <div class="content_box" v-show="2 == show_index">
      这是动漫的内容
    </div>
    <div class="content_box" v-show="3 == show_index">
      这是动漫的内容
    </div>
    <div class="content_box" v-show="4 == show_index">
      <h4> 这是外比巴卜的内容</h4>
      <div class="wbbb_nav">
        <div class="wbbb_nav_title" v-for=" (title,index) in list" :key="index">{{title.title}}</div>
      </div>
      <div class="content_neiron" v-for="(c,index) in list" :key="index">
          ————{{c.title}}————
          <div v-for="(a,index) in c.content" :key="index" @click="shuchu(index)">{{a}}</div>
      </div>
    </div>
    <div class="content_box" v-show="5 == show_index">
      这是Zoombie的内容
    </div>
    <div class="content_box" v-show="6 == show_index">
      这是phinex的内容
    </div>
    <div class="content_box" v-show="7 == show_index">
      这是iphone的内容
    </div>
    <div class="content_box" v-show="8 == show_index">
      这是phone的内容
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      display:'none',
      is_show:99,
      konzhi:{},
      num:'',
      show_index:0,
      list:[
          {title:'首页',content:['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',]},
          {title:'观于我们',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'动漫',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'外比巴卜',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'Zoombie',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'phinex',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'iphone',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]},
          {title:'phone',content:['内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容','内容',]}
      ]
    }
  },
  mounted(){  
    this.num = this.$route.params.num
  },
  methods:{
    change(i){
        this.show_index = i
    },
    change_nav(i){
      this.display = 'block'
      this.is_show = i
    },
    leave_mouse(){
      this.display = 'none'
      this.is_show = 99
    }
    
  }
}
</script>
<style lang="scss" scoped>
  .no_show_nav{display: none;}
  .show_nav{background: red; color: beige; height: 100px; line-height: 100px; width: 100px; text-align: center; font-size: 12px; position: absolute;z-index: 99;}
  .nav_top{height: 50px; width: 100%; background-color: aqua; border-radius: 20px;
    ul{
      display: flex; justify-content: space-around; align-items: center; height: 50px;
      li{padding: 0 20px;  line-height:50px;  list-style: none; float: left; border-radius: 20px; }
      li:hover{background-color: hotpink; border-radius: 20px;}
      .item_show{background-color: chocolate; position: relative;}
      .item_noshow{ }
    }
  }
  .content_box{ background-color: chartreuse; margin-top: 20px;padding: 10px 20px; position: relative; border: 1px red solid;
    .wbbb_nav{width: 100px; position: absolute;top: 50px; left: 0px; background-color: white; position: fixed; top: 290px; left: 100px;  border: 1px red solid;
      .wbbb_nav_title{ line-height: 50px; width: 100%; text-align: center;}
      .wbbb_nav_title:hover{background-color: violet;}
    }
    .content_neiron{margin-left: 100px; border: 1px red solid; text-align: center;}
  }
  #canvas{border: 1px red solid;}
</style>