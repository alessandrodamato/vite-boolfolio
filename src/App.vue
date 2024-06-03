<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    
    components:{
      Header,
      Footer
    }

  }
</script>



<template>

  <Header/>

  <main>
    <router-view></router-view>
  </main>

  <Footer/>

</template>



<style lang="scss" scoped>

  main{
    min-height: calc(100vh - 100px - 150px);
  }

</style>