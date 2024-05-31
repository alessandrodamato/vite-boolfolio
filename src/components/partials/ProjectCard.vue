
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
      <li><h2>{{ project.id }} - {{ project.name }}</h2></li>
      <li><h4>Creatore: {{ project.creator }}</h4></li>
      <li><h4>Obiettivo: {{ project.objective }}</h4></li>
      <li v-if="project.type">
        <h5>Tipo: {{ project.type.name }}</h5>
      </li>
      <li v-if="project.technologies.length > 0">
        <h5>Tecnologie: </h5>
        <span class="technology" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</span>
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
    border: 1px dashed black;
    text-align: center;
    background-color: white;
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