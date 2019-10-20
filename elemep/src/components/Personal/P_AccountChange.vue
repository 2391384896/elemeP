<template>
    <div id="accountChange">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipToAccount" src="../../assets/lArrow.png" alt="">
        修改用户名
      </div>

      <!--第二部分-->
      <div class="cashPut1">
        <input @input="bringIn" :style="{border:isInputColor}" type="text" v-model="p1Value" placeholder="请输入用户名"  minlength="5" maxlength="24">
        </div>
      <div class="onlyChange">
        <p v-model="pContent" :style="{color:isPColor}">用户名只能修改一次（5-24字符之间）</p>
      </div>

      <div class="cashPut3" :style="{background:isChangeColor}">
        <div @click="changeFiled">确认修改</div>
      </div>

    </div>
</template>

<script>
  import totalVue1 from './serviceEvent'
    export default {
        name: "P_AccountChange",
      data(){
        return {
          pContent:'',
          p1Value:'',
          isInputColor:'',
          isPColor:'',
          isChangeColor:''
        }
      },
      methods:{
        skipToAccount(){
          this.$router.push({path:'/account'});
        },
        bringIn(){
          this.pContent="用户名长度在5到24位之间";
          this.isInputColor='0.02rem solid red';
          this.isPColor='red';
          this.isChangeColor='lightgrey';
          if(/^\w{5,24}$/.test(this.p1Value)){
            this.isChangeColor='#3199e8';
          }

        },
        changeFiled(){
          if( this.isChangeColor=='#3199e8'){
            this.$router.push({path:'/pHome'});
            totalVue1.$emit("accountMsg",this.p1Value);
          }
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
    top: 0.5rem;
    left: 0.2rem;
  }
  .cashPut3{
    margin: 1rem 0.75rem;
    /*background: limegreen;*/
    background: lightgrey;
    text-align: center;
    color: white;
    font-size: 0.9rem;
  }
  .cashPut3>div{
    padding: 0.6rem 0;
  }

  .cashPut1{
    text-align: center;
    margin: 0.5rem;
  }
  .cashPut1 input:nth-child(1){
    width: 16.5rem;
    height: 2rem;
    border: 0.01rem solid  black;
    border-radius: 0.2rem;
    margin-bottom: 0.1rem;
    padding-bottom: 0.1rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
    background: #f5f5f5;
  }
  .onlyChange>p{
    color: #aaa;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
</style>
