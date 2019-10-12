<template>
    <div id="moneyQuestion">
      <div id="pHead" >
        <img @click="mQuestionLeave" src="../../assets/lArrow.png" alt="">
        余额问题
      </div>
      <div id="pquestion">
        <p>
          <span class="question1">Q1: 使用余额的条件</span>
          <span class="question2">为了保护账户安全，使用余额前必须先绑定手机号。
</span>
        </p>
        <p>
          <span class="question1">Q2: 余额可以怎么用？</span>
          <span class="question2">余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</span>
        </p>
        <p>
          <span class="question1">Q3:我要如何提现？</span>
          <span class="question2">为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</span>
        </p>
        <p>
          <span class="question1">Q3:为什么提现失败？</span>
          <span class="question2">可能原因有：您的姓名、开户行、银行卡等信息不匹配；您当日的体现次数和金额超过限制；您的账户存在异常，被风控拦截</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "P_MoneyQuestion",
      methods:{
        mQuestionLeave(){
          this.$router.push({path:'/money'})
        }
      }
    }
</script>

<style scoped>
  #pHead{
    color:white;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    background: #26a2ff;
    position: relative;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    left: 0.2rem;
  }
  .question1{
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.6rem;
  }
  .question2{
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem;
    display: inline-block;
  }
  #moneyQuestion{
    height: 100%;
    background: white;
  }
  #pquestion{
    padding-bottom: 0.8rem;
  }
</style>
