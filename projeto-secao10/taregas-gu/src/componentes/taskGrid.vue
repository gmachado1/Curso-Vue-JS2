<template>
  <div class="tasks">
      <template>
          <div v-for="task in tasks" :key="task.name">{{task.name}}</div>
      </template>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>