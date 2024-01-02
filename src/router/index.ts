import { createRouter, createWebHistory } from 'vue-router'
import WorkoutView from "@/views/WorkoutView.vue";
import TimerView from "@/views/TimerView.vue";
import UebungView from "@/views/UebungView.vue";
import CreateView from "@/views/CreateView.vue";
import KlimmzügeView from "@/views/KlimmzügeView.vue";
import UebungsDetailView from "@/views/UebungsDetailView.vue";
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
      path: '/Klimmzüge',
      name: 'Klimmzüge',
      component: KlimmzügeView
    },
    {
      path: '/uebung/:id',
      name: 'uebungdeitails',
      component: UebungsDetailView
    }

  ]
})

export default router
