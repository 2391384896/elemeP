<template>
    <div id="newAddress">
      <!--第一部分-->
      <div id="pHead" >
        <img @click="skipToAddress" src="../../assets/lArrow.png" alt="">
        新增地址
      </div>
      <!--第二部分-->
      <div class="newInput">
        <div>
          <input @input="nameIs" type="text" v-model="nameVal" placeholder="请填写你的姓名">

        </div> <p class="aloneP" v-if="isName">{{nameValP}}</p>
        <div>
          <input type="text" v-model="nullVal" @click="addressSkip" placeholder="小区/写字楼/学校等">
        </div>
        <div>
          <input @input="weizhiIs" type="text" v-model="weizhiVal" placeholder="请填写详细送餐地址">

        </div> <p class="aloneP" v-if="isWeizhi">{{weizhiValP}}</p>
        <div>
          <input @input="phoneIs" maxlength="11" type="text" v-model="phoneVal" placeholder="请输入正确的手机号">

        </div> <p class="aloneP" v-if="isPhone">{{phoneValP}}</p>
        <div>
          <input @input="phoneIs1" maxlength="11"  type="text" placeholder="备用联系电话（选填）">

        </div><p class="aloneP" v-if="isPhone1">{{phone1ValP}}</p>
      </div>

      <div class="cashPut3" :style="{background:isChangeColor}">
        <div @click="addSuccess" :style="{color:color4}"><span :style="{color:color1}">新</span><span :style="{color:color2}">增</span><span :style="{color:color3}">地</span>址</div>
      </div>

    </div>
</template>

<script>
  // import totalVue2 from './serviceEvent'
    export default {
        name: "P_Account_NewAddress",
       data(){
          return {
            isName:false,
            nameVal:'',
            nameValP:'',
            isWeizhi:false,
            weizhiVal:'',
            weizhiValP:'',
            isPhone:false,
            isPhone1:false,
            phoneVal:'',
            phoneValP:'',
            phone1Val:'',
            phone1ValP:'',
            isChangeColor:'',
            color1:'',
            color2:'',
            color3:'',
            color4:'',
            nullVal:'',
            arr4:[]
          };
       },
      created(){
         this.nullVal=this.$route.query.dizhi;
         this.totalVue.$on("ppp1",(p)=>{
           console.log(p)
           this.nullVal=p;
         })
      },
      methods:{
        skipToAddress(){
          this.$router.push({path:'/accountAddress'});
        },
        addressSkip(){
          this.$router.push({path:'/Tsearch3'});
        },
        nameIs(){
          if(this.isName==false){
            this.isName=!this.isName;
          }
          if(this.nameVal==''){
            this.nameValP='请填写您的姓名';
          }
          // console.log(this.color1);
          this.color1='gray';
          if(/^[\w]{2,}$/g.test(this.nameVal)){
            this.color1='white';
            console.log(this.color1);
            if(this.color1=='white'&&this.color2=='white'&&this.color3=='white'&&!(this.nullVal)==''){
              this.color4='white';
              this.isChangeColor='limegreen';
            }
          }
        },
        weizhiIs(){
          if(this.isWeizhi==false){
            this.isWeizhi=!this.isWeizhi;
          }
          this.weizhiValP='请填写详细的送餐地址';
          this.color2='gray';
          if(/^[\u0391-\uFFE5]{3,}$/g.test(this.weizhiVal)){
            this.color2='white';
            // console.log('lihai');
            if(this.color1=='white'&&this.color2=='white'&&this.color3=='white'){
              this.color4='white';
              this.isChangeColor='limegreen';
            }
          }
        },
        phoneIs(){
          if(this.isPhone==false){
            this.isPhone=!this.isPhone;
          }
            this.phoneValP='手机号不能为空/请输入正确的手机号';
          this.color3='gray';
          if(/^\d{11}$/g.test(this.phoneVal)){
            this.color3='white';
            if(this.color1=='white'&&this.color2=='white'&&this.color3=='white'){
              this.color4='white';
              this.isChangeColor='limegreen';
            }
          }
        },
        phoneIs1(){
          if(this.isPhone1==false){
            this.isPhone1=!this.isPhone1;

          }
            this.phone1ValP='手机号可以为空/请输入正确的手机号';
        },
        addSuccess(){
          // this.arr4.push([this.nameVal,this.phoneVal]);
          if(this.isChangeColor=='limegreen'){
               // totalVue2.$emit('addressMsg',[]);
               this.$router.push({path:'/accountAddress',query:{newAdd:[this.nameVal,this.phoneVal]}});
               this.totalVue.$emit("chuan2",[this.nameVal,this.phoneVal])
          }
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

  .newInput{
    background: white;
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
  .newInput>div>input{
    /*width: 17rem;*/
    /*height: 2.5rem;*/
    border: 0.02rem solid #ccc;
    background: #eee;
    padding:0.5rem 5rem 0.6rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;
  }
  .newInput>div{
    text-align: center;
    margin-top: 0.4rem;
  }

  .cashPut3{
    margin: 1rem 0.75rem;
    /*background: limegreen;*/
    background: lightgrey;
    text-align: center;
    color: gray;
    font-size: 0.9rem;
    border-radius: 0.2rem;
  }
  .cashPut3>div{
    padding: 0.6rem 0;
  }
  .aloneP{
    font-size: 0.7rem;
    color: red;
    margin-left: 0.5rem;
  }
</style>
