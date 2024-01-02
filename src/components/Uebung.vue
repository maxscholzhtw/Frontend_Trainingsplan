<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <uebunglist>
    <h1>Übungsliste</h1>

    <router-link :to="{ name: 'UebungsDetailView', params: { id: uebung.id } }" class="btn btn-primary">Show</router-link>

    <RouterLink class="card-link" to="/ligetütze">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Ligestütze.png" alt="Ligestütze">
        </div>
        <div class="card-container-text">
          <h2>Brust</h2>
          <p>Ligestütze</p>
        </div>
      </div>
    </RouterLink>

    <RouterLink class="card-link" to="/pilates">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Pilates.png" alt="Pilates">
        </div>
        <div class="card-container-text">
          <h2>Ganzkörper</h2>
          <p>Pilates</p>
        </div>
      </div>
    </RouterLink>

    <RouterLink class="card-link" to="/ropes">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Ropes.png" alt="Ropes">
        </div>
        <div class="card-container-text">
          <h2>Rücken</h2>
          <p>Ropes</p>
        </div>
      </div>
    </RouterLink>

    <RouterLink class="card-link" to="/bankdrücken_mit-hantlen">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Bankdrücken_mit_Hantel.png" alt="Bankdrücken mit Hanteln">
        </div>
        <div class="card-container-text">
          <h2>Brust</h2>
          <p>Bankdrücken mit Hanteln</p>
        </div>
      </div>
    </RouterLink>

    <RouterLink class="card-link" to="/rudern">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Rudern.png" alt="Rudern">
        </div>
        <div class="card-container-text">
          <h2>Rücken</h2>
          <p>Rudern</p>
        </div>
      </div>
    </RouterLink>

    <RouterLink class="card-link" to="/laufband">
      <div class="card-uebungen" id="link1">
        <div class="card-container-img">
          <img class="card-img" src="../assets/Laufband.png" alt="Laufband">
        </div>
        <div class="card-container-text">
          <h2>Cardio</h2>
          <p>Laufband</p>
        </div>
      </div>
    </RouterLink>
  </uebunglist>
</template>

<style>
body{
  overflow: scroll;
}

.card-uebungen{
  display: flex;
  justify-content: left;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 10px 16px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #f0f0f0;
}

.card-container-img{
  margin: 0px 10px 0px 0px;
}

.card-img{
  width: 50px;
  height: 50px;
}

.card-container-text{
  display: grid;
  justify-items: left;
}

h1{
  text-align: center;
}

.card-link{
  color: #181818;
}

p{
  justify-content: left;

}

</style>


