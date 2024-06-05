
<script>
  export default {
    props:{
      project: Object
    }
  }
</script>



<template>
  <div class="project-card">
    <ul>
      <li><h2>{{ project.id }} - <router-link :to="{name: 'projectDetail', params: {slug: project.slug}}">{{ project.name }}</router-link></h2></li>
      <li><h4>Creatore: {{ project.creator }}</h4></li>
      <li><h4>Obiettivo: {{ project.objective }}</h4></li>
      <li v-if="project.type">
        <h5>Tipo: <router-link :to="{name: 'typeProjects', params: {slug: project.type.slug}}">{{ project.type.name }}</router-link></h5>
      </li>
      <li v-if="project.technologies?.length > 0">
        <h5>Tecnologie: </h5>
        <router-link :to="{name: 'technologyProjects', params: {slug: technology.slug}}" class="technology" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</router-link>
      </li>
      <li><p>{{ project.description }}</p></li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>

  .project-card{
    width: 300px;
    margin: 0 30px 30px;
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid black;
    background: linear-gradient(to top right, green, greenyellow);
    a{
      text-decoration: none;
      color: black;
      &:hover{
        text-decoration: underline;
      }
    }
    ul{
      list-style: none;
      li{
        margin: 10px 0;
        .technology{
          font-size: .9rem;
          &::after{
          content: ', ';
          }
          &:last-child::after{
            content: '';
          }
        } 
      }
    }
  }

</style>