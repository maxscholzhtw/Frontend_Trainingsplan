<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="navigationsbar">
      <div class="navigationsbar-link-container">
        <RouterLink class="nav-links" to="/workoutlist">Workout</RouterLink>
        <img src="./assets/dumbbell.png">
      </div>
      <div class="navigationsbar-link-container">
        <RouterLink class="nav-links" to="/timer">Timer</RouterLink>
        <img src="./assets/stopwatch.png">
      </div>
      <div class="navigationsbar-link-container">
        <RouterLink class="nav-links" to="/uebunglist">Übungen</RouterLink>
        <img src="./assets/planer.png">
      </div>
    </div>
  </header>

  <body>
    <router-view></router-view>
  </body>

<footer>

</footer>
</template>

<style>
body{
  overflow: hidden;
  padding: 0px;
  text-align: left;
}

.navigationsbar {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 2px 2px 16px 2px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

}

.navigationsbar-link-container{
  display: grid;
  justify-items: center;
}

.nav-links{
  color: #333;
  font-size: 17px;
}

.nav-links:hover{
  color: #79CAFF;
  font-size: 17px;
}

img{
  width: 25px;
  height: 25px;
  margin: 5px 0px 0px 0px;
}
</style>

