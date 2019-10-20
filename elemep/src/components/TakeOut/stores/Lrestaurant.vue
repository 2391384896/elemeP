<template>
  <div id="rest">
    <div class="LleftNav" >
      <ul class="Lleft">
        <li v-for="(v, i1) in isde">
          <a :href="'#L'+v.id" :key="i1" :class="{'Lbtn_d' :num==i1+1}" @click="Ldianj(i1+1)">{{v.name}}</a>
        </li>
      </ul>
      <div class="Lright">
        <div v-for="(v,i1) in isde" :key="i1">
          <div :id="psnt+v.id" >
            <div class="Lright_title">
              <div>
                <p class="Lleftone">{{v.name}}</p>
                <p class="Llefttwo">{{v.description}}</p>
              </div>
              <div style="position: relative">
                <img src="../../../../static/bottom/dian.png" @click="Ais(i1+1)"/>
                <div class="Lis" :class="{Llink:isAdd ,'Llinks' :sum ==i1+1}">
                  {{v.description}}
                </div>
              </div>
            </div>

            <div class="Lright_body">
              <ul>
                <li class="circulation" v-for="(a,l) in v.foods" :key="l" >
                  <img :src="Lurls+a.image_path"  @click="Ljksahd(a)">
                  <div class="Lright_name">
                    <div class="Lright_name_one">
                      <h3>{{a.name}}</h3>
                      <span>招牌</span>
                    </div>
                    <p>{{a.description}}</p>
                    <div class="Lright_name_two">
                      <p>{{a.tips}}</p>
                      <p>好评率{{a.satisfy_rate}}%</p>
                    </div>
                    <span>折扣</span>
                    <div class="Lright_name_foot">
                      <p>￥20</p>
                      <van-stepper v-model="value" @change="Lstepper(a.item_id)"/>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="Lshopimg">
      <div class="Lshow">
        <img src="../../../../static/bottom/shopcar.png" />
        <div class="Lshow_one">
          <h3>￥20.00</h3>
          <p>配送费￥5</p>
        </div>
        <div @click="Lroute">去结算</div>
      </div>
      <div></div>

    </div>

    <div :class="{Ltru:Ltrue}">
       <h3>对不起数据访问错误,请返回重试</h3>
    </div>
  </div>
</template>

<script>
  // import tou1 from "../Chuanz/chuanz"
  import Vue from 'vue';
  export default {

    name: "Lrestaurant",
    data() {
      return {
        Llieb: "//elm.cangdu.org/shopping/v2/menu?restaurant_id=",
        isde: [],
        num: 0,
        sum:0,
        isArr: [],
        isAdd: true,
        Lurls: "//elm.cangdu.org/img/",
        details: [],
        value: 1,
        det: [],
        psnt: "L",
        psVid: 0,
        psJid:"",
        Ltrue:false
      }
    },
    created() {
      this.psJid=this.$route.query.asnfgd;
      console.log("$$$$$",this.$route.query);
      this.axios.get(this.Llieb+this.psJid).then((p) => {
        this.isde = p.data;
        // console.log(this.isde);
        this.Ldianj('热销榜', 1);
      })
      this.totalVue.$on("abc", (v) => {
        this.psJid=v;
        this.axios.get(this.Llieb+this.psJid).then((p) => {
          this.isde = [...p.data];
          console.log("7777777", v.id, v);
          this.Ldianj('热销榜', 22222);
        })
      });
      this.totalVue.$on("abcs", (v) => {
        this.psJid=v;
        this.axios.get(this.Llieb+this.psJid).then((p) => {
          this.isde = [...p.data];
          console.log("7777777", v.id, v);
          this.Ldianj('热销榜', 22222);
          if(p.name ==""){
           this.Ltrue = true;
            console.log(this.Ltrue);
            alert("对不起,数据错误,请返回重试!!!谢谢.")
          }
        }).catch((b)=>{
          alert("对不起,数据错误,请返回重试!!!谢谢.")
        })
      });
    },
    methods: {
      Ldianj(b) {
        this.num = b;
        // tou1.$emit("msg",v);
      },
      Ais(c) {
        this.sun = c;
        this.isAdd = !this.isAdd
      },
      Ljksahd(a){
        // console.log(a);
        this.$router.push({path:'/Lrightrouter',query:{cityname:a}})
      },
      Lroute(){
        this.$router.push({path:"/Tqrdd"});
      }
    },
    beforeRouteLeave(to,from ,next){
      to.meta.keepAlive = true;
      next();
    },
    // activated(){
    //   this.psJid=this.$route.query.asnfgd;
    //   console.log(this.psJid);
    //   this.axios.get(this.Llieb+this.psJid).then((p) => {
    //     this.isde = p.data;
    //     console.log(this.isde);
    //     this.Ldianj('热销榜', 1);
    //
    //   })
    //   console.log(123);
    //
    // },

  }
