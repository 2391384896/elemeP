<template>
  <div id="voucherInfo">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="skipVoucher" src="../../assets/lArrow.png" alt="">
      代金券说明
    </div>

    <!--第二部分-->
    <div id="pquestion">
      <p>
        <span class="question1">Q1: 什么是商家代金券</span>
        <span class="question2">商家代金券是指由商家自己发放代金券，只限在制定的商家使用，可根据条件抵扣相应金额。
</span>
      </p>
      <p>
        <span class="question1">Q2: 怎么获得商家代金券？</span>
        <span class="question2">进入有【进店领券】或【下单返券】标示的商家既有机会获得代金券。
      【下单返券】需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</span>
      </p>
      <p>
        <span class="question1">Q3:商家代金券使用条件</span>
        <span class="question2">商家代金券仅限在指定商家使用
      商家代金券仅限在线支付使用
      每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "P_DiscountVoucherInfo",
      methods:{
        skipVoucher(){
          this.$router.push({path:'/discountHb'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #voucherInfo{
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
