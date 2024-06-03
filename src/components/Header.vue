<script>
  export default {
    
  }
</script>



<template>

  <header>
    <nav>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'projects'}">Progetti</router-link></li>
        <li><router-link :to="{name: 'about'}">Chi siamo</router-link></li>
      </ul>
    </nav>
  </header>

</template>



<style lang="scss" scoped>

  header{
    height: 100px;
    background: linear-gradient(to bottom left, green, greenyellow);
    nav{
      height: 100%;
      ul{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        li{
          margin: 0 40px;
          a{
            cursor: pointer;
            color: black;
            text-decoration: none;
            font-size: 1.5rem;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

</style>