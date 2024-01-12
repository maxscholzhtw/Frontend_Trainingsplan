import { createRouter, createWebHistory } from 'vue-router'
import WorkoutView from "@/views/WorkoutView.vue";
import TimerView from "@/views/TimerView.vue";
import CreateView from "@/views/CreateView.vue";
import UebungView from "@/views/UebungView.vue";
import UebungsDetailView from "@/views/UebungsDetailView.vue";
import NeueUebungView from "@/views/NeueUebungView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Workout',
      name: 'Workout',
      component: WorkoutView
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: TimerView
    },
    {
      path: '/Uebung',
      name: 'Uebung',
      component: UebungView
    },
    {
      path: '/NeuesWorkout',
      name: 'NeuesWorkout',
      component: CreateView
    },
    {
      path: '/NeueUebung',
      name: 'NeueUebung',
      component: NeueUebungView
    },
    {
    path: '/Uebung/:id',
    name: 'UebungDetail',
    component: UebungsDetailView,
    },


]
})

export default router
