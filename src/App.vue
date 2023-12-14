<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="navigationsbar">
      <RouterLink class="nav-links" to="/workoutlist">Workout</RouterLink>
      <RouterLink class="nav-links" to="/timer">Timer</RouterLink>
      <RouterLink class="nav-links" to="/uebung">Übungen</RouterLink>
    </div>
  </header>

  <body>
    <router-view></router-view>
  </body>


</template>

<style>
body{
  overflow: hidden;
  padding: 0px 0px 0px 0px;
}

.navigationsbar {
  display: flex;
  justify-content: space-between;
}

.nav-links{
  color: #333;
  font-size: 17px;
}



.nav-links:hover{
  color: #79CAFF;
  font-size: 17px;
}


</style>

