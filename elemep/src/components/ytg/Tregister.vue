<template>
  <div id="wrap">
    <div id="top">

        <img id="back" src="../../assets/img_t/zuojian.png" @click="back1">
            <p>密码登录</p>
    </div>
    <div id="wrap1">
      <input v-model="username" placeholder="账号" >

      <input :type="show" v-model="password" placeholder="密码" >
      <!--开关用了vant插件-->
      <van-switch id="kg" v-model="checked" @change="kaiguan"/>
      <div id="captcha">
        <input maxlength="4" v-model="codeNumber" placeholder="验证码" >
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
      <div id="text2">
        <p>温馨提示:未注册过的账号,登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录.</p>
      </div>
    </div>
    <button @click="login()">登录</button>

    <router-link to="/Treset" id="reset1">重置密码？</router-link>
    <div v-if="ts" class="animated bounceIn" id="tankuang">
      <img src="../../assets/img_t/cuowu.png" alt="">
      <p>{{tishi}}</p>
      <p @click="qd">确定</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tdenglu",
    data() {
      return {
        code: "", //存储验证码图片
        username: "",
        password: "",
        codeNumber: "", //存储验证码输入框的值
        show:"type",
        checked: true,
        tishi:"请输入手机号/邮箱/用户名",
        ts:false
      };
    },
    created() {
      //首先，获取验证码
      this.getCode();
    },
    methods: {
      getCode() {
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((p)=>{
          console.log(p.data)
          this.code=p.data.code;


        })

      },
      qd(){
        this.ts=false
      },
      back1(){

          history.go(-1)

      },
      kaiguan(){
          if(this.checked){
            this.show="type"
          }else {
            this.show="password";
          }

        // this.checked=!this.checked;
        // if(this.checked=="true"){
        //   console.log(1)
        //   this.show="type"
        // }else{
        //   this.show="password"
        //   console.log(2)
        // }
      },

      login(){
        console.log(this.username)
        if(this.username==""){
        this.ts=true;
        }else if(this.password==""){
          this.tishi="请输入正确的密码"
          this.ts=true;
        }else if(this.codeNumber==""){
          this.tishi="请输入验证码"
          this.ts=true;
        }

        localStorage.setItem("zh",this.username)

         // this.$router.push({
         //   path:"/Woshishi",
         //
         // })

        // if(username.indexOf(" ")!=-1&&password.indexOf(" ")!=-1){
        //   this.$router.push("/")
        // }else {
        //    alert("请输入正确的账号密码")
        // }

      }

    }
  };
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  #wrap {
    width: 100%;
    background-color: white;
    overflow: hidden;
  }
  #top {
    height: 1.95rem;
    background-color: #3190e8;
    position: relative;
  }
  #back{
    height: 0.8rem;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #top p {
    font-size: 0.7rem;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #wrap1 {
    margin-top: 15px;
  }
  #wrap1 input {
    margin-top:-0.8rem;
    width: 100%;
    height: 3rem;
    border: 0.3rem solid rgb(244, 244, 244);
    font-size: 1rem;
    padding-left: 0.5rem;
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
  #text {
    position: absolute;
    right: 2%;
    top: 5%;
    font-size: 0.15rem;
  }
  #text p:nth-child(2) {
    color: blue;
  }
  #text2 {
    font-size: 0.6rem;
    color: red;
  }
  #text2 p {
    margin-left: 0.6rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  #wrap > button {
    font-size: 0.6rem;
    width: 95%;
    margin-left: 0.5rem;
    border-radius: 0.3rem;
    height: 50px;
    background-color: #4cd964;
    color: white;
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
  #reset1 {
    color: #3b95e9;
    font-size: 0.15rem;
    margin-top: 5px;
    float: right;
  }
  #cash{
    margin-left: 12rem;
    margin-top:-1.35rem;

  }
  #kg{
    position: absolute;
    right: 0;
    top: 5.5rem;
  }
</style>
