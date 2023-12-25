import { createRouter, createWebHistory } from 'vue-router'
import WorkoutView from "@/views/WorkoutView.vue";
import TimerView from "@/views/TimerView.vue";
import UebungView from "@/views/UebungView.vue";
import CreateView from "@/views/CreateView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Workoutlist',
      name: 'Workoutlist',
      component: WorkoutView
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: TimerView
    },
    {
      path: '/Uebunglist',
      name: 'Uebunglist',
      component: UebungView
    },
    {
      path: '/NeuesWorkout',
      name: 'NeuesWorkout',
      component: CreateView
    }
  ]
})

export default router
