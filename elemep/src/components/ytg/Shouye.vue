
<template>

    <div id="shouye">

      <div id="toubu">
        <p>ele.me</p>
        <router-link to="/Tregister">
          <img class="yj" src="../../assets/img_t/touxiang.png" id="tx" alt="">
        </router-link>

      </div>
      <div id="toubu-1">
       <span >当前定位城市</span>
        <span>定位不准时，请在城市列表中选择</span>

      </div>
      <div id="tiaozhuan">
       <img id="yj" src="../../assets/img_t/youjian.png" />
      </div>
       <div id="rmcs">
         <span>热门城市</span>
       </div>

           <ul>
             <li class="rm" v-for="(v,i) in datas"  :key="i" @click="sendChild(v)">
              {{v.name}}
             </li>

           </ul>

           <ul v-for="(v2,i2) in shuzu " class="zm" :key="i2">
             <p class="sz">
               {{v2}}{{v2=='A'?'(按字母排序)':''}}
             </p>
             <li class="sy" v-for="(v,i) in cities[v2]" :key="i" @click="sycs(v)">
            {{v.name}}<br/>
             </li>
           </ul>

       </div>


</template>

<script>
    export default {
        name: "Shouye",
      data() {
        return {
          //这个存热门城市数据
          datas: [],
          // 这个存所有城市数据
          cities:[],
          //这个存字母
          shuzu:[],
          // zhuce:"登陆/注册",
          // denglu:require("../assets/img/tupian.jpg")
          urL:"https://elm.cangdu.org/v1/cities?type=hot",
          child1Msg:"首页的数据"
        };
      },
      created() {
        this.axios.get(this.urL).then((p)=>{
          this.datas=p.data;
          console.log(this.datas)
        });

        this.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((p)=>{
          this.cities=p.data
          let aaa=[];
          for(let k in p.data){
            aaa.push(k);
          }
          this.shuzu=aaa.sort();
          console.log(this.cities.A)
          console.log(typeof this.cities)
          // console.log(p.data)
          // console.log(aaa)
          // console.log(this.cities.A[0].name)
        })


      },

      computed: {

      },
      methods: {
        sendChild(v){
          //$emit是触发事件，当我们点击on事件的时候，$emit会触发其他组件的eventName事件， 把this.datas数据传递到其他组件中
          // this.$root.eventHunb.$emit("eventName",this.child1Msg)
          // console.log(v);
         // this.$store就是store文件夹(这是vuex的文件夹,做持久化存储)commit(参数1,参数2)是传值用的,参数1是mutations文件里方法接收的值,第二个参数是接受的值
         this.$store.commit("getAddress",v)
          this.totalVue.$emit("puy",v)
          console.log(v.latitude)
          //这个用于跳转页面,代替a标签,a标签没法传值
          this.$router.push({
            path:"/Tsearch2"
          })
        },
        sycs(v){
          // this.$store就是store文件夹(这是vuex的文件夹,做持久化存储)commit(参数1,参数2)是传值用的,参数1是mutations文件里方法接收的值,第二个参数是接收的值
          this.$store.commit("getAddress",v)
          // console.log(this.$store.state.address)
          // this.$router.push传值
          this.$router.push({
            //跳转的路径(用这个跳转可以不写a标签)
            path:"Tsearch2"
          })
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
#shouye{

  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
}
  #toubu{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  #toubu>p{
    left: .4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  #tx{
    right: .55rem;
    width: 1.3rem;

    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  #toubu-1{
    display: flex;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 .45rem;
    margin-top: 2.35rem;
  }
#toubu-1>span:nth-child(1){
  font-size: .55rem;
  color: #666;
}
#toubu-1>span:nth-child(2){
  font-weight: 900;
  font-size: .475rem;
  color: #9f9f9f;
}
  #tiaozhuan{
    /*display: flex;*/
    height: 1.8rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
  }
  #yj{
    position: absolute;
    right: 0.8rem;
    top: 4.3rem;
  }
  #rmcs{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;

  }
.ul{
  width: 100%;
  height: 100%;
}
  .rm{
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;
    box-sizing: border-box;
    display: block!important;
    text-decoration: none;
  }
  .sy{
    float: left;
    text-align: center;
    color: #666;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;
    box-sizing: border-box;
    display: block;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0.5rem;
  }
#rmcs{
  color: #666;
  font-weight: 400;
  text-indent: .45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
#rmcs>span{
  color: #666;
  font-weight: 400;
  text-indent: .45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: .55rem/1.45rem Helvetica Neue;
  display: block;
}
  .sz{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    /*margin-right: 60%;*/
    width: 100%;
    display: inline-block;
  }

.zm{

  display: block;
}

</style>
