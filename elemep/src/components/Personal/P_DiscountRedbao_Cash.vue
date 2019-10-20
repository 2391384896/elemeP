<template>
    <div class="disRHcash">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipRedBao" src="../../assets/lArrow.png" alt="">
        兑换红包
      </div>

      <!--第二部分-->
      <div id="cashPut">
        <div class="cashPut1">
          <input type="text" v-model="p1Value" placeholder="请输入兑换码" @input="p1Focus">
        </div>
        <div class="cashPut2">
          <input type="text" v-model="p2Value" maxlength="4" placeholder="验证码" @input="p1Focus">
          <div class="cashP2">
            <img :src="code1" alt="">
            <span @click="kbq">看不清</span>
            <p @click="kbq">换一张</p>
            <div class="empty"></div>
          </div>
          <div class="empty"></div>
        </div>
        <div class="cashPut3" :style="{background:isChangeColor}">
          <div @click="cashSuccess">兑换</div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbao_Cash",
      data(){
          return {
            code1:'',
            p1Value:'',
            p2Value:'',
            isChangeColor:'',
            arr1:[],
            arr2:[1,2,2]
          }
      },
      created(){
       this.kbq();
      },
      methods:{
        skipRedBao(){
          this.$router.push({path:'/discountHb'});
        },
        kbq(){
         this.axios.post("https://elm.cangdu.org/v1/captchas").then((p)=>{
           console.log(p);
           this.code1=p.data.code;
         });
          },
        p1Focus(){
          console.log("keyilama");
          this.isChangeColor='lightgrey';
          if((/^\w{4}$/).test(this.p2Value)){
              this.isChangeColor='lightgrey';
            if(((/^\d{1,}$/).test(this.p1Value))){
              this.isChangeColor='limegreen';
          }else{
              this.isChangeColor='lightgrey';
            }
          }
        },
        cashSuccess(){
          this.kbq();
          if(this.isChangeColor=='limegreen'){
            // this.axios.post("https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange").then((p)=>{
            //   console.log(p);
            // });
            this.$dialog.alert({
              width:280,
              overlay:false,
              // transition:transform(),
              message: '无效的兑换码'
            });
          }

        }
      }
    }
</script>

<style scoped>
  .disRHcash{
    font-size: 1.1rem;
  }

  #pHead{
    color:white;
    width: 100%;
    padding: 0.4rem 0 0.4rem 0;
    text-align: center;
    background: #26a2ff;
    position: relative;
    font-weight: bold;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }

  #cashPut{
    padding: 1rem 0;
  }
  .cashPut1 input:nth-child(1){
    width: 17rem;
    height: 2.2rem;
    border: 0 ;
    margin-bottom: 1rem;
    border-radius: 0.2rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }
  .cashPut1,.cashPut2{
    margin-left: 0.8rem;
  }
  .cashPut2 input:nth-child(1){
    width: 10rem;
    height: 2.2rem;
    border: 0 ;
    border-radius: 0.2rem;
    float: left;
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }
 .cashP2{
   float: right;
   width: 6rem;
   height: 2.2rem;
   background: white;
   font-size: 0.7rem;
   margin-right: 0.5rem;
   border-radius: 0.2rem;
   position: relative;
 }
  .cashP2>img{
    width: 3rem;
    height: 2rem;
  }
  .cashP2>span{
 position: absolute;
    top: 0.2rem;
    right: 0.1rem;
 }
  .cashP2>p{
    position: absolute;
    top: 0.5rem;
    right: 0.1rem;
    color: blue;
  }
  .cashPut3{
    margin: 1rem 0.75rem;
    /*background: limegreen;*/
    background: lightgrey;
    text-align: center;
    color: white;
    font-size: 0.9rem;
    border-radius: 0.2rem;
  }
  .cashPut3>div{
    padding: 0.4rem;
  }
  .empty{
    clear: both;
  }
</style>
