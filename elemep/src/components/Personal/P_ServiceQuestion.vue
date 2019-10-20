<template>
    <div id="serviceQuestion">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="SkipServiceCenter" src="../../assets/lArrow.png" alt="">
        <h3>{{title}}</h3>
      </div>
      <!--第二部分-->
      <div class="rule">
        {{str1}}
      </div>
    </div>
</template>

<script>
  // import serviceEvent from "./serviceEvent"
    export default {
        name: "P_ServiceQuestion",
      data(){
          return {
            title:'',
            arr:[],
            str:'',
            str1:'',
          }
      },
      created(){
        this.title=this.$route.query.nameL;
        this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((v)=>{
          for( let val in v.data){
            if(v.data[val]==this.title){
              this.str1=this.str;
            }
            this.str=v.data[val];
           }
        });
      },
      methods:{
        SkipServiceCenter(){
          this.$router.push({path:'/service'});
        },
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #serviceQuestion{
    background: white;
  }
  #pHead{
    color:white;
    font-weight: bold;
    font-size: 0.9rem;
    width: 100%;
    padding: 0.6rem 0;
    text-align: center;
    background: #26a2ff;
    position: fixed;
    top: 0;
    left: 0;
  }
  #pHead>img{
    width:1rem;
    height:1rem;
    position: absolute;
    top: 0.7rem;
    left: 0.2rem;
  }
  .rule{
    margin-top: 2.55rem;
    font-size: 0.9rem;
    height: 28.8rem;
    padding: 1rem 0.5rem;
    overflow: auto;
  }
</style>
