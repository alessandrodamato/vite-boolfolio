<script>
  import {store} from '../data/store';
  import axios from 'axios';
  export default {
    name: 'ProjectDetail',
    data(){
      return{
        project: {}
      }
    },
    methods:{
      getApi(apiUrl, slug){
        axios.get(apiUrl + 'dettaglio-progetto/' + slug)
             .then(res => {
              this.project = res.data;
             })
             .catch(err => {
                console.log(err.message);
             })
      }
    },
    mounted(){
      this.getApi(store.apiUrl, this.$route.params.slug);
    }
  }
</script>



<template>
  <div class="main-wrapper container">
    <h1>{{ project.name }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia enim ducimus nisi veritatis, earum dicta eaque exercitationem accusamus a maiores architecto, dolore voluptas cumque veniam neque asperiores sequi consectetur voluptate similique quam officia hic? Voluptas veniam esse totam error id asperiores molestiae labore voluptate sit repellat minima, omnis adipisci veritatis hic consequuntur autem corporis, impedit odit quos, iste harum praesentium! Assumenda adipisci aut dolore autem delectus in architecto consectetur enim quibusdam similique tempora nulla voluptates cumque incidunt nesciunt laboriosam, dolorem expedita corporis est soluta voluptatum odit illo magnam ab. Laboriosam laborum harum, soluta a beatae vero debitis suscipit dicta.</p>
  </div>
</template>



<style lang="scss" scoped>

  .main-wrapper{
    padding: 50px;
    text-align: center;
    h1{
      margin-bottom: 30px;
    }
  }

</style>