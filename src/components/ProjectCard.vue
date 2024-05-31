
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
      }
    }
  }

</style>