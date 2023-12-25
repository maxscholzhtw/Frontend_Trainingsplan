<template>
  <workouterstellen>
    <form @submit.prevent="addUebung">

      <button type="submit" class="btn btn-primary">Workout hinzufügen</button>

      <div class="card">
        <label for="beschreibung">Workoutname:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 1:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 2:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 3:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 4:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 5:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
        <label for="beschreibung">Übung 6:</label>
        <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
      </div>

    </form>
  </workouterstellen>
</template>

<script>
export default {
  data() {
    return {
      newUebung: {
        name: '',
        beschreibung: '',
      },
    };
  },
  methods: {
    addUebung() {
      console.log("Neue Uebung")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "name": this.newUebung.name,
        "beschreibung": this.newUebung.beschreibung
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/uebung", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    },
  },
}
</script>

<style>
.card{
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 10px 16px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    background-color: #f0f0f0;
    display: grid;
}

label{
  padding: 10px 0px 10px 0px;
  margin: 10px 0px 0px 0px;
}
</style>