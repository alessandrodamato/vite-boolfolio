<script>

  import axios from 'axios';
  import { store } from '../data/store';
   import ProjectCard from '../components/partials/ProjectCard.vue';
  import Paginator from '../components/partials/Paginator.vue';
  import Loader from '../components/partials/Loader.vue';

  export default {
    name: 'Projects',
    components:{
      ProjectCard,
      Paginator,
      Loader
    },
    data(){
      return{
        projects: [],
        links: [],
        isLoading: true,
        isError: false
      }
    },
    methods:{
      getApi(){
        this.isLoading = true;
        axios.get(store.apiUrl)
             .then(res => {
               this.projects = res.data.data;
               this.links = res.data.links;
               this.isLoading = false;
             })
             .catch(err => {
              this.isLoading = false;
              this.isError = true;
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

    <div v-if="!isLoading && !isError" class="container projects-container">

    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />

    </div>

    <div v-if="!isLoading && !isError" class="container">
    <Paginator :links="links" @changePage="getApi"/>
    </div>

    <Loader v-if="isLoading || isError"/>
    
  </div>
</template>



<style lang="scss" scoped>

</style>