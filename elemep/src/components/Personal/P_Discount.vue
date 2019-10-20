<template>
  <div id="pDiscount">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="pLeave" src="../../assets/lArrow.png" alt="">
      我的优惠
    </div>

    <!--第二部分-->
    <div id="profit">
      <van-tabs  title-active-color="blue"  color="blue"  swipeable>
          <van-tab :to="{path:'/discountHb'}" title="红包"></van-tab>
          <van-tab :to="{path:'/discountVoucher'}" title="商家代金券"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "P_Discount",
      data(){
          return {
active:1
          }
      },
      methods:{
          pLeave(){
            this.$router.push({path:'/phome'});
          }
      }
    }
</script>



<style scoped>
  #pDiscount{
    background: #f2f2f2;
    height: 100%;
    font-size: 1.1rem;
  }

  #pHead{
    color:white;
    font-weight: bold;
    width: 100%;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    font-size: 1rem;
    background: #26a2ff;
    /*position: relative;*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    left: 0.2rem;
    top: 0.5rem;
  }
  #profit{
    width: 100%;
    background: white;
    /*position: relative;*/
    position: fixed;
    top: 2rem;
    left: 0;
    z-index: 1;
  }
  #profit a:nth-child(1){
    position: absolute;
    top: 0.6rem;
    left: 2.5rem;
    color:black;
    text-decoration: none;
    font-size: 0.8rem;
  }
  #profit a:nth-child(2){
    position: absolute;
    top: 0.6rem;
    right: 2.5rem;
    color:black;
    text-decoration: none;
    font-size: 0.8rem;
  }

  .empty{
    clear: both;
  }
</style>

