<script>
export default {
  name: 'Uebung',
  data() {
    return {
      uebungs: []
    };
  },
  methods: {
    async getUebung() {
      try {
        const response = await fetch('http://localhost:8080/uebungs', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error("Failed to fetch uebung");
        }
        this.uebungs = await response.json();
        console.log(this.uebungs);

      } catch (error) {
        console.error("Error fetching uebung:", error);
      }


    },

    async deleteUebung(uebungsId) {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          mode: 'cors',
          redirect: 'follow',
        };

        await fetch(`http://localhost:8080/uebung/${uebungsId}`, requestOptions);
        this.getUebung();
      }


      catch (error) {
        console.error("Error deleting uebung:", error);
      }


    },
  },
  created() {
    this.getUebung();
  }
};
</script>

<template>
  <div class="container">
    <div v-for="uebung in uebungs" :key="uebung.id" class="card">
      <router-link :to="{ name: 'UebungDetail', params: { id: uebung.id } }" class=""><h3>{{ uebung.name }}</h3></router-link>
      <button @click="deleteUebung(uebung.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<style>
body {
  overflow: scroll;
}

h1 {
  text-align: center;
}

p {
  justify-content: left;
}

h3 {
  text-align: center;
  color: #79CAFF;
}
</style>