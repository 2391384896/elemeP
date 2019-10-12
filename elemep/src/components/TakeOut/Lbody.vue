<template>
  <div id="body">
    <Lheads></Lheads>
    <llunb></llunb>
    <ul>
      <p>附近商家</p>
      <li></li>
    </ul>
    <Lfoots></Lfoots>
  </div>
</template>

<script>
  import Lheads from "./Lheads";
  import Lfoots from "./Lfoots";
  import Llunb from "./Llunb";

  export default {
    name: "Lbody",
    components: {Llunb, Lfoots, Lheads},
    data(){
      return{
        Luurl:"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",
        store:[]
      }
    },
    created(){
      this.axios.get(this.Luurl).then((p)=>{
       this.store=p.data;
        console.log(this.store);
      })
    }
  }
</script>

<style scoped>

</style>
