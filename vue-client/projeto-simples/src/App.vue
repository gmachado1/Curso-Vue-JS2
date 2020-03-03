<template>
  <div id="app">
    Olá Vue {{titulo}}
    <button @click="titulo +='####'">Alterar</button>
  </div>
</template>

<script>
export default {
  el: "#app",
  data: function() {
    return {
      titulo: "Teste data usando Vue JS!!"
    };
  }
};
</script>

<style>
#app {
  background-color: chocolate;
  color: aliceblue;
}
</style>