</script>

<style scoped>
  .Ltru{
    color:black;
    font-size: 2rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #rest {
    width: 18.75rem;
    /*display: flex;*/
    margin-top: 7.7rem;
  }
  .LleftNav {
    width: 18.75rem;
    height: 23rem;
    overflow: auto;
    position: relative;
    display: flex;
  }
  .Lleft {
    width: 5.5rem;
    overflow: hidden;
    /*position: fixed;*/
    /*left:0;*/
    /*bottom: 0;*/
  }
  .Lright{
    width: 13.25rem;
    height: 133.6rem;
    overflow: auto;
  }
  .Lleft a {
    width: 100%;
    color: black;
    display: block;
    text-overflow: ellipsis;
    overflow: auto;
    white-space: nowrap;
    background: rgba(222, 222, 224, 0.3);
    padding: .7rem .3rem;
    border-bottom: .025rem solid #ededed;
    border-left: .15rem solid #f8f8f8;
  }
  .Lbtn_d {
    border-left: .15rem solid #3190e8 !important;
    background-color: #fff !important;
  }
   .Lright_title {
     /*width: ;*/
    background: rgba(222, 222, 224, 0.3);
    padding: .5rem 0 .5rem .6rem;
    display: flex;
    justify-content: space-between;
  }
  .Lright_title ul{
    height: 5rem;
  }
  .Lright_title > div {
    display: flex;
  }
  .Lright_title img {
    margin: .2rem .2rem  0 ;
    width: 1rem;
    height: 1rem;
    display: block;
  }
  .Lleftone {
    width:4.2rem;
    font-size: .9rem;
    color: #666;
    text-overflow: ellipsis;
    overflow: auto;
    white-space: nowrap;
    font-weight: 700;
  }
  .Llefttwo {
    margin: .3rem .5rem;
    padding: 0;
    font-size: .5rem;
    color: #999;
    overflow: hidden;
  }
  .Lis {
    background-color: #39373a;
    opacity: .95;
    font-size: .5rem;
    color: #fff;
    position: absolute;
    top: 1.9rem;
    z-index: 14;
    width: 8rem;
    right: 0;
    padding: .5rem .4rem;
    border: 1px;
    border-radius: .2rem;
  }
  .Llink {
    display: none;
  }
  .circulation {
    display: flex;
    background-color: #fff;
    padding: .6rem .4rem;
    border-bottom: 1px solid #f8f8f8;
  }
  ul img {
    width: 2.2rem;
    height: 2.2rem;
    display: block;
  }
  .Lright_name h3 {
    width: 3.3rem;
    height: 1rem;
    /*text-overflow: ellipsis;*/
    /*overflow:auto;*/
    white-space: nowrap;
    margin-top: .3rem;
    padding: 0;
    font-size: .8rem;
    color: #333;
  }
  .Lright_name {
    padding-left: .5rem;
    font-size: .5rem;
    color: #999;
    line-height: .6rem;
  }
  .Lright_name > p {
    margin: 0;
    padding: 0;
    margin: .2rem 0 .2rem 0;
  }
  .Lright_name_one {
    margin: 0;
    padding: 0;
    position: relative;
  }
  .Lright_name_one span {
    display: inline-block;
    color: rgb(240, 115, 115);
    font-size: .3rem;
    padding: 0 .1rem;
    border: 1px solid rgb(240, 115, 115);
    border-radius: .3rem;
    position: absolute;
    right: -1.2rem;
    top: -.11rem;
  }
  .Lright_name > span {
    display: inline-block;
    color: rgb(240, 115, 115);
    font-size: .2rem;
    padding: 0 .1rem;
    border: 1px solid rgb(240, 115, 115);
    border-radius: .3rem;
    position: relative;
    bottom: 0rem;
    left: -.2rem;
  }
  .Lright_name_two {
    display: flex;
  }
  .Lright_name_two p {
    margin: .1rem .3rem .2rem 0;
    padding: 0;
    color: #333;
  }
  .Lright_name_foot {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin: .2rem .3rem 0 0;
    display: flex;
    justify-content: space-between;

  }
  .Lright_name_foot > p {
    margin: 0;
    padding: 0;

  }

  /*商品购物车页面样式*/
  .Lshow{
    display: flex;
    flex-direction:row;
    position: absolute;
    top: .2rem;
    left: 0;
  }
  .Lshopimg{
    /*background: red;*/
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    position: relative;
  }
  .Lshow img{
     width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    left: 1rem;
    top: -1rem;
  }
  .Lshow_one{
    font-size: .8rem;
    padding:0 5rem 0 4rem;
    color: white;
    background: black;
  }
  .Lshow_one+div{
    display: flex;
    background-color: #4cd964;
    /*width: 4rem;*/
    /*height: 100%;*/
    padding: 0 1.5rem 0 1.56rem;

    align-items: center;
  }

</style>
