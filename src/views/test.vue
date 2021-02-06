<template>
    <div>
        <h4>这里是css3动画测试页面</h4>
        
        <div class="test">
            <div class="no1_title">NO.1:2D,3D旋转</div>
                <div class="no1_test">
                    <div class="no1_test_div">
                        first
                    </div>
                    <div class="no2_test_div">
                        second
                    </div>
                    <div class="no3_test_div">
                        third
                    </div>
                    <div class="no4_test_div">
                        fourth
                    </div>
                    <div class="no5_test_div">
                        fifth
                    </div>
                    <br />
                    <div class="no6_test_div">
                        sixth
                    </div>
                </div>
            <span class="no2_title">NO.2:Animation(动画)</span>    
            <div class="two_test_div_no1">
                Animation
            </div>
        </div>

    

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .test{display: flex; flex-direction: column;height: 500px; width: 100%; background-color: azure; align-items: center;}
    .no1_title{color: red; font-size: 16px; text-align: center;}
    .no1_test{ padding: 10px 10px; display: flex;
        .no1_test_div{line-height: 100px; height: 100px; width: 100px; border-radius: 10px; background-color: brown; text-align: center; color: aquamarine;}
        .no1_test_div:hover{transform: rotate(30deg);}
        .no2_test_div{line-height: 100px; height: 100px; width: 100px; background-color: seagreen; border-radius: 10px; text-align: center; color: aqua; margin-left: 10px; transition:transform 2s;}
        .no2_test_div:hover{transform:translate(20px,20px);}
        .no3_test_div{line-height: 100px; height: 100px; width: 100px; background-color: blueviolet; border-radius: 10px; text-align: center; color: burlywood; margin-left: 10px; transition:transform 2s;}
        .no3_test_div:hover{transform: scale(0.7,0.7);}
        .no4_test_div{line-height: 100px; height: 100px; width: 100px; background-color:springgreen; border-radius: 10px; text-align: center; color: darkgreen; margin-left: 10px; transition:transform 2s;}
        .no4_test_div:hover{transform: skew(20deg,20deg);}//skewX() 只在X轴上倾斜 skewY()只在Y轴上倾斜
        .no5_test_div{line-height: 100px; height: 100px; width: 100px; background-color: rgb(10, 241, 211); border-radius: 10px; text-align: center; color: khaki; margin-left: 10px; transition: transform 2s; }
        .no5_test_div:hover{transform: rotate(360deg); }
        .no6_test_div{line-height: 100px; height: 100px; width: 100px; border-radius: 10px; background-color: yellow; text-align: center; color: aquamarine;margin-left: 10px; transition: transform 2s;}
        .no6_test_div:hover{transform: rotateY(360deg);  }
    }
    
    // @keyframes changecolor{+------------------
    //     0%{background-color: aqua; transform: translate(20px,20px); transform: rotate(20deg);}
    //     25%{background-color: red; transform: translate(-20px,-20px); transform: rotate(40deg);}
    //     50%{background-color: blue; transform: translate(20px,20px); transform: rotate(60deg);}
    //     75%{background-color: yellow; transform: translate(-20px,-20px); transform: rotate(80deg);}
    //     100%{background-color: greenyellow; transform: translate(20px,20px); transform: rotate(100deg);}
    // }
    .no2_title{color: hotpink; font-size: 16px; text-align: center; display: flex; background-color: aquamarine; width: 10%;}
    .two_test_div_no1{height: 100px; width: 100px; border-radius: 10px; background-color: hotpink; text-align: center; line-height: 100px; color: greenyellow; margin-top: 10px; 
        animation-name: test;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
        }
    // 动画属性开始
    @keyframes test{
        0%{background-color: salmon; color: aqua; transform: translate(0,0);}
        25%{background-color: sandybrown; color: azure; transform: translate(50px,0);}
        50%{background-color: red; color: blue; transform: translate(0,50px);}
        75%{background-color: blue; color: chartreuse; transform: translate(-50px,0);}
        100%{background-color: seagreen; color: coral; transform:translate(0,-50px);}
    }
</style>