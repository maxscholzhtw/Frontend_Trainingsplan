<!-- UebungView.vue -->
<template>
  <div>
    <h1>UebungView</h1>
    <!-- Hier könnte der Inhalt deiner UebungView stehen -->

    <!-- Einbindung der CreateUebungForm-Komponente -->
    <create-uebung-form></create-uebung-form>
  </div>
</template>

<script>
import CreateUebungForm from '@/path-to-your-components/CreateUebungForm.vue';

export default {
  components: {
    CreateUebungForm,
  },
};
</script>

<style scoped>
/* Hier kannst du dein CSS für die UebungView-Komponente hinzufügen, wenn nötig */
</style>
