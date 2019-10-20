<template>
    <div id="vipCash">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipVipCenter" src="../../assets/lArrow.png" alt="">
        兑换会员
      </div>
      <!--第二部分-->
      <div class="cashvipSecond">成功兑换后将关联到当前账号：{{yonghuming}}</div>

      <!--第三部分-->
      <div class="cashPut1">
        <input type="text" v-model="p1Value" placeholder="请输入10位卡号" @input="p1Focus" maxlength="10">
      </div>
      <div class="cashPut2">
        <input type="text" v-model="p2Value" maxlength="6" placeholder="请输入6位卡密" @input="p1Focus">
      </div>

      <div class="cashPut3" :style="{background:isChangeColor}">
        <div @click="cashSuccess">兑换</div>
      </div>

      <!--第四部分-->
      <div class="cashFour">
        <div class="cashFour1">————温馨提示————</div>
        <div class="cashFour2">
          <p>新兑换的会员服务，权益以【会员说明】为准。</p>
          <p>月卡：30次减免配送费。</p>
          <p>季卡：90次减免配送费。</p>
          <p>年卡：360次减免配送费。</p>
          <p>*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
      </div>




    </div>
</template>

<script>
    export default {
        name: "vipCenter_Cash",
      data(){
          return {
            yonghuming:'',
            p1Value:'',
            p2Value:'',
            isChangeColor:''
          }
      },
      methods:{
        p1Focus(){
          // console.log("keyilama");
          this.isChangeColor='lightgrey';
          if((/^\d{6}$/).test(this.p2Value)){
            this.isChangeColor='lightgrey';
            if(((/^\d{10}$/).test(this.p1Value))){
              this.isChangeColor='limegreen';
            }else{
              this.isChangeColor='lightgrey';
            }
          }
        },
        cashSuccess(){
          if(this.isChangeColor=='limegreen'){
            this.$dialog.alert({
              width:280,
              overlay:false,
              // transition:transform(),
              message: '无效的兑换卡密'
            });
          }

        },
        skipVipCenter(){
          this.$router.push({path:'/vipCenter'});
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
      font-size: 1rem;
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

  .cashvipSecond{
    font-size: 0.9rem;
    padding: 0.5rem 0;
    margin-left: 0.5rem;
  }
  .cashvipSecond>span{
    color: black;
  }


  .cashPut1 input:nth-child(1){
    width: 18.25rem;
    height: 2.2rem;
    border: 0 ;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }
  .cashPut2 input:nth-child(1){
    width: 18.25rem;
    height: 2.2rem;
    border: 0 ;
    border-radius: 0.2rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
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
    padding: 0.6rem 0;
  }

  .cashFour{
    padding-top: 1rem;
    color: #aaa;
  }
  .cashFour1{
    text-align: center;
    font-size: 1rem;

  }
  .cashFour2{
    margin: 1rem 0 0 1.6rem;
    font-size: 0.8rem;
  }
</style>
