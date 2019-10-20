<template>
    <div id="wrap">
      <div id="toubu">
        <router-link to="/Tqrdd">
          <img id="toubu-1" src="../../assets/img_t/zuojian.png" alt="">
        </router-link>
        <div id="toubu-2">订单列表</div>

      </div>
      <lfoots></lfoots>
    </div>
</template>

<script>
    import Lfoots from "../TakeOut/Lfoots";
    export default {
        name: "Tddlb",
      components: {Lfoots}
    }
</script>

<style scoped>
  #toubu{
    height: 2.2rem;
    line-height: 2.2rem;
    background: #3190e8;

    position: relative;
  }
  #toubu-1{
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
  }
  #toubu-2{
    font-size: .9rem;
    color: #fff;
    text-align: center;
    font-weight: 700;


  }
</style>
