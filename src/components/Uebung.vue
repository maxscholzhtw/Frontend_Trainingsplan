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
    }
  },
  created() {
    this.getUebung();
  }
};
</script>

<template>

  <div class="container">
    <div v-for="uebung in uebungs" :key="uebung.id" class="card">
      <h3>{{ uebung.name }}</h3>
    </div>
  </div>
</template>


<style>
body{
  overflow: scroll;
}

h1{
  text-align: center;
}

p{
  justify-content: left;

}
h3{
  text-align: center;
}

</style>
