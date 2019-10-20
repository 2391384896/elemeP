<template>
  <!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
  <!--search是搜索-->
    <div id="search">
      <!--head是头部-->
     <div id="head">
      <img src="../../assets/img_t/zuojian.png"/>
       <div id="bt">{{address.name}}</div>

     </div>
      <div >
        <input type="search" placeholder="请输入商家或美食名称" id="inputs" v-model="aaa">
        <button id="tj"  @click="tijiao()">提交</button>
      </div>
      <div v-show="classbus" id="business">
        <h4>商家</h4>
        <div  class="shangjia" :to={} v-for="(p,i) in datas" :key="i" @click="sj(p)">

          <img class="img1" :src="'//elm.cangdu.org/img/'+p.image_path" >
          <div class="xinxi" @click="cz()">
            <p class="p1">
              <span>{{p.name}}</span>
              <img class="zhifu" src="../../assets/img_t/zhiifu.png" alt="">
            </p>
            <p class="p1">
              月售 {{p.recent_order_num}} 单
            </p>
            <p class="p1">{{p.float_minimum_order_amount}}元起送/距离{{p.distance}}</p>
          </div>
        </div>

      </div>
      <div v-show="baoqian" id="baoqian">
        很抱歉，无搜索结果
      </div>
      <div class="cha" v-for="(p2,i2) in urL"  v-if="!p2.checked">{{p2.title}}<img src="../../assets/img_t/cha.png"  @click="removeData(i2)"></div>
      <Lfoots></Lfoots>
    </div>

</template>

<script>
  import storage from '../../router/storage';
    import Lfoots from "../TakeOut/Lfoots";
    export default {
        name: "Tsearch",
      data(){
         return{
           //存所有餐馆数据
           datas:[],
           classbus:false,
           baoqian:false,
          address:"",
           aaa:"",
           urL:[],
           // lishi:[],
           // bbb:[]
         }
      },
      methods:{
        doAdd(e){
          console.log(this.urL);
          //当按回车键的时候触发
          // if(e.keyCode==13){
          //   this.tijiao();
          //   // 往urL数组里填输入框的值
          //   this.urL.push({
          //
          //     title:this.aaa,
          //
          //   })
          // }

          storage.set('urL',this.urL);
        },
        removeData(k){

          this.urL.splice(k,1);
          storage.set("urL",this.urL)
        },
          sj(p){
            console.log(p)
            this.$router.push({path:"/lstore",query:{neir:p}})
            this.totalVue.$emit("lstores",p)
          },
        cz(p){
          // localStorage.setItem("username",);
          console.log(p)


        },
      tijiao(){
          // console.log(this.aaa)


        // localStorage.setItem("lishi",this.aaa)
        // this.bbb.push(localStorage.getItem("lishi"))
        // //这行向mutations传值
        // this.$store.commit("lishi1",this.bbb)
        //  console.log(this.bbb)
        if(this.aaa!=""){
          this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash="+this.address.latitude+","+this.address.longitude+"&keyword="+this.aaa).then((p)=>{
            // this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基").then((p)=>{
            // console.log(p)
            this.datas=p.data;
            // console.log(this.datas)
            if(this.datas.message=="搜索餐馆数据失败"||this.datas==""){
              this.classbus=false;
              this.baoqian=true;
            }else {
              this.classbus=true;
              this.baoqian=false;
            }
            //这是输入框输入的值
            console.log(this.aaa)
           //    这是遍历的数据
            console.log(this.urL)

            // if(this.urL.indexOf(this.aaa)==-1){
            console.log(this.urL);
            // for(let i=0;i<this.urL.length;i++){
               // console.log(this.urL[i].title.includes(this.aaa))
               if(JSON.stringify(this.urL).indexOf(JSON.stringify(this.aaa))==-1) {

                 this.urL.push({
              title:this.aaa
            })
            storage.set('urL',this.urL);
               //
               }
            console.log(JSON.stringify(this.urL).indexOf(JSON.stringify(this.aaa)) == -1);
            // }
            //  }
            // }


          });


        }

      },


      },
      created(){
        this.address = this.$store.state.address;
        // this.lishi.push(this.$store.state.lishi);

        // console.log(this.lishi);
        // https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基

      },
      mounted(){   /*生命周期函数       vue页面刷新就会触发的方法*/

        this.urL=storage.get('urL');
        // console.log(urL)
        // for (let i = 0 ; i<urL.length;i++){
        //   console.log(urL.indexOf(urL[i]))
        // if(this.urL){  /*注意判断*/i
        //   this.urL=this.urL;
        //
        //
        //   }
        // }
      },
      components: {Lfoots}
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;


  }

.cha{
  padding: 0 0.3rem;
  font-size: 0.7rem;
  height: 2rem;
  border-bottom: 0.025rem solid #e4e4e4;
  line-height: 2rem;
  position: relative;
}
.cha img{
position: absolute;
  top: 0.5rem;
  right: 0.5rem;

}

#head{
background: #3190e8;
  width: 100%;
  height: 2.2rem;
  /*position: relative;*/
}
  #head img{
    display:inline-block;
    height: 1rem;
    /*position: absolute;*/
    margin-left: 0.4rem;
    margin-top:0.6rem;
  }
  #bt{
    font-size: 1rem;
    margin-top: -1.8rem;
    text-align: center;
    line-height: 2.2rem;
    color: #fff;
    /* margin-left: 7rem; */
    font-weight: 400;
  }
  #inputs{
    background: #f2f2f2;
    height: 1.7rem;
    width: 70%;
    border: 0.025rem solid #e4e4e4;
    border-radius: 0.125rem;
    font-weight: 700;
    color: black;
    padding: 0.025rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    padding-left: 0.25rem;
    font-size: 0.7rem;
  }
  #tj{
    background-color: #3190e8;
    border-radius: 0.125rem;
    color: white;
    height: 1.7rem;
    width: 20%;
    border: 0.025rem solid #3190e8;
    font-size: 0.75rem;
    font-weight: 700;
  }
  #business{
    height: 25rem;
    overflow: auto;
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    background: #f5f5f5;
    color: #666;
    margin-top: 0.25rem;
  }
  #business li{
    list-style-type:none;
  }
  #baoqian{
    font-size: 0.65rem;
    text-align: center;
  }
  .shangjia{
    display: flex;
    padding: 0.5rem;
    border-bottom: 0.025rem solid #e4e4e4;
    background: white;
  }
  .img1{

    width: 1.8rem;
    height: 1.8rem;

  }
  .xinxi{
    width: 15.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.3rem;
    border-bottom: 1px solid #e4e4e4;
  }
.xinxi>p:nth-child(1){
  margin-top: -0.2rem;
}
  .p1{
   height: 0.9rem;
    line-height: 0.9rem;
    font-weight: 400;
    font-size: .65rem;

  }
  .p1 img{
    margin-bottom: -0.1rem;
  }
</style>
