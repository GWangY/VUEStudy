<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return {
        message:'hello webapck',
        name:'coderwehy'
      }
    },
    methods:{
      btnclick(){

      }
    }
  }
</script>

<style scoped>
.title{
  color: green;
}
</style>