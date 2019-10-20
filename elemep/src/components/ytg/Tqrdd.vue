<template>

    <div id="wrap">
      <div id="toubu">
        <router-link :to="{path:'/lstore/Lrestaurant'}">
        <img  id="zj" src="../../assets/img_t/zuojian.png"  alt="">
        </router-link>
        <span id="qr">确认订单</span>
        <router-link id="dl" to="/Tregister">登陆|注册</router-link>
      </div>
      <router-link to="/Txzdz">
      <div id="shouhuo">
        <img src="../../assets/img_t/dizhi.png" alt="">
        <span id="shouhuo-2">请添加一个收获地址</span>
        <img src="../../assets/img_t/youjian.png" alt="">
      </div>
      </router-link>
      <div id="sd">
        <span id="sd-1">送达时间</span>
        <span id="sd-2">送达时间|预计09:04</span>
        <sapn id="sd-3">蜂鸟专送</sapn>
      </div>
      <div id="zf">
        <div id="fs" @click="fs">
         <span id="zf-1">支付方式</span>
          <span id="zf-2">在线支付</span>
          <img id="zf-3" src="../../assets/img_t/youjian.png" alt="">
        </div>
        <div id="hb">
        <span id="hb-1">红包</span>
          <span id="hb-2">暂时只在饿了么APP中支持</span>
        </div>
      </div>
       <div id="sp">
         <img :src="code" alt="">
         <span>传来的数据</span>
       </div>
      <div id="dj">
        <span id="dj-1">1231</span>
        <span id="dj-2">x1</span>
        <span id="dj-3">$20</span>
      </div>
      <div id="canhe">
        <span id="canhe-1">餐盒</span>
        <span id="canhe-2">$8770</span>
      </div>
      <div id="peisong">
        <span id="peisong-1">配送费</span>
        <span id="peisong-2">$4</span>
      </div>
      <div id="dingdan">
        <span id="dingdan-1">订单$8794</span>
        <span id="dingdan-2">待支付</span>
        <span id="dingdan-3">$8794</span>

      </div>
      <div id="beizhu">
        <router-link to="/Tremarks">
        <div id="beizhu-1">
          <span id="beizhu-1-1">订单备注</span>
          <span id="beizhu-1-2">口味\偏好等</span>
          <img id="beizhu-1-3" src="../../assets/img_t/youjian.png" alt="">
        </div>
        </router-link>
        <router-link to="/Tfptt">
        <div id="beizhu-2">
          <span id="beizhu-2-1">发票抬头</span>
          <span id="beizhu-2-2">不与要开发票</span>
          <img id="beizhu-2-3" src="../../assets/img_t/youjian.png" alt="">
        </div>
        </router-link>
      </div>
      <div id="dibu">
        <p id="dibu-1">待支付$8794</p>
        <p id="dibu-2">确认下单</p>
      </div>
      <div v-if="zffs" class="huabu" @click="fs">
      <div id="zffs-1" v-if="zffs" >
       <p id="fs-2">支付方式</p>
        <span id="zffs-1-2">货到付款（商家不支持货到付款）</span>
        <img id="dui-2" src="../../assets/img_t/dui-2.png" alt=""><br>
        <span id="zffs-1-3">在线支付</span>
        <img id="dui-1" src="../../assets/img_t/dui-1.png" alt="">
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Tqrdd",
      data(){
          return{
            code:"",
            zffs:false
          }
      },
      methods:{
        back(){
          history.go(-1)
        },
        // wrap1(){
        //   this.zffs=false
        // },
        fs(){
          this.zffs=!this.zffs
          if(this.zffs==false){

          }
        }

      },

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;

  }
  body, html {

    width: 100%;
    margin: 0;
    padding: 0;
  }
  .huabu{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 3;
  }
  #wrap{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    height: 30rem;
    overflow: auto;

  }
#toubu{
background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  z-index: 10;
}
  #zj{

    margin-left: 0.5rem;
  }
  #qr{
    font-size: 0.9rem;
    color: #fff;
    margin-left: 30%;
    font-weight: 700;

  }
