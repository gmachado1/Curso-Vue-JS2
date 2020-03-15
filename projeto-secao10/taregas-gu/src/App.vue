<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progresso></progresso>
    <formulario></formulario>
    <tarefas></tarefas>
  </div>
</template>

<script>
import progresso from "@/componentes/progresso";
import formulario from "@/componentes/formulario";
import tarefas from "@/componentes/tarefas"

import

export default {
  props:{tasks:{tipo:Array, require:true}},
  data(){
    return {
      tasks:[{name:'Lavar a louça', pending:false},
                  {name:'Comprar camisa',pending:true}]
    }
  },
  components: { progresso, formulario, tarefas },
  methods: {
    addTask() {
      console.log(txtTarefas.value);
      if (tarefa.length > 0) noTarefas.style.display = "none";
    },
    remove(e) {
      if (!e) {
        e = fechar;
      }
      console.log("teste");
      e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    }
  }
};
</script>

<style>
.formulario {
  margin: 35px;
}
span {
  color: grey;
  font-size: 20px;
}
button {
  padding: 1px 6px;
  text-rendering: auto;
  display: inline-block;
  cursor: default;
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #fff;
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
}

input {
  background: rgb(58, 96, 115);
  color: darkgray;
  border: 1px solid #fff;
  padding: 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 1rem;
}

.barra-progresso {
  width: 80%;
  height: 20px;
  border: 1px solid #aaa;
  text-align: center;
}
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
.tarefa {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
}
.tarefa span {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  color: wheat;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  -webkit-box-pack: center;
}
.pendente {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}
.feita {
  border-left: 12px solid green;
  background-color: #4caf50;
  font-style: italic;
  text-decoration-line: line-through;
}
.pendente .feita {
  background-color: #b73229;
}
</style>
