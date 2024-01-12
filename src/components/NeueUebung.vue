<template>
  <form @submit.prevent="addNeueUebung">
    <div class="card">
      <label for="name">Name:</label>
      <input id="name" v-model="newUebung.name" type="text" class="form-control" required>
      <label for="beschreibung">Beschreibung:</label>
      <textarea id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required></textarea>

      <button type="submit" class="btn btn-primary">Übung hinzufügen</button>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      newUebung: {
        id: '',
        name: '',
        beschreibung: '',
      },
    };
  },
  methods: {
    addNeueUebung() {
      console.log("Neue Übung")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "name": this.newUebung.name,
        "beschreibung": this.newUebung.beschreibung,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`http://localhost:8080/uebung`, requestOptions)
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

button{
  margin: 30px 0px 0px 0px;
  background-color: white;
}

textarea{
  height: 100px;
}
</style>