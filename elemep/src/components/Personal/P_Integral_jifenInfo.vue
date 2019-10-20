<template>
  <div id="integralInfo">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="skipIntegral" src="../../assets/lArrow.png" alt="">
      积分问题
    </div>

    <!--第二部分-->
    <div id="pquestion">
      <p>
        <span class="question1">Q1: 怎么获得积分</span>
        <span class="question2">在线支付的订单将获得订单积分奖励：
          积分将在用户完成评价后获得。
          可获得积分=订单金额x10(即1元=10点积分)。
          订单金额指实际付款金额，不包含活动优惠金额。
          每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。
</span>
      </p>
      <p>
        <span class="question1">Q2: 积分用来做什么？</span>
        <span class="question2">可以在积分商城兑换各种礼品。</span>
      </p>
      <p>
        <span class="question1">Q3:礼品兑换很多天了还没有收到，该怎么办？</span>
        <span class="question2">礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</span>
      </p>
      <p>
        <span class="question1">Q4:礼品兑换中的手机充值卡兑换，怎样进行充值，充值之前会和我电话确认嘛？</span>
        <span class="question2">不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</span>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "P_Integral_jifenInfo",
      methods:{
        skipIntegral(){
          this.$router.push({path:'/integral'});
        }
      }
    }
</script>

<style scoped>
  #integralInfo{
    font-size: 1.1rem;
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
