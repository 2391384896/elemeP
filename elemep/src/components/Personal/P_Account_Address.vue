<template>
    <div id="address">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipToAccount" src="../../assets/lArrow.png" alt="">
        编辑地址
        <span @click="inOutX">{{bjToWc}}</span>
      </div>
      <!--新地址-->
      <div  class="newAddress" :class="{newAddress1:num==index-1}" v-for="(val,index) in arr" :key="index">
          <p v-for="(v,i) in val">{{v}}</p>
        <img v-if="xOut" src="../../assets/cha.png" alt="" @click="deleteDiv(index)">
      </div>
      <!--新增部分-->
      <div class="addAddress" @click="addAddress">
        新增地址
        <img src="../../assets/rArrowBlack.png" alt="">
      </div>
    </div>
</template>

<script>
  // import totalVue2 from "./serviceEvent"
    export default {
        name: "P_Account_Address",
      meta:{
        keepAlive:false
      },
      data(){
        return {
          xOut:false,
          isDelete:true,
          addressArr:[],
          bjToWc:'编辑',
          arr:[],
          num:0
        };
      },
      created(){
        this.arr.push(this.$route.query.newAdd);
        console.log(this.arr);
        this.totalVue.$on("chuan2",(p)=>{
          this.arr.push(p)
          console.log(this.arr);
        });
      },
      methods:{
        skipToAccount(){
          this.$router.push({path:'/account'});
        },
        inOutX(){
          this.xOut=!this.xOut;
          if(this.bjToWc=='完成'){
            this.bjToWc='编辑';
          }else{
            this.bjToWc='完成';
          }
        },
        addAddress(){
          this.$router.push({path:'/addAddress'});
        },
        deleteDiv(p){
            console.log(this.arr[p]);
             this.arr.splice(p,1)
          this.isDelete=false;
        }
      }

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #pHead{
    color:white;
    font-weight: bold;
    font-size: 1.1rem;
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
    top: 0.6rem;
    left: 0.2rem;
  }
  #pHead>span{
    position: absolute;
    top: 0.7rem;
    right: 0.3rem;
    font-weight: lighter;
    font-size: 0.8rem;
    color: whitesmoke;
  }
  
  .addAddress{
    margin-top: 0.5rem;
    position: relative;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-size: 1rem;
    color: #000;
    background: white;
  }
  .addAddress>img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
  }
  
  .newAddress{
    margin-top: 0.5rem;
    background: white;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-size: 0.9rem;
    font-style: italic;
    position: relative;
  }
  .newAddress>img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 1.1rem;
    right: 0.5rem;
  }
  .newAddress1{
    background: darkorchid;
  }
</style>
