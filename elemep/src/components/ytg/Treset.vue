<template>
    <div id="cz">
     <div id="toubu">
       <p @click="bay">
       <img src="../../assets/img_t/zuojian.png" alt="">
       <p>
       <div  id="czmm">
         重置密码
       </div>
     </div>
     <div id="wrap1">
       <input type="text" v-model="zh" placeholder="账号"><br>
       <input type="text" v-model="jmm" placeholder="旧密码"><br>
       <input type="text" v-model="xmm" placeholder="请输入新密码"><br>
       <input type="text" v-model="qrmm" placeholder="请确认密码"><br>
       <div id="captcha">
         <input v-model="yzm" placeholder="验证码" type="text">
         <img :src="code" alt>
         <div id="text">
           <p>看不清</p>
           <p @click="getCode()">换一张</p>
         </div>
       </div>
     </div>
      <button @click="login()">确认修改</button>
      <div v-if="ts" class="animated bounceIn" id="tankuang">
        <img src="../../assets/img_t/cuowu.png" alt="">
        <p>{{tishi}}</p>
        <p @click="qd2">确定</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Tczmm",
        data(){
          return{
            code:"",
            zh:"",
            jmm:"",
            xmm:"",
            qrmm:"",
            yzm:"",
            ts:false,
            tishi:"请输入账号"
          }


        },
      created(){
          this.getCode()
      },
      methods:{
        getCode(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((p)=>{
            this.code=p.data.code;
          })
        },
        bay(){
          history.go(-1)
        },
        login(){
          if(this.zh==""){
            console.log(this.zh)
            console.log(111)
           this.ts=true;
        }else if(this.jmm==""){
      this.tishi="请输入正确的密码"
      this.ts=true;
    }else if(this.xmm==""){
      this.tishi="请输入正确的密码"
      this.ts=true;
    }else if(this.qrmm==""){
            this.tishi="请输入正确的密码"
            this.ts=true;
          }else if(this.yzm==""){
            this.tishi="请输入正确的验证码"
            this.ts=true;
          }else if(this.qrmm!=this.xmm) {
            this.tishi="两次密码输入不一致"
            this.ts=true;
          }else{
            this.tishi="修改成功"
            this.ts=true;
          }

    },
        qd2(){
          this.ts=false
        },
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  body, html {
    background: #f5f5f5!important;
  }
  #cz{
    width: 100%;
    height: 100%;
  }
#toubu{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.2rem;
}
  #toubu img{
    height: 1rem;
    margin-left: 0.4rem;
    margin-top: 0.6rem;
  }
  #czmm{
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: 700;
    color: white;
  }
#wrap1{
  margin-top: 2.2rem;
width: 100%;
}
  #wrap1>input:nth-child(1){
    height: 1.6rem;
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
  input{
    /*margin-top:-0.8rem;*/
    border-top: 0.5rem solid white;
    border-bottom: 1px solid #f1f1f1;
    border-left: 0;
    border-right: 0;
    font-size: 0.7rem;
    padding-left:10%;
    width: 90%;
    height: 2rem;
  }
button {
  font-size: 0.6rem;
  width: 90%;
  margin-top: 0.5rem;
  margin-left: 1rem;
  border-radius: 0.3rem;
  height: 2rem;
  background-color: rgb(76, 217, 100);
  color: white;
}
  #captcha {
    width: 100%;
    height: 50px;
    position: relative;
  }
  #captcha img {
    position: absolute;
    right: 15%;
    top: 20%;
  }
  #text{
    position: relative;

  }
  #text>p:nth-child(1){
    position: absolute;
    right: 0.2rem;
    top: -2rem;
    font-size: 0.6rem;
  }
  #text>p:nth-child(2){
    position: absolute;
    right: 0.2rem;
    top: -1.2rem;
    font-size: 0.6rem;
    color: #3b95e9;
  }
  #tankuang{
    position: absolute;
    width: 14rem;
    background: white;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -7rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    overflow: hidden;
  }
  #tankuang>p:nth-child(2){
    margin-top: 0.8rem;
    font-size: 0.8rem;
    text-align: center;

  }
  #tankuang>p:nth-child(3){
    margin-top: 0.8rem;
    width: 100%;
    background: #4cd964;
    line-height: 2rem;
    color: white;
    text-align: center;
  }
</style>
