<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      O nome de exemplo é
      <strong>novo:{{nome}} - antigo: {{nomeAntigo}} - data: {{dataAlterada}}</strong>
    </p>
    <p>
        Idade do {{nome}} é de <strong>{{idade}}</strong> anos</p>
    <button @click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <!--app-usuario-info :nome="nome" @nomeMudou="nome=$event"/ -->
      <app-usuario-info
        :nome="nome"
        :idade="idade"
        @nomeMudou="nome=$event.nome, nomeAntigo=$event.nomeAntigo, dataAlterada= $event.dataAlteracao"
        :reiniciarFn="reiniciarNome"
      />
      <app-usuario-editar :idade="idade" />
      <!-- @alterarIdade="idade=$event.idade"/-->
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return { nome: "Pedro", nomeAntigo: "", dataAlterada: "",idade:21 };
  },
  methods: {
    alterarNome() {
      this.nome = "Ana";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
