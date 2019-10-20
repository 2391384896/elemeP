<template>
    <div id="vipCenterBuy">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipToVipCenter" src="../../assets/lArrow.png" alt="">
        在线支付
      </div>
      <!--第二部分-->
       <div class="buySecond">
         <p>支付剩余时间</p>
         <van-count-down :time="time" />
       </div>
      <!--第三部分-->

        <div class="buyThree">选择支付方式</div>

        <div class="buyThree1">
          <img src="../../assets/alipay.png" alt="">
          <p>支付宝</p>
          <img v-if="imgChange" @click="changeColor" src="../../assets/gouxuan.png" alt="">
          <img v-else @click="changeColor" src="../../assets/weigouxuan.png" alt="">
        </div>
<hr>
        <div class="buyThree1 buyThree2">
          <img  src="../../assets/weixin.png" alt="">
          <p>微信</p>
          <img v-if="imgChange" @click="changeColor" src="../../assets/weigouxuan.png" alt="">
          <img v-else @click="changeColor" src="../../assets/gouxuan.png" alt="">
        </div>

      <div class="cashPut3" :style="{background:'limegreen'}">
        <div @click="cashFiled">兑换</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "vipCenter_Buy",
      data(){
          return {
            time:15*60*1000,
            isFalse:'fasle',
            imgChange:'true'
        }
      },
      methods:{
        skipToVipCenter(){
          this.$router.push({path:'/vipCenter'});
        },
        cashFiled(){
          this.$dialog.confirm({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '当前环境无法支付，请打开官方APP进行付款'
          }).then((p)=>{
            this.$router.push({path:'/dingdan'});
          });
        },
        changeColor(){
          this.imgChange=!this.imgChange;
        },
        countDown(){
          if(this.time>0){
            this.$dialog.alert({
              width:280,
              overlay:false,
              // transition:transform(),
              message: '暂不开放支付功能'
            });
          }else{
            this.$dialog.alert({
              width:280,
              overlay:false,
              // transition:transform(),
              message: '支付超时'
            });
          }
        }

      },
      created(){
          this.countDown();
      },
      // updated(){
      //     this.$nextTick(function(){
      //       if(this.time>0){
      //         this.$dialog.alert({
      //           width:280,
      //           overlay:false,
      //           // transition:transform(),
      //           message: '当前环境无法支付，请打开官方APP进行付款'
      //         });
      //       }else{
      //         this.$dialog.alert({
      //           width:280,
      //           overlay:false,
      //           // transition:transform(),
      //           message: '支付超时'
      //         });
      //       }
      //     });
      // }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  #pHead{
    color:white;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    background: #26a2ff;
    position: relative;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }

  .van-count-down{
    color: #000;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .buySecond{
    text-align: center;
    font-size: 0.9rem;
    background: white;
    padding: 2rem 0;
  }
.buySecond>p{
  margin-bottom: 0.6rem;
}
  .buyThree{
    padding: 0.5rem 0 0.5rem 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
  .buyThree1{
    background: white;
    padding: 0.5rem 0;
  }
  .buyThree1>p{
    display: inline-block;
    transform: translate(0,-50%);
  }
  .buyThree1 img:nth-child(1){
  width: 3rem;
  height: 3rem;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  }
  .buyThree1 img:nth-child(3){
    width: 1.5rem;
    height: 1.5rem;
    transform: translate(8rem,-20%);
  }
.buyThree2 img:nth-child(3){
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(9.3rem,-20%);
}

.cashPut3{
  margin: 1rem 0.75rem;
  /*background: limegreen;*/
  background: lightgrey;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  border-radius: 0.2rem;
}
.cashPut3>div{
  padding: 0.6rem 0;
}
</style>
