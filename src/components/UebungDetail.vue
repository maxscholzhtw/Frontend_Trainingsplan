<script>
export default {
  name: 'Uebung',
  data() {
    return {
      uebung: {
        id: "",
        name: "",
        beschreibung: ""
      }
    };
  },
  methods: {
    async getUebung() {
      try {
        this.uebung.id = this.$route.params.id;
        console.log(this.uebung.id);
        const response = await fetch(`http://localhost:8080/uebung/${this.uebung.id}`, {

          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error("Failed to fetch uebung");
        }
        this.uebung = await response.json();
        console.log(this.uebung);

      } catch (error) {
        console.error("Error fetching uebung:", error);
      }
    },
    created() {
      this.getUebung();
    }
  }
}

</script>

  <template>

  <div class="container">
    <h3>Name: {{uebung.name}}</h3>
    <p>Beschreibung: {{ uebung.beschreibung }}</p>
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