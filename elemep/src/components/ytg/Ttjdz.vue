<template>
    <div id="wrap">
      <div id="toubu">
        <img @click="fh" id="toubu-1" src="../../assets/img_t/zuojian.png" alt="">
        <span  id="toubu-2">添加地址</span>
      </div>
      <div id="zhong">
        <div id="zhong-1">
        <span  id="lxr">联系人</span>
        <input type="text" id="ndmz" v-model="dongxi1" @input="shijian" placeholder="你的名字">

          <img @click="qh" class="img1" src="../../assets/img_t/dui-2.png" alt="">
          <img @click="qh" v-show="qiehuan1" class="img1" src="../../assets/img_t/dui-1.png" alt="">
          <span id="xs">先生</span>

        <img @click="qh2" class="img2" src="../../assets/img_t/dui-1.png" alt="">
          <img  v-show="qiehuan1" @click="qh2" class="img2" src="../../assets/img_t/dui-2.png" alt="">
            <span id="ns">女士</span>
          </div>
        <div id="zhong-2">
          <span id="lxdh"  >联系电话</span>
          <input type="text" v-model="dongxi2" @input="shijian2" placeholder="你的手机号">
          <img id="jia2" src="../../assets/img_t/jia2.png" alt="">
        </div>
        <div id="zhong-3">
          <span id="scdz">送餐地址</span>
          <input @click="xq" type="text" placeholder="请输入学校" :value="model">
          <input type="text" v-model="xiangxi" placeholder="详细地址(如门牌号等)">
        </div>
        <div id="zhong-4">
             <span>标签</span>
          <input v-model="xuexiao" type="text" placeholder="无/家/学校/公司">
        </div>
      </div>
      <p id="qd" @click="qd1">确定</p>
      <div v-if="ts" class="animated bounceIn" id="tankuang">
        <img src="../../assets/img_t/cuowu.png" alt="">
        <p>{{tishi}}</p>
        <p @click="qd2">确定</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Ttjdz",
      data(){
          return{
            qiehuan1:true,
            model:"",
            shouji:"",
            dongxi1:"",
            dongxi2:"",
            xiangxi:"",
            xuexiao:"",
            ts:false,
            tishi:"请输入名字"

          }
      },

      methods:{
         qd2(){
           this.ts=false
         },
        shijian(){
          localStorage.setItem("v1",this.dongxi1)
        },
        shijian2(){
          localStorage.setItem("v2",this.dongxi2)
        },
          qh(){
            this.qiehuan1=true;
          },
          qh2(){
            this.qiehuan1=false;
          },
        fh(){
            this.$router.push({
              path:"/Txzdz"
            })
        },
        xq(){
            console.log(ndmz.value)
            this.$router.push({
              path:"/Tsearch4",
              // query:{ndmz:ndmz.value}
            })
        },
        //这个给新增地址栏传值
        qd1(){
          if(this.dongxi1==""){

          }
          if(this.qiehuan1==true){
            this.$router.push({
              path:"/Txzdz",
              query:{
                name:this.dongxi1,
                name2:this.dongxi2,
                name3:this.model,
                name4:this.xiangxi,
                name5:this.xuexiao,
                name6:'先生'
              }
            })
          }else{
            this.$router.push({
              path:"/Txzdz",
              query:{
                name:this.dongxi1,
                name2:this.dongxi2,
                name3:this.model,
                name4:this.xiangxi,
                name5:this.xuexiao,
                name6:'女士'
              }
            })
          }

          console.log(this.dongxi1)
        },
      },
      created(){
         console.log(this.shouji)
          this.model=this.$route.query.name;
         this.dongxi1=localStorage.getItem("v1")
        //getItem接收值
        this.dongxi2=localStorage.getItem("v2")
        // this.shouji2=this.shouji
      }
    }
</script>

<style scoped>
#toubu{
  height: 2.2rem;
  line-height: 2.2rem;
  background: #3190e8;
}
input{
  border: none;
}
#toubu-1{
  margin-left: 0.5rem;
}
  #toubu-2{
    font-size: 1rem;
    color: #fff;
position: absolute;
    left: 50%;
    height: 2.2rem;
    transform: translateX(-50%);
    font-weight: 700;
  }
    #zhong{
      background-color: #fff;
        padding: 0 .7rem;
    }
     #lxr{
       font-size: .8rem;
           color: #333;
           line-height: 2.5rem;
       width: 5rem;
       margin-right: 2rem;

     }
     #jia2{
       position: absolute;
       right: 1rem;
       top: 8.5rem;
     }
#zhong-1{
  border-bottom: 0.025rem solid #f5f5f5;
  position: relative;
}
#zhong-3{
  border-bottom: 0.05rem solid #f5f5f5;
}
  #zhong-1>input{
    height: 2.5rem;
        font-size: .8rem;
        color: #999;
    width: 70%;
    border-bottom: 0.025rem solid #f5f5f5;
    right: 0;
  }
  .img1{
    position: absolute;
    left: 5rem;
    top: 3.6rem;
  }
  .img2{
    position: absolute;
    left: 9.6rem;
    top: 3.6rem;
  }
  #xs{
    margin-left: 7rem;
    padding: 1rem 0;
    height: 3rem;
    line-height: 3rem;
  }
  #ns{
    margin-left: 2.4rem;
  }
      #zhong-2{
             font-size: .7rem;
                 color: #333;
                 height: 2.5rem;
        line-height: 2.5rem;
        border-top: 0.025rem solid #f5f5f5;

      }
  #zhong-2>input{
    height: 2.5rem;
    font-size: .8rem;
    color: #999;
    width: 65%;
    border-bottom: 0.025rem solid #f5f5f5;
    margin-left: 0.8rem;
  }
  #lxdh{
    font-size: .8rem;
    color: #333;
    line-height: 2.5rem;
    width: 5rem;
    margin-right: 1.5rem;
  }
  #scdz{
    font-size: .8rem;
    color: #333;
    line-height: 2.5rem;
    width: 5rem;
    margin-right: 2rem;
  }
  #zhong-3>input:nth-child(2){
    font-size: .7rem;
    color: #333;
    height: 2.5rem;
    line-height: 2.5rem;
    border-top: 0.025rem solid #f5f5f5;
  }
#zhong-3>input:nth-child(3){
  font-size: .7rem;
  color: #333;
  height: 2.5rem;
  line-height: 2.5rem;
  border-top: 0.025rem solid #f5f5f5;
  margin-left: 5.4rem;
}
  #zhong-4>span{
    font-size: .8rem;
    color: #333;
    line-height: 2.5rem;
    width: 5rem;
    margin-right: 2rem;
  }
  #zhong-4>input{
    height: 2.5rem;
    font-size: .8rem;
    color: #999;
    width: 65%;
    border-bottom: 0.025rem solid #f5f5f5;
    margin-left: 1.2rem;
  }
  #qd{
    font-size: 0.6rem;
    width: 80%;
    margin-left: 10%;
    border-radius: 0.3rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: rgb(76, 217, 100);
    color: white;
    font-size: 1rem;
    text-align: center;
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

        </style>









