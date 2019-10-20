<template>
    <div class="account">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipHome" src="../../assets/lArrow.png" alt="">
       账户信息
      </div>
      <!--第二部分-->
      <div class="accountTwo">
        <span>头像</span>
        <div class="accountTwoone">
          <img src="../../assets/tx1.png" alt="">
          <img @click="uploadfail" src="../../assets/rArrowBlack.png" alt="">
        </div>
      </div>
      <!--第三部分-->

      <div class="accountThree" @click="accounChangeSkip">
        <span>用户名</span>
        <span>{{yonghuming}}</span>
        <img src="../../assets/rArrowBlack.png" alt="">
        <div class="empty"></div>
      </div>

      <div class="accountFour" @click="addressSh">
        <span>收货地址</span>
        <img src="../../assets/rArrowBlack.png" alt="">
      </div>

      <div class="accountFive">账号绑定</div>

      <div class="accountSix" @click="phoneBind">
        <img src="../../assets/shouji.png" alt="">
        <span>手机</span>
        <img src="../../assets/rArrowBlack.png" alt="">
      </div>

      <div class="accountFive">安全设置</div>

      <div class="accountThree" @click="changePassword">
        <span>登录密码</span>
        <span>修改</span>
        <img src="../../assets/rArrowBlack.png" alt="">
      </div>

      <div class="cashPut3">
        <div @click="outLogin">退出登录</div>
      </div>

    </div>
</template>

<script>
  import totalVue1 from './serviceEvent'
     export default {
        name: "P_AccountInfo",
      data(){
        return {
          yonghuming:''
        }
      },
      created(){
        totalVue1.$on("accountMsg",this.getAccountMsg);
      },
      methods:{
        getAccountMsg(p){
          this.yonghuming=p;
        },
        skipHome(){
          this.$router.push({path:'/phome'});
        },
        changePassword(){
          this.$router.push({path:'/Treset'});
        },
        accounChangeSkip(){
          this.$router.push({path:'/accountChange'});
        },
        phoneBind(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:transform(),
            message: '请在手机APP中设置'
          });
        },
        addressSh(){
          this.$router.push({path:'/accountAddress'});
        },
        outLogin(){
          this.$dialog.confirm({
            width:280,
            overlay:false,
            // transition:'name:fade',
            message: '确定推出登录吗？'
          }).then(()=>{
            this.$router.push({path:'/pHome',query:{zhanghumingzi:'登录/注册'}});
          }).catch(()=>{
            // this.$router.push({path:'/account'});
          });
        },
        uploadfail(){
          this.$dialog.alert({
            width:280,
            overlay:false,
            // transition:'name:fade',
            message: '暂不开放上传功能'
          });
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

  .accountTwo{
    font-size: 1rem;
    color: #000;
    margin-top: 0.5rem;
    background: white;
    border-top: 0.02rem solid #ccc;
    padding: 0.8rem 0.3rem 0.8rem 0.3rem;
    position: relative;
  }

  .accountTwoone{
    display: inline-block;
    vertical-align: middle;
  }
  .accountTwoone img:nth-child(1){
    width: 3rem;
    height: 3rem;
    margin-left: 11rem;
  }
  .accountTwoone img:nth-child(2){
    width: 1rem;
    height: 1rem;
    margin-left: 0.3rem;
    vertical-align: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 2rem;
  }

  .accountThree{
    padding: 0.6rem 0.1rem 0.6rem 0.2rem;
    background: white;
    font-size: 0.9rem;
    color: #000;
    border-top: 0.02rem solid #ccc;
    position: relative;
  }
  .accountThree span:nth-child(2){

    float: right;
    margin-right: 2rem;
  }
  .accountThree>img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 0.6rem;
  }

  .accountFour{
    position: relative;
    padding: 0.6rem 0.1rem 0.6rem 0.2rem;
    background: white;
    font-size: 0.9rem;
    color: #000;
    border-top: 0.02rem solid #ccc;
  }
  .accountFour>img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 0.6rem;
  }

  .accountFive{
    padding: 0.6rem 0 0.6rem 0.3rem;
    border-top: 0.02rem solid #ccc;
    font-size: 0.9rem;
  }

  .accountSix{
    padding: 0.6rem 0 0.6rem 0.3rem;
    background: white;
    font-size: 0.9rem;
    position: relative;
  }
  .accountSix img:nth-child(1){
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
  .accountSix img:nth-child(3){
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 0.6rem;
  }
  .cashPut3{
    margin: 1rem 0.75rem;
    /*background: limegreen;*/
    background: #d8584a;
    text-align: center;
    color: white;
    font-size: 0.9rem;
    border-radius: 0.2rem;
  }
  .cashPut3>div{
    padding: 0.6rem 0;
  }

  /*.fade-enter-active,.fade-leave-active{*/
    /*transition:width 2s;*/
  /*}*/
  /*.fade-enter,.fade-leave-to{*/
    /*width: 260px;*/
  /*}*/

  .empty{
    clear: both;
  }
</style>
