<script>
  import axios from 'axios';
  import { store } from './data/store';
  import ProjectCard from './components/ProjectCard.vue';
  import Paginator from './components/Paginator.vue';
  export default {
    
    components:{
      ProjectCard,
      Paginator
    },

    data(){
      return{
        projects: [],
        links: []
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
             .then(res => {
               this.projects = res.data.data;
               this.links = res.data.links;
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

  <div class="container projects-container">

    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />

  </div>

  <div class="container">
    <Paginator :links="links" @changePage="getApi"/>
  </div>

</template>



<style lang="scss" scoped>

</style>