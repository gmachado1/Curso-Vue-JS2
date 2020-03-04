<template>
  <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>{{curso}} &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
 data(){
     return {curso: "Curso de Vue"}
 }
};
</script>

<style>
</style>