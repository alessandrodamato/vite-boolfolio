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
        this.isError = false;
        axios.get(apiUrl + category)
             .then(res => {
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
      this.getApi(store.apiUrl, 'projects');
      this.getApi(store.apiUrl, 'technologies');
      this.getApi(store.apiUrl, 'types');
    }
  }
</script>



<template>
  <div>

    
    <div v-if="!isLoading && !isError" class="container projects-container">
      <div class="tt">
        <h3>Elenco Tecnologie:</h3>
        <div class="tt-wrapper">
          <div v-for="item in technologies" :key="`technology-${item.id}`" class="badge">{{ item.name }}</div>
        </div>
      </div>
      <div class="tt">
        <h3>Elenco Tipi:</h3>
        <div class="tt-wrapper">
          <div v-for="item in types" :key="`type-${item.id}`" class="badge">{{ item.name }}</div>
        </div>
      </div>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
      <Paginator :links="projectsLinks" @changePage="getApi"/>    
    </div>

    <Loader v-if="isLoading || isError"/>

  </div>
</template>



<style lang="scss" scoped>

  .projects-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 0;
    .tt{
      width: calc(50% - 60px);
      margin: 0 30px 30px;
      padding: 50px;
      border-radius: 20px;
      text-align: center;
      border: 1px solid black;
      background: linear-gradient(to top right, green, greenyellow);
      .tt-wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .badge{
          min-width: 80px;
          height: 40px;
          margin: 10px;
          padding: 10px;
          border: 1px solid black;
          border-radius: 10px;
          background: linear-gradient(to bottom left, gray, lightgray);
        }
      }
    }
  }

</style>