<script setup>
  import { defineProps } from "vue";

  const props = defineProps(["questionStatus", "barPercentage"]);
</script>

<template>
  <header>
    <h4>Question {{ props.questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: props.barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
  header {
    margin-top: 20px;
  }

  header h4 {
    font-size: 30px;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
  }

  .completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
  }
</style>
