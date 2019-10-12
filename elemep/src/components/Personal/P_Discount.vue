<template>
  <div id="pDiscount">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="pLeave" src="../../assets/lArrow.png" alt="">
      我的优惠
    </div>

    <!--第二部分-->
    <div id="profit">
      <router-link :class="{active:shows==1}" @click="changeColor1()" :to="{path:'/redbao'}">红包</router-link>
      <router-link :class="{active:shows==2}" @click="changeColor2()" :to="{path:'/voucher'}">商家代金券</router-link>
    </div>
    <!--第三部分-->
    <router-view></router-view>

  </div>

</template>

<script>
    export default {
        name: "P_Discount",
      data(){
          return {

          }
      },
      methods:{
          changeColor1(){
            this.shows=1;
          },
        changeColor2(){
          this.shows=2;
        }
      }
    }
</script>

<style scoped>
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
  #profit{
    width: 100%;
    padding: 1.3rem 0;
    background: white;
    position: relative;
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
  .active{
    color: blue;
  }
  .empty{
    clear: both;
  }
</style>