#dl{
  color: white;
  margin-left: 3rem;
  font-size: 0.75rem;
}
  #shouhuo{
    margin-top: 2.2rem;
    min-height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR…iSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
  }
  #sd{
    border-left: .2rem solid #3190e8;
    height: 4rem;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  #sd-1{
    position: absolute;
    font-size: .8rem;
    color: #333;
    font-weight: 700;
    left: .3rem;
    top: 1.6rem;
  }
  #sd-2{
    position: absolute;
    font-size: 0.7rem;
    color: #3190e8;
    right: 0.7rem;
    top:0.7rem;
  }
  #sd-3{
    position: absolute;
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
    right: 0.7rem;
    top: 1.8rem;
  }
  #zf{
    width: 100%;
    height: 4rem;
    margin-top: 0.4rem;
    justify-content: space-between;
    align-items: center;
    background: white;

  }
  #fs{
    position: relative;
    width: 100%;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 0.025rem solid #f5f5f5;
  }

  #zf-1{
    font-size: 0.7rem;
    color: #666;
    margin-left: 0.5rem;
  }
  #zf-2{
    font-size: 0.6rem;
    color: #aaa;
    margin-left: 10rem;

  }
  #zf-3{
    position: absolute;
    top: 0.65rem;
  }
  #hb{
    position: relative;
    height: 2rem;
    line-height: 2rem;
  }
  #hb-1{
    font-size: 0.7rem;
    color: #aaa;
    margin-left: 0.5rem;
  }
  #hb-2{
    font-size: 0.6rem;
    color: #aaa;
    margin-left:7rem ;
  }
  #shouhuo-2{
    font-size: .7rem;
    color: #333;
    margin-left: -5rem;
  }
  #sp{
    height: 2.5rem;
    line-height: 2.5rem;
    background: white;
    margin-top: 0.4rem;
    font-size: .8rem;
    color: #333;
  }
  #dj{
    height: 2rem;
    line-height: 2rem;
    background: white;
    margin-top: 0.05rem;
  }
  #dj-1{
    font-size: 0.6rem;
    margin-left:0.7rem ;
  }
  #dj-2{
    font-size: 0.6rem;
    color: red;
    margin-left: 11rem;
    font-size: 0.6rem;
  }
  #dj-3{
    font-size: 0.6rem;
    margin-left: 2rem;
  }
  #canhe{
    height: 2rem;
    line-height: 2rem;
    background: white;
  }
  #canhe-1{
    font-size: 0.6rem;
    margin-left:0.7rem ;
  }
  #canhe-2{
    font-size: 0.6rem;
    margin-left: 13.3rem;
  }
  #peisong{
    height: 2rem;
    line-height: 2rem;
    background: white;
  }
  #peisong-1{
    font-size: 0.6rem;
    margin-left:0.7rem ;
  }
  #peisong-2{
    font-size: 0.6rem;
    margin-left: 13.6rem;
  }
  #dingdan{
    position: relative;
    margin-top: 0.05rem;
    height: 4rem;
    line-height: 2rem;
    background: white;
  }
  #dingdan-1{
    position: absolute;
    font-size: 0.6rem;
    left: 0.5rem;
  }
  #dingdan-2{
    position: absolute;
    font-size: 0.6rem;
    color: #f60;
    right: 3rem;
  }
  #dingdan-3{
    position: absolute;
    font-size: 0.6rem;
    color: #f60;
    right: 3rem;
    top: 2rem;
  }
  #beizhu-1{
    position: relative;
    width: 100%;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 0.025rem solid #f5f5f5;
    background: white;
    margin-top: 0.4rem;
  }
#beizhu-1-1{
  font-size: 0.7rem;
  color: #666;
  margin-left: 0.5rem;
}
  #beizhu-1-2{
    font-size: 0.6rem;
    color: #aaa;
    margin-left: 10rem;
  }
  #beizhu-1-3{
    position: absolute;
    top: 0.65rem;
  }
  #beizhu-2{
    position: relative;
    width: 100%;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 0.025rem solid #f5f5f5;
    background: white;

    margin-bottom: 3rem;

  }
  #beizhu-2-1{
    font-size: 0.7rem;
    color: #666;
    margin-left: 0.5rem;
  }
  #beizhu-2-2{
    font-size: 0.6rem;
    color: #aaa;
    margin-left: 10rem;
  }
  #beizhu-2-3{
    position: absolute;
    top: 0.65rem;
  }
  #dibu{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
  }
  #dibu-1{
    background-color: #3c3c3c;
    flex: 5;
    padding-left: .7rem;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
  }
  #dibu-2{
    flex: 2;
    background-color: #56d176;
    text-align: center;line-height: 2rem;
    font-size: .75rem;
    color: #fff;

  }
  #zffs-1{
    position: relative;
    min-height: 10rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 204;
  }
  #fs-2{
    background-color: #fafafa;
    font-size: .7rem;
    color: #333;
    text-align: center;
    line-height: 2rem;
  }
  #zffs-1-2{
    font-size: .7rem;
    color: #ccc;
    padding: 0 .7rem;
    line-height: 2.5rem;
    align-items: center;
  }
  #dui-2{
    position: absolute;
    right: 0.7rem;
    top: 2.8rem;

  }
  #zffs-1-3{
    font-size: .7rem;
    padding: 0 .7rem;
    line-height: 2.5rem;
    align-items: center;
  }
  #dui-1{
    position: absolute;
    right: 0.7rem;
    top: 5.5rem;
  }
</style>
