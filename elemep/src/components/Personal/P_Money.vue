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

        <div class="cashPut3" :style="{background:isChangeColor}">
          <div @click="cashSuccess">提现</div>
        </div>
      </div>
    </div>

    <!--第三部分-->
    <div class="mDetail">
      <p>交易明细</p>
      <div class="mDetail1">
        <img src="../../assets/jydetail.png" alt="">
        <p>暂无明细记录</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "P_Money",
      data(){
        return {
          ask:'',
          isChangeColor:'',
        }
      },
      methods:{
          pLeave(){
            this.$router.push({path:'/phome'});
          },
          moneyRightSkip(){
            this.$router.push({path:'/moneyInfo'});
          },
        cashSuccess(){
            if( this.isChangeColor=='limegreen'){
              this.$dialog.alert({
                width:280,
                overlay:false,
                // transition:transform(),
                message: '暂时无法兑现'
              });
            }
        }
      },
      created(){
          if(!(this.ask<='0.00')){
            this.isChangeColor='limegreen';
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
  #moneySecond{
    background: #26a2ff;
    padding: 0.3rem;
  }
  #pallMoney{
    border: 0.02rem solid white;
    border-radius: 0.1rem;
    background: white;
    height: 8rem;
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
  .cashPut3{
    margin: 1rem 0.75rem;
    /*background: limegreen;*/
    background: lightgrey;
    text-align: center;
    color: white;
    padding: 0 6rem;
    font-size: 0.9rem;
    border-radius: 0.2rem;
    position: absolute;
    top:4.5rem;
    left: 1rem;
  }
  .cashPut3>div{
    padding: 0.4rem;
  }
  .mDetail{
    font-size: 0.7rem;
    padding-top: 0.5rem;
    color: gray;
    margin-left: 0.5rem;
  }
  .mDetail1{
    text-align: center;
    font-size: 0.9rem;
    padding-top: 2rem;
  }
  .mDetail1>img{
    width: 6rem;
    height: 5rem;
  }
</style>
