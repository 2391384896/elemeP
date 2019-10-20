<template>
    <div id="wrap">
    <div id="toubu">
      <router-link to="/Tqrdd">
      <img id="toubu-1" src="../../assets/img_t/zuojian.png" alt="">
      </router-link>
      <div id="toubu-2">选择发票抬头</div>

    </div>
      <div id="zhong">
        <span>不需要发票</span>
        <img class="xz" @click="xz1"  src="../../assets/img_t/dui-2.png" alt="">
        <img  v-if="code" @click="xz2" class="xz"  src="../../assets/img_t/dui-1.png" alt="">
        <router-link to="/Tqrdd">
        <div id="qd">确定</div>
        </router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Tfptt",
      data(){
          return{
           code:false,
          }

      },
      methods:{
        xz1(){
          this.code=!this.code
        },
        xz2(){
          this.code=!this.code
        }
      }
    }
</script>

<style scoped>

#toubu{
  height: 2.2rem;
  line-height: 2.2rem;
  background: #3190e8;

  position: relative;
}
#toubu-1{
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
}
  #toubu-2{
    font-size: .9rem;
    color: #fff;
    text-align: center;
    font-weight: 700;


  }
  #zhong{

    padding: 0 0.7rem;
    background: white;
   height: 2.5rem;
    line-height: 2.5rem;
    margin-top: 0.4rem;
    position: relative;
  }
#zhong span{
  font-size: .85rem;
  color: #333;
}
  .xz{
    position: absolute;
    right: 0.7rem;
    top: 0.8rem;
  }
  #qd{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
  }
</style>
