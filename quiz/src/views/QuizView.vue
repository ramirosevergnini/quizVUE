<script setup>
    import QuizQuestion from "../components/QuizQuestion.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import { useRoute } from "vue-router"
    import { ref, computed } from "vue"
    import quizes from "../data/quizes.json"
    import Results from "../components/QuizResult.vue"

    const route = useRoute()
    const numberOfCorrectAnswers = 0

    const quizId = parseInt(route.params.id)

    const currentQuestionIndex = ref(0)

    const quiz = quizes.find(q => q.id === quizId)

    const showResults = ref(false)

    const questionStatus = computed (() => {
        return `${currentQuestionIndex.value}/${quiz.questions.length}`
    })

    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100} %`)

    const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    if (currentQuestionIndex.value === quiz.questions.length - 1) {
        showResults.value = true;
    }
    if (currentQuestionIndex.value < quiz.questions.length - 1) {
        // Incrementa currentQuestionIndex usando .value
        currentQuestionIndex.value++;
    }
};

</script>

<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
         />
        <div>
            <QuizQuestion
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"
            
            />
            <Results v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
        <button @click="currentQuestionIndex++">></button>
    </div>
</template>
