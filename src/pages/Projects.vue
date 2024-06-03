<script>

  import { store } from '../data/store';
  import axios from 'axios';
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
        types: [],
        technologies: [],
        projects: [],
        projectsLinks: [],
        isLoading: true,
        isError: false
      }
    },
    methods:{
      getApi(apiUrl, category = ''){
        this.isLoading = true;
        axios.get(apiUrl + category)
             .then(res => {
               this.isLoading = false;
               switch(category) {
                case 'types':
                  this.types = res.data;
                  break;
                case 'technologies':
                  this.technologies = res.data;
                  break;
                default:
                this.projects = res.data.data;
                this.projectsLinks = res.data.links;
              }
             })
             .catch(err => {
              this.isLoading = false;
              this.isError = true;
              console.log(err.message);
             })
      }
    },
    mounted(){
      this.getApi(store.apiUrl, 'projects');
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
    <Paginator :links="projectsLinks" @changePage="getApi"/>
    </div>

    <Loader v-if="isLoading || isError"/>

  </div>
</template>



<style lang="scss" scoped>

</style>