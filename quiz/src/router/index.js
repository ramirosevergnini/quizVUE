import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Usando process.env.BASE_URL
    routes: [
        {
            path:"/",
            name: 'quizes',
            component: QuizesView
        },
        {
            path:"/quiz/:id",
            name: 'quiz',
            component: QuizView
        }
    ]
})

export default router