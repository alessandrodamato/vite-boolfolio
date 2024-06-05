<script>

  import { store } from '../data/store';
  import axios from 'axios';
  import ProjectCard from '../components/partials/ProjectCard.vue';
  import Paginator from '../components/partials/Paginator.vue';
  import Loader from '../components/partials/Loader.vue';

  export default {
    name: 'technologyPosts',
    components:{
      ProjectCard,
      Paginator,
      Loader
    },
    data(){
      return{
        type: {},
        isLoading: true,
        isError: false
      }
    },
    methods:{
      getApi(apiUrl, slug){
        this.isLoading = true;
        this.isError = false;
        axios.get(apiUrl + 'tecnologie-progetti/' + slug)
             .then(res => {
                this.technology = res.data;
                this.isLoading = false;
                console.log(this.technology);
                if(!this.technology.id){
                  this.$router.push('/error404');
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
      this.getApi(store.apiUrl, this.$route.params.slug)
    }
  }
</script>



<template>
  <div>
    
    <div v-if="!isLoading && !isError" class="container projects-container">
      <h1>Filtro per: {{ technology.name }}</h1>
      <ProjectCard
        v-for="project in technology.projects"
        :key="project.id"
        :project="project"
      />
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
    h1{
      width: 100%;
      margin-bottom: 30px;
      text-align: center;
    }
  }

</style>