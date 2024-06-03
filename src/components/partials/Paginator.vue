
<script>
  import { store } from '../../data/store';
  export default {
    props:{
      links: Array
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>
  <div class="paginator">  
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <button
          @click="$emit('changePage', link.url)"
          v-html="link.label"
          :class="{'active' : link.active, 'disabled' : link.url === null}"
          :disabled="link.url === null"
        ></button>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>

  .paginator{
    display: flex;
    justify-content: center;
    height: 70px;
    margin: 0 0 50px;
    ul{
      width: 600px;
      list-style: none;
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      li{
        flex-grow: 1;
        line-height: 70px;
        text-align: center;
        button{
          display: inline-block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          border: none;
          color: black;
          background: linear-gradient(to bottom left, green, greenyellow);
          &:hover{
            background: linear-gradient(to bottom right, green, greenyellow);
            cursor: pointer;
          }
          &.active{
            background: green;
            border: 1px solid black;
          }
          &.disabled{
            background: linear-gradient(to bottom left, gray, lightgray);
          }
        }
      }
    }
  }

</style>