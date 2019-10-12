<template>
  <div id="zong">


    <div class="shopcart">
      <img src="../../assets/img_t/left.png" class="left" alt="">
      <p>购物车界面</p>
      <img src="../../assets/img_t/right.png" class="right" alt="">
    </div>
    <div class="qiehuan">
    <span class="shangpin" >商品</span>
    <span class="pingjia" >评价</span>
    </div>
    <div class="container-fluid">
         <router-link  class="zuo" v-for="(p,i) in datas" :key="i">{{p.name}}</router-link>

    </div>
    </div>
</template>

<script>
    export default {
        name: "Tshop",
      data(){
          return{
            datas:[]
          }
      },
      created(){
          this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1").then((p)=>{
            this.datas=p.data;
            console.log(this.datas)
          })
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  .shopcart{
    width: 100%;
    height: 5rem;
    background: palegreen;

  }
  .left{
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    width: 1rem;
  }
  .right{
    position: absolute;
    right: 0.2rem;
    width: 1rem;
  }
  .qiehuan{
    position: relative;
    width: 100%;
    height: 3rem;

  }
  .shangpin{
    position: absolute;
    text-align: center;
    top: 1rem;
    left: 3rem;
    color: blue;
    border-bottom: 0.1rem solid blue;
    padding-bottom: 0.2rem;
  }
  .pingjia{
    top: 1rem;
    position: absolute;
    text-align: center;
    padding-bottom: 0.2rem;
    right: 3rem;
  }
  .zuo{
    border: 1px solid #ededed;
    border-left: 0.15rem solid #3190e8;
    height: 3rem;
    line-height: 3rem;
    width: 4rem;
    text-align: center;
    font-size: 0.66rem;
    overflow: hidden;
  }
</style>
