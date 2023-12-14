<template>
  <form @submit.prevent="addUebung">
    <div class="form-group">
      <label for="name">Name:</label>
      <input id="name" v-model="newUebung.name" type="text" class="form-control" required>
    </div>

    <div class="form-group">
      <label for="beschreibung">Beschreibung:</label>
      <input id="beschreibung" v-model="newUebung.beschreibung" type="text" class="form-control" required>
    </div>

    <button type="submit" class="btn btn-primary">Übung hinzufügen</button>
  </form>
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

<style scoped>
/* Füge hier bei Bedarf benutzerdefinierte CSS-Stile hinzu */
</style>


