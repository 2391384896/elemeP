<template>
  <div id="pMoney">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="pLeave" src="../../assets/lArrow.png" alt="">
      我的余额
    </div>

    <!--第二部分-->
    <div id="moneySecond">
      <div id="pallMoney">
        <div id="pMoneyLeft">
          <p>当前余额</p>
          <p><span>{{ask}}0.00</span>元</p>
        </div>
        <span id="pMoneyRight" @click="moneyRightSkip"><img src="../../assets/askImg.png" alt="">余额说明</span>
        <mt-button class="mtButtonMoney" type="primary">提现</mt-button>
      </div>
    </div>

    <!--第三部分-->
    <div>
      <p>交易明细</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "P_Money",
      data(){
        return {
          ask:''
        }
      },
      methods:{
          pLeave(){
            this.$router.push({path:'/home'});
          },
          moneyRightSkip(){
            this.$router.push({path:'/money/moneyInfo'});
          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #pMoney{
    font-size: 0.9rem;
  }
  #pHead{
    color:white;
    font-weight: bold;
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
    left: 0.2rem;
  }
  #moneySecond{
    background: #26a2ff;
    padding: 0.3rem;
  }
  #pallMoney{
    border: 0.02rem solid white;
    border-radius: 0.1rem;
    background: white;
    height: 7rem;
    text-align: center;
    position: relative;
  }
  #pMoneyLeft p:nth-child(1){
    position: absolute;
    left: 0.5rem;
    top: 0.3rem;
    font-size: 0.6rem;
  }
  #pMoneyLeft p:nth-child(2){
    position: absolute;
    left: 0.3rem;
    top: 1rem;
  }

  #pMoneyLeft p:nth-child(2)>span{
    font-size: 2rem;
    font-weight: 400;
    margin: 0.3rem;
  }
  #pMoneyRight{
    position: absolute;
    right: 0.3rem;
    top: 0.2rem;
    color: #26a2ff;
    font-size: 0.6rem;
  }
  #pMoneyRight>img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
  .mtButtonMoney{
    width: 16.9rem;
    margin-top:4.5rem;
  }
</style>
