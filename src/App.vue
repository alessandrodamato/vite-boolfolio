<script>
  import axios from 'axios';
  import { store } from './data/store';
  import ProjectCard from './components/ProjectCard.vue';
  export default {
    
    components:{
      ProjectCard
    },

    data(){
      return{
        projects: []
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
             .then(res => {
               this.projects = res.data.data;
               console.log(this.projects);
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

</template>



<style lang="scss" scoped>

</style>