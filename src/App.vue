<script>
  import axios from 'axios';
  import { store } from './data/store';
  export default {

    data(){
      return{

      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
             .then(res => {
              console.log(res.data);
             })
             .catch(err => {
              console.log(err.message);
             })
      }
    },

    mounted(){
      this.getApi();
    }

  }
</script>



<template>
  <div>
    test
  </div>
</template>



<style lang="scss" scoped>

</style>