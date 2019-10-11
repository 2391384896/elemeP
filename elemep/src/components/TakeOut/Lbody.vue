<template>
    <div id="bodyqsq">
    <Lheads></Lheads>
      <!--<router-view class="Llunb"></router-view>-->

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
    import '../../../node_modules/swiper/css/swiper.css';
    export default {
        name: "Lbody",
      components: {Lfoots, Lheads},
      methods: {
        handleChange() {

        }
      }
    }
</script>

<style scoped>
  .Llunb{
    width: 100%;
    height: 30%;
  }
</style>
