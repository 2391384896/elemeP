<template>
  <div id="vCenterInfo">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="skiptoVipCenter" src="../../assets/lArrow.png" alt="">
      我的优惠
    </div>
    <!--第二部分-->
    <div class="vipInfo">
      尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
      购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
      注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
    </div>
    <div id="pquestion">
      <p>
        <span class="question1">Q1: 特权介绍</span>
        <span class="question2">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。
          减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
</span>
      </p>
      <p>
        <span class="question1">Q2:资费介绍 </span>
        <span class="question2">饿了么会员卡：20元
</span>
      </p>
      <p>
        <span class="question1">Q3: 使用说明</span>
        <span class="question2">当用户满足以下任一条件，会员服务自动失效：
          自绑定之日起超过31天；
          在31天内累计使用减免配送费的蜂鸟订单数量达到30单。
</span>
      </p>
      <p>
        <span class="question1">Q4:购卡说明</span>
        <span class="question2">在线购买：饿了么App>我的>饿了么会员卡
</span>
      </p>
      <p>
        <span class="question1">Q5:温习提示</span>
        <span class="question2">用户在当前会员服务失效前，无法购买新卡。
          请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "vipCenter_Info",
      methods:{
        skiptoVipCenter(){
          this.$router.push({path:'/vipCenter'});
        }
      }
    }
</script>

<style scoped>
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
  .vipInfo{
    font-size: 0.6rem;
    margin: 1rem 2rem;
  }

  .question1{
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0.6rem;
  }
  .question2{
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem;
    display: inline-block;
  }
  #pquestion{
    padding-bottom: 0.8rem;
    font-size: 0.6rem;
  }
</style>
