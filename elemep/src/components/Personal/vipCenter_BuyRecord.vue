<template>
  <div id="buyRecord">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="skipVipCenter" src="../../assets/lArrow.png" alt="">
      购买记录
    </div>
    <!--第二部分-->
    <div class="buyrecordSecond">
      <img src="../../assets/wujl.png" alt="">
      <p>没有购买记录</p>
    </div>
    
  </div>
</template>

<script>
    export default {
        name: "vipCenter_BuyRecord",
      methods:{
        skipVipCenter(){
          this.$router.push({path:'/vipCenter'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #buyRecord{
    background: white;
    height: 33.35rem;
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

   .buyrecordSecond>img{
     width: 5rem;
     height: 5rem;
   }
  .buyrecordSecond{
    font-size: 0.9rem;
    padding-top: 5rem;
    color: #aaa;
    text-align: center;
  }
</style>
