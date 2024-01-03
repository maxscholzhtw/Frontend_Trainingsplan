<template>
    <form @submit.prevent="addUebungbeschreibung">
      <div class="card">
        <label for="uebungname">übungname:</label>
        <input id="uebungname" v-model="newUebungbeschreibung.workoutname" type="text" class="form-control" required>
        <label for="beschreibung">Übung 1:</label>
        <input id="beschreibung" v-model="newUebungbeschreibung.beschreibung" type="text" class="form-control" required>
        <button type="submit" class="btn btn-primary">Übungsbeschreibung hinzufügen</button>
      </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      newUebungbeschreibung: {
        uebungname: '',
        beschreibung: '',

      },
    };
  },
  methods: {
    addUebungsbeschreibung() {
      console.log("Neue Übungbeschreibung hinzugefügt")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "uebungname": this.newUebungbeschreibung.uebungname,
        "beschreibung": this.newUebungbeschreibung.beschreibung,

      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/workoutbeschreibung", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    },
  },
}
</script>

<style>

</style>