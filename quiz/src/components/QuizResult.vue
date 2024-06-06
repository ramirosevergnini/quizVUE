<script setup>
    import { defineProps } from "vue";
    import { RouterLink } from "vue-router";

    const props = defineProps(["quizQuestionLength", "numberOfCorrectAnswers"]);
</script>

<template>
    <div class="results">
        <p>Seus Resultados...</p>
        <h1>{{ props.numberOfCorrectAnswers }} / {{ props.quizQuestionLength(quiz) }}</h1>
        <RouterLink to="/">Voltar</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }
    
    p {
        font-size: 25px;
    }
    
    h1 {
        font-size: 80px;
    }
</style>
