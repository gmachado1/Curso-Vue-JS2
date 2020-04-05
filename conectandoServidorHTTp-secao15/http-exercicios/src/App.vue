<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens"
		 :key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter usuários</b-button>
      <b-button
        @click="obterUsuariosLocal"
        size="lg"
        variant="secondary"
        class="ml-2"
      >Obter usuários 2</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{usuario.nome}}
        <br />
        <strong>E-mail:</strong>
        {{usuario.email}}
        <br />
        <strong>ID:</strong>
        {{usuario.id}} - ou - {{id}}
        <br />
        <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
        <b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      mensagens: [],
      id: null,
      usuario: {
        nome: "",
        email: ""
      }
    };
  },
  methods: {
    excluir(id) {
      this.$http.delete(`/usuario/${id}.json`).then(() => {
        this.limpar(), this.obterUsuarios();
	  }).catch(_=>{
		this.mensagens.push({
			texto:'Problema para excluir!',
			tipo:'danger'
		})
	})
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] }; //"clone"
    },
    limpar() {
      this.usuario.nome = ""
      this.usuario.email = ""
      this.usuario.id = ""
	  this.id = null
	  this.mensagens = []
    },
    salvar() {
      // alterando para aceitar o post e put
      //   this.$http.post("usuario.json", this.usuario).then(() => {
      //     this.limpar();
      //   });
	  	const metodo = this.id ? "patch" : "post"
	  	const finalUrl = this.id ? `/${this.id}.json` : ".json"
	
		this.$http[metodo](`/usuario${finalUrl}`, this.usuario)
			.then(_ => 
				this.limpar(),
				this.obterUsuarios())
			.then(_=>
			this.mensagens.push({
					texto:'Operação realizada com sucesso!', tipo:'success'})
			)
	  
    },
    obterUsuarios() {
      //global
      this.$http.get("usuario.json").then(res => {
        this.usuarios = res.data;
        console.log(res.data);
      });
    },
    obterUsuariosLocal() {
      // local
      this.$http
        .get("https://curso-vue-8601c.firebaseio.com/usuario.json")
        .then(res => {
          this.usuarios = res.data;
        });
    }
  }
  // created(){
  // 	this.$http.post('usuarios.json',{
  // 		nome:'Maria',
  // 		email:'maria.silva@gmail.com'
  // 	}).then(res => console.log(res))
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
