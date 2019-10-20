<template>
     <div id="heads">

       <mt-header title="标题" class="mt_header">
         <!--返回搜索页-->
         <router-link to="{}" slot="left">
           <mt-button icon="back">搜索</mt-button>
         </router-link>
         <!--返回个人中心页-->
         <router-link to="{}" slot="right">
           <mt-button icon="more" >个人中心</mt-button>
         </router-link>

       </mt-header>

     </div>
</template>

<script>
    export default {
        name: "Lheads"
    }
</script>

<style scoped>
#heads{
  width: 100%;
}
.mt_header{
  height: 2.5rem;
}
</style>
