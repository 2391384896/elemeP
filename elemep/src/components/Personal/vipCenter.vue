<template>
    <div id="vipCenter">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipHome" src="../../assets/lArrow.png" alt="">
        会员中心
      </div>

      <!--第二部分-->
      <div class="vipSecond">为账户{{yonghuming}}购买会员</div>
      <!--第三部分-->
      <div class="vipsInfo" @click="vipSkipInfo">
       <span>会员特权</span><span >会员说明 <img src="../../assets/rArrowBlack.png" alt=""></span>
      </div>

      <!--第四部分-->
      <div class="vipFour">
        <div class="vipFour2">
        <img src="../../assets/sheng.png">
        <div class="vipFour1">
          <p>减免配送费</p>
          <p>每月减免30单，每日可减免3单，每单最高减4元，蜂鸟专送专享</p>
        </div>
        </div>
      </div>
      <div class="vipFour">
        <div class="vipFour2">
          <img src="../../assets/mian.png">
          <div class="vipFour1">
            <p>减免配送费</p>
            <p>每月减免30单，每日可减免3单，每单最高减4元，蜂鸟专送专享</p>
          </div>
        </div>
      </div>

      <!--第五部分-->
      <div class="vipFive">
        <div class="vipFive1">开通会员</div>
        <div class="vipFive2"><p>1个月<span>￥20</span></p><p @click="buyVip">购买</p></div>
      </div>

      <!--第六部分-->
      <div class="vipsCash" @click="vipSkipKkm">
        <span>兑换会员</span><span >使用卡号卡密 <img src="../../assets/rArrowBlack.png" alt=""></span>
      </div>
      <div class="vipsRecord" @click="vipSkipFp">
        <span>购买记录</span><span >开发票 <img src="../../assets/rArrowBlack.png" alt=""></span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "vipCenter",
      data(){
          return {
            yonghuming:''
          }
      },
      methods:{
        skipHome(){
          this.$router.push({path:'/phome'});
        },
        vipSkipInfo(){
          this.$router.push({path:'/vipCenterInfo'});
        },
        buyVip(){
          this.$router.push({path:'/onlineCenterBuy'});
        },
        vipSkipKkm(){
          this.$router.push({path:'/cashVip'});
        },
        vipSkipFp(){
          this.$router.push({path:'/buyRecord'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #vipCenter{
    background: #f5f5f5;
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

  .vipSecond{
    font-size: 0.9rem;
    padding: 0.5rem 0;
    margin-left: 0.5rem;
  }
  .vipSecond>span{
    color: black;
  }

  .vipsInfo{
    font-size: 1rem;
    color: black;
    padding: 0.5rem 0;
    padding-left: 0.5rem;
    background: white;
  }
  .vipsInfo span:nth-child(2){
    font-size: 0.9rem;
    color: #aaa;
    margin-left: 8.5rem;
  }
  .vipsInfo>span>img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }

  .vipFour{
    background: white;
    padding: 0 0 0.6rem 0.6rem;
  }
  .vipFour2{
    padding-top: 0.6rem;
    border-top: 0.02rem solid #ccc;
  }
  .vipFour>img{
    width: 3rem;
    height: 3rem;
  }
  .vipFour1{
    display: inline-block;
    width: 12rem;
    margin-left: 0.5rem;
  }
  .vipFour1 p:nth-child(1){
    font-size: 1rem;
    color: black;
    margin-bottom: 0.5rem;
  }
  .vipFour1 p:nth-child(2){
    font-size: 0.7rem;
    color: #aaa;
  }

  .vipFive{
    background: white;
    font-size: 0.9rem;
    padding-left:0.6rem;
    color: black;
    margin-top: 1rem;
  }
  .vipFive1{
    padding: 0.5rem 0;
  }
  .vipFive2{
    border-top: 0.02rem solid #ccc;
    padding: 0.6rem 0;
  }
  .vipFive2>p{
    display: inline-block;
  }
  .vipFive2>p>span{
    color: red;
    font-weight: bold;
  }
  .vipFive2 p:nth-child(2){
    color: red;
    border: 0.02rem solid red;
    border-radius: 0.2rem;
    padding: 0.2rem 0.4rem;
    margin-left: 10rem;
  }

  .vipsCash,.vipsRecord{
    margin-top: 1rem;
    font-size: 1rem;
    color: black;
    padding: 0.5rem 0;
    padding-left: 0.5rem;
    background: white;
  }
  .vipsCash span:nth-child(2){
    font-size: 0.9rem;
    color: #aaa;
    margin-left: 7rem;
  }
  .vipsRecord span:nth-child(2){
    font-size: 0.9rem;
    color: #aaa;
    margin-left: 9.6rem;
  }
  .vipsCash>span>img{
     width: 1rem;
     height: 1rem;
     vertical-align: middle;
   }
  .vipsRecord>span>img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
</style>
