<template>
  <div id="app">
    <keep-alive>

        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  abstract:true
}
</script>

<style>
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  /*}*/

  body,html{
    font-size: 20px;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
}
</style>
