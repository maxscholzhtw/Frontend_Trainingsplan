<script >
export default {
  name: 'Workout',
  data() {
    return {
      workouts: []
    };
  },
  methods: {
    async getWorkouts() {
      try {
        const response = await fetch('http://localhost:8080/workouts', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
        });
        if (response.ok) {
          this.workouts = await response.json();
          console.log(this.workouts);
        } else {
          throw new Error("Failed to fetch workouts");
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    }
  },
  created() {
    this.getWorkouts();
  }
};
</script>

<template>
  <div class="container">
    <div class="container-neues-workout">
      <h2>Gespeicherte Workouts</h2>
      <RouterLink class="nav-button" to="/neuesWorkout">Ein leeres Workout beginnen</RouterLink>
    </div>
    <div v-for="workout in workouts" :key="workout.id" class="card">
      <h3>Workoutname: {{ workout.workoutname }}</h3>
      <div>
        <p v-if="workout.uebung1">Übung 1: {{ workout.uebung1 }}</p>
        <p v-if="workout.uebung2">Übung 2: {{ workout.uebung2 }}</p>
        <p v-if="workout.uebung3">Übung 3: {{ workout.uebung3 }}</p>
        <p v-if="workout.uebung4">Übung 4: {{ workout.uebung4 }}</p>
        <p v-if="workout.uebung5">Übung 5: {{ workout.uebung5 }}</p>
        <p v-if="workout.uebung6">Übung 6: {{ workout.uebung6 }}</p>
      </div>
    </div>
  </div>
</template>

<style>
body{
  padding: 0px;
  text-align: left;
}

.nav-button{
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #2C3E50;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
  margin: 15px 0px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 10px 16px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #f0f0f0;
}

.card p {
  padding: 10px 0px 0px 30px;
}



.container-neues-workout{
  margin: 0px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

</style>