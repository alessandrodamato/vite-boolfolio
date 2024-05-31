<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ProjectCard from './components/partials/ProjectCard.vue';
  import Paginator from './components/partials/Paginator.vue';
  import Loader from './components/partials/Loader.vue';
  export default {
    
    components:{
      Header,
      Footer,
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

  <Header/>

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

  <Footer/>

</template>



<style lang="scss" scoped>

</style>