<script setup lang="ts">

</script>

<template>
  <Workoutlist>
    <div class="container">
      <h2>Workout</h2>
      <div class="container-neues-workout">
        <p>Schnellstart</p>
        <RouterLink class="nav-links" to="/neuesWorkout">Ein leeres Workout beginnen</RouterLink>
      </div>
      <div class="container-gespeicherte-workoutliste">
        <div class="box">
          <h2>Beine</h2>
          <p>Übung 1</p>
          <p>Übung 2</p>
          <p>Übung 3</p>
          <p>Übung 4</p>
          <p>Übung 5</p>
        </div>
        <div class="box">
          <h2>Brust</h2>
          <p>Übung 1</p>
          <p>Übung 2</p>
          <p>Übung 3</p>
          <p>Übung 4</p>
          <p>Übung 5</p>
        </div>
      </div>
    </div>
  </Workoutlist>
</template>

<style>
.nav-links{
  color: #333;
  font-size: 17px;
}

.nav-links:hover{
  color: #79CAFF;
  font-size: 17px;
}
</style>