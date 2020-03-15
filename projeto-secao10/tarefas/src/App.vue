<template>
  <div id="app">
    
    <h1>Tarefas</h1>
	<TasksProgress :progress="progress"></TasksProgress>
    <NewTask @taskAdded="addTask($event)"></NewTask>
    <TaskGrid
      :tasks="tasks"
      @taskDeleted.stop="deleteTask"
      @taskStateChanged="toggleTaskStateChange"
    ></TaskGrid>
  </div>
</template>

<script>
import NewTask from "@/components/NewTask.vue";
import TaskGrid from "@/components/TaskGrid.vue";
import TasksProgress from "@/components/TasksProgress.vue";

export default {
  components: { TaskGrid, NewTask, TasksProgress },
  data() {
    return {
      tasks: [
        { name: "Lavar a louça", pending: true },
        { name: "Comprar camisa", pending: false }
      ]
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    }
  },
  watch:{
	  //sempre que o array mudar essa funcao será chamada
	//   tasks(){
	// 	  localStorage.setItem('tasks',JSON.stringify(this.tasks))
	//   }
	//mudou de metodo para objeto
	tasks:{
		//watch profundo - até objetos dentro do array
		deep:true,
		handler(){
			localStorage.setItem('tasks',JSON.stringify(this.tasks))
		}
	}
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        });
      }
    },
    deleteTask(indice, task) {
      console.log(indice); //indice = i
      const i = this.tasks.indexOf(task);
      this.tasks.splice(i, 1);
    },
    toggleTaskStateChange(indice, task) {
      console.log(indice, task);
      this.tasks[indice].pending = !this.tasks[indice].pending;
      // const task2Change = this.tasks.get(indice)
      // task2Change.pending = task2Change.pending?false:true;
    }
  },
  created(){
	 const json = localStorage.getItem('tasks')
	 const array = JSON.parse(json)
	 if(Array.isArray(array)){
		 this.tasks = JSON.parse(json) ||[]
	 }
   }
}
</script>

<style>
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
</style>
