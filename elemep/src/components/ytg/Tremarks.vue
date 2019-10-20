<template>
    <div id="wrap">
      <div id="toubu">
        <router-link to="/Tqrdd">
        <img id="toubu-1" src="../../assets/img_t/zuojian.png" alt="">
        </router-link>
        <span id="toubu-2">订单备注</span>
      </div>
      <div id="ksbz">
        <p>快速备注</p>
        <div id="la">
          <!--<span v-for="(v,i) in Buttons" :class="{'btn-primary':num==i+1}" @click="dealCatePros(v,i+1)">不要辣</span>-->
          <span :class="p==1?'a':'b'" @click="dealCatePros(p)">不要辣</span>
          <span :class="p==2?'a':'b'" @click="dealCatePros2(p)">不要辣</span>
          <span :class="p==3?'a':'b'" @click="dealCatePros3(p)">不要辣</span>
        </div>
        <span id="xc1" :class="xc?'a':'b'" @click="xc2()">不要香菜</span><br>
        <span id="yc1" :class="yc?'a':'b'" @click="yc2()">不要洋葱</span>
        <span id="cong1" :class="cong?'a':'b'" @click="cong2()">多点葱</span>
        <span id="cu1" :class="cu?'a':'b'" @click="cu2()">多点醋</span>
        <div id="bing">
          <span :class="v==1?'a':'b'" @click="bing1(v)">去冰</span>
          <span :class="v==2?'a':'b'" @click="bing2(v)">少兵</span>
        </div>
      </div>
      <div id="qita">
        <p>其他备注</p>
        <textarea  placeholder="请输入备注内容(可不填)" id="dk" cols="30" rows="5"></textarea>
      </div>
      <div  id="qd">
        确定
      </div>
    </div>
</template>

<script>
    export default {
        name: "Tremarks",
      data(){
          return{
            p:'',
            xc:false,
            yc:false,
            cong:false,
            cu:false,
            v:''
          }
      },
      methods:{
        dealCatePros(p){
         this.p=1;
      },
        // queding(){
        //   if(xc){
        //
        //   }
        //   this.$router.push({
        //     path:
        //   })
        // },
        dealCatePros2(p){
          this.p=2;
        },
        dealCatePros3(p){
          this.p=3;
        },
        bing1(v){
      this.v=1
        },
        bing2(v){
          this.v=2
        },
        xc2(){
          console.log(this.xc)
          this.xc=!this.xc;
        },
        yc2(){
          this.yc=!this.yc;
        },
        cong2(){
          this.cong=!this.cong;
        },
        cu2(){
          this.cu=!this.cu;
        }
      },
      created(){
          // this.axios.git("")
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  #wrap{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
#toubu{
  height: 2.2rem;
  line-height: 2.2rem;
  background: #3190e8;
  color: white;
}
  #toubu-1{
    margin-left: 0.5rem;

  }
  #toubu-2{
    font-size: .8rem;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
  }

  #ksbz{
    font-size: 0.9rem;
    margin-top: 0.5rem;
    background: white;
    position: relative;
    height: 8rem;
  }
  #ksbz>p{
    font-size: .65rem;
    color: #333;
    line-height: 2rem;
    margin-left: 1rem;
  }
  #la{
    margin-left: 0.5rem;
    display:inline-block;

  }
  #la>span{
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    margin-left:-0.3rem ;
  }

  #la>span:nth-child(1){
    margin-left: 0.5rem;
     border-bottom-left-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
  #la>span:nth-child(3){
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  #xc1{
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    margin-left: 0.5rem;
    border-radius: 0.3rem;
  }
  #yc1{
    position: absolute;
    top: 4rem;
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    border-radius: 0.3rem;
    margin-left: 1rem;
  }
  #cong1{
    position: absolute;
    top: 4rem;
    left: 5.8rem;
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    border-radius: 0.3rem;
  }
  #cu1{
    position: absolute;
    top:4rem;
    left:10rem;
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    border-radius: 0.3rem;
  }
  #bing{
    margin-left: 0.5rem;
    display:inline-block;
    margin-top: 3rem;
  }
  #bing>span{
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border: 0.025rem solid #3190e8;
    margin-left: -0.3rem;
  }
  #bing>span:nth-child(1){
    margin-left: 0.5rem;
    border-bottom-left-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
  #bing>span:nth-child(2){
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  #qita{
    background: white;
    margin-top: 1rem;
    height: 10rem;
  }
  #qita>p{
    margin-left: 0.5rem;
    font-size: .65rem;
    color: #333;
    line-height: 2rem;
  }
  #dk{
    margin-left: 1.5rem;
    border-left: 1px solid #aaa;
    background: #f9f9f9;
    padding: 0.1rem;
  }
  .a{
    background: #3190e8;
  }
  .b{
    background: white;
  }
  #qd{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: .2rem;
  }
</style>
