<script setup>
    import { defineProps, defineEmits } from 'vue'

    const emit = defineEmits(["selectOption"])

    const props = defineProps(['question']);

    const emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
</script>

<template>
    <div class="question-container">
        <h1 class="question">
            {{ props.question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div v-for="option in props.question.options" :key="option.id" class="option" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p> <!-- Corrigido para option.label -->
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container{
        margin-top: 20px;
    }
    .question {
        margin-bottom: 20px;
        font-size: 40px
    }
    .option{
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .option-label{
        background-color: bisque;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items:center;
        justify-content: center;
    }
    .option-value{
        background-color: rgb(244, 239, 239);
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
    }
</style>
