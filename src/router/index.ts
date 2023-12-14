import { createRouter, createWebHistory } from 'vue-router'
import WorkoutView from "@/views/WorkoutView.vue";
import TimerView from "@/views/TimerView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Workoutlist',
      name: 'Workoutlist',
      component: WorkoutView
    },
    {
      path: '/Timerside',
      name: 'Timerside',
      component: TimerView
    }
  ]
})

export default router
