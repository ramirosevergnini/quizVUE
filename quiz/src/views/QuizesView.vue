<script setup>
  import q from "../data/quizes.json"
  import { ref, watch } from 'vue'
  import QuCard from "../components/QuizCard.vue"

  const quizes = ref(q)
  const search = ref("")

  watch(search,()=>{
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <QuCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>  
</template>

<style scoped>
  .container{
    max-width: 1000px;
    margin: 0 auto;
  }
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARD */


  
</style>