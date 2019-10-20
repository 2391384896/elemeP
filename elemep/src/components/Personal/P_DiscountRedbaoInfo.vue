<template>
  <div id="redbaoInfo">
    <!--第一部分-->
    <div id="pHead" >
      <img @click="skipRedBao" src="../../assets/lArrow.png" alt="">
      红包说明
    </div>

    <!--第二部分-->
    <div id="pquestion">
      <p>
        <span class="question1">Q1: 怎么获得红包？</span>
        <span class="question2">通过邀请好友获得
          再下单返红包的商家下单获得
          抢微信朋友分享的红包获得。
</span>
      </p>
      <p>
        <span class="question1">Q2: 红包可以做什么？</span>
        <span class="question2">可以抵扣在线支付时的实际支付金额。</span>
      </p>
      <p>
        <span class="question1">Q3:红包的门槛金额按照什么金额计算？</span>
        <span class="question2">红包的门槛金额按照（选购菜品折后价+餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30元可用，只要选购的菜品现价（折后价）+餐盒费超过30，就可以使用红包</span>
      </p>
      <p>
        <span class="question1">Q4: 一个红包能拆开多次使用吗？</span>
        <span class="question2">不能，一个红包只能一次性使用，不能分开使用。</span>
      </p>
      <p>
        <span class="question1">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</span>
        <span class="question2">会的，订单无效后，红包会自动返回到您的账户里。</span>
      </p>
      <p>
        <span class="question1">Q6: 红包兑换怎样兑换成红包，怎样查看红包？</span>
        <span class="question2">在个人中心>我的红包>兑换红包,输入兑换码进行兑换。</span>
      </p>
      <p>
        <span class="question1">Q7: 邀请好友了，为什么没获得红包？</span>
        <span class="question2">先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</span>
      </p>
      <p>
        <span class="question1">Q8: 预订早餐，预订午餐的红包怎么使用？在哪里查询？</span>
        <span class="question2">预订早餐、午餐的红包暂时不支持直接点击外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐，预订午餐时使用。
          预订早午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心查找预订早餐，午餐的红包。</span>
      </p>
      <p>
        <span class="question1">Q9: 互斥红包怎么使用？</span>
        <span class="question2">互斥红包不与其他优惠活动（包含但不限于：新用户专享、满x元减x元、满x元赠x元、）同时使用。</span>
      </p>
      <p>
        <span class="question1">Q10: 返红包活动，红包领取规则是什么？</span>
        <span class="question2">同一个手机号一天限领取三个。
        同一个注册用户一天限领取三个。
        注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。
        红包的使用周期为一周，自红包发放的第二天开始计算。
        未收到红包短信的用户注意查看手机里的拦截短信。
        有任何问题请拨打客服电话：10105757</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "P_DiscountRedbaoInfo",
      methods:{
        skipRedBao(){
          this.$router.push({path:'/discountHb'});
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #redbaoInfo{
    font-size: 1.1rem;
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
  .question1{
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0.6rem;
  }
  .question2{
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem;
    display: inline-block;
  }
  #pquestion{
    padding-bottom: 0.8rem;
    font-size: 0.6rem;
  }
</style>
