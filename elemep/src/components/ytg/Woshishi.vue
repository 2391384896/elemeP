<template>


  <div id="app1">
    <van-switch-cell v-model="checked" title="标题" />
  </div>
</template>

<script>


  import storage from '../../router/storage';

  // console.log(storage);

  export default {
    data() {
      return {
        checked: true
      }
    }
  }

  </script>
