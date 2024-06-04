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
    computed:{
      formattedDate(){
        const date = this.project.updated_at;
        const d = new Date;
        const day = d.getDate(date) < 10 ? '0' + d.getDate(date) : d.getDate(date);
        const month = d.getMonth(date) < 9 ? '0' + parseInt(d.getMonth(date) + 1) : d.getMonth(date) + 1;
        const year = d.getFullYear(date);
        return day + '/' + month + '/' + year;
      }
    },
    mounted(){
      this.getApi(store.apiUrl, this.$route.params.slug);
    }
  }
</script>



<template>
  <div class="main-wrapper container">
    <h1>{{ project.name }} - {{ formattedDate }}</h1>
    <img :src="project.image" :alt="project.image_original_name">
    <h5 v-if="project.image_original_name !== '-'">{{ project.image_original_name }}</h5>
    <h3>Creatore: {{ project.creator }}</h3>
    <h3>Obiettivo: {{ project.objective }}</h3>
    <h3 v-if="project.type">Tipo: {{ project.type?.name }}</h3>
    <h3 v-if="project.technologies?.length > 0">Tecnologie:
      <span v-for="(technology, index) in project.technologies" :key="`t-${technology.id}`">{{ technology.name }}<span v-if="index !== project.technologies.length - 1">, </span></span>
    </h3>
    <p>{{ project.description }}</p>
  </div>
</template>



<style lang="scss" scoped>

  .main-wrapper{
    padding: 50px;
    text-align: center;
    h1{
      margin-bottom: 20px;
    }
    h3{
      margin-bottom: 10px;
    }
    h5{
      margin-bottom: 30px;
    }
    img{
      width: 50%;
      margin-bottom: 5px;
    }
  }

</style>