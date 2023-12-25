<script setup lang="ts">

</script>

<template>
  <Workoutlist>
    <div class="container">
      <div class="container-neues-workout">
        <h2>Gespeicherte Workouts</h2>
        <RouterLink class=nav-button to="/neuesWorkout">Ein leeres Workout beginnen</RouterLink>
      </div>
      <div class="card">
        <h2>Legs</h2>
        <p>3 x Squads (Barbell)</p>
        <p>3 x Leg Extensions (Maschine)</p>
        <p>3 x Flat Leg Raise</p>
        <p>3 x Standing Calf Raise (Dumbbell)</p>
      </div>

      <div class="card">
        <h2>Chest and Triceps</h2>
        <p>3 x Bench Press (Barbell)</p>
        <p>3 x Incline Bench Press (Barbbell)</p>
        <p>3 x Lateral Raise (Dumbbell)</p>
        <p>3 x Skullcrusher (Barbbell)</p>
      </div>

      <div class="card">
        <h2>Back and Biceps</h2>
        <p>3 x Deadlift (Barbell)</p>
        <p>3 x Seated Row (Cable)</p>
        <p>3 x Lat Pulldown (Cable)</p>
        <p>3 x Biceps Curls (Barbbell)</p>
      </div>
    </div>
  </Workoutlist>
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



.container-neues-workout{
  margin: 0px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>