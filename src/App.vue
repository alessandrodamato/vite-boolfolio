<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ProjectCard from './components/partials/ProjectCard.vue';
  import Paginator from './components/partials/Paginator.vue';
  export default {
    
    components:{
      Header,
      Footer,
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

  <Header/>

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

  <Footer/>

</template>



<style lang="scss" scoped>

</style>