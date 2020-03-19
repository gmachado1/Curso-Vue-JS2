<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>

        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->
   
         <NomeSobrenome v-model="nomeSobrenome"></NomeSobrenome>

        <Rotulo nome="e-mail">
          <input type="text" v-model="email" placeholder="Digite seu E-mail" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="senha"  placeholder="Digite sua Senha"/>
        </Rotulo>
        <Rotulo nome="Armazenar dados?">
          <Escolha v-model="escolha"></Escolha>
        </Rotulo>
        <button @click.prevent="enviar" >Enviar</button>
        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome cadastrado">
          <span>{{nomeSobrenome.nome}}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{nomeSobrenome.sobrenome}}</span>
        </Rotulo>
        <Rotulo nome="E-mail cadastrado">
          <span>{{email}}</span>
        </Rotulo>
        <Rotulo nome="Senha ...">
          <span>{{senha}}</span>
        </Rotulo>
        <Rotulo nome="Escolha">
          <span>{{escolha}}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";
import NomeSobrenome from "./components/nomeSobrenome"
export default {
  name: "app",
  components: { Rotulo, Escolha,NomeSobrenome },
  data() {
    
    return {
     // nome: "",
    // sobrenome: "",
      nomeSobrenome:{nome:"gusa", sobrenome:"fdsafsadf"},
      email: "",
      escolha: true,
      senha:false,
      enviado:false,
      escolha:true
    };
  },
 methods:{
   enviar(){
     this.enviado = !this.enviado
   }
 }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
#app form button {
 float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
