<template>
  <div id="divTarefas" class="tarefas">
      
      <template>
        <div v-for="task in tasks"
      </template>

      <span id="noTarefas">Sua vida está em dia :)</span>
    </div>
</template>

<script>
import tarefa from '@/componentes/tarefa'
export default {
    components:{
        tasks:{type:Array, require:true}
    }
}
</script>

<style>

</style>