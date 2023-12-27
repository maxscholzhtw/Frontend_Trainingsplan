<template>
  <workouterstellen>
    <form @submit.prevent="addWorkout">
      <div class="card">
        <label for="workoutname">Workoutname:</label>
        <input id="workoutname" v-model="newWorkout.workoutname" type="text" class="form-control" required>
        <label for="uebung1">Übung 1:</label>
        <input id="uebung1" v-model="newWorkout.uebung1" type="text" class="form-control" required>
        <label for="uebung2">Übung 2:</label>
        <input id="uebung2" v-model="newWorkout.uebung2" type="text" class="form-control" required>
        <label for="uebung3">Übung 3:</label>
        <input id="uebung3" v-model="newWorkout.uebung3" type="text" class="form-control" required>
        <label for="uebung4">Übung 4:</label>
        <input id="uebung4" v-model="newWorkout.uebung4" type="text" class="form-control" required>
        <label for="uebung5">Übung 5:</label>
        <input id="uebung5" v-model="newWorkout.uebung5" type="text" class="form-control" required>
        <label for="uebung6">Übung 6:</label>
        <input id="uebung6" v-model="newWorkout.uebung6" type="text" class="form-control" required>

        <button type="submit" class="btn btn-primary">Workout hinzufügen</button>
      </div>

    </form>
  </workouterstellen>
</template>

<script>
export default {
  data() {
    return {
      newWorkout: {
        Workoutname: '',
        uebung1: '',
        uebung2: '',
        uebung3: '',
        uebung4: '',
        uebung5: '',
        uebung6: '',

      },
    };
  },
  methods: {
    addWorkout() {
      console.log("Neues Workout")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "Workoutname": this.newWorkout.Workoutname,
        "uebung1": this.newWorkout.uebung1,
        "uebung2": this.newWorkout.uebung2,
        "uebung3": this.newWorkout.uebung3,
        "uebung4": this.newWorkout.uebung4,
        "uebung5": this.newWorkout.uebung5,
        "uebung6": this.newWorkout.uebung6,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/workout", requestOptions)
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
  margin: 10px 0px 0px 0px;
  background-color: white;
}
</style>