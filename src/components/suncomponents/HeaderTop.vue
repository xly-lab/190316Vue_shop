<template>
  <div class="header">
    <mt-header :title="title">
      <span @click="$router.back()" slot="left">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
  </div>
</template>

<script>
  export default {
      props:{
        title:String
      },
    data(){
      return{
        isShow:false
      }
    },


  }

</script>

<style lang="scss" scoped>
  .header {
    background-color: #26a2ff;
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
  }
</style>
