<template>
  <div class="componente">
    <h2>As Informações de Usuário:</h2>
    <p>Vários detalhes...</p>
    <p>Nome do usuário<strong>{{nome}} invertido {{inverterNome()}}</strong>.</p>
      <p>A idade é {{idade}} </p>
    <button @click="reinicializarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn"> Reiniciar nome(callback)</button>
    <!-- button @click="reiniciarFn()"> Reiniciar nome(callback)</button -->
  </div>
</template>
<script>
import barramento from '@/barramento'

export default {
  //props:['nome'],
  props: {
    nome: {
      type: String,
      required: true,
      default: "Anônimo"
      //    default:function(){
      //        return Array(10).fill(0).join(',')
      //    }
    },
    reiniciarFn:Function,
    idade:{type:Number}
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reinicializarNome() {
      const nomeAntigo = this.nome;
      this.nome = "Pedro";

      //this.$emit('nomeMudou', this.nome) //desta forma só precisa do $event
      this.$emit("nomeMudou", {
        nome: this.nome,
        nomeAntigo,
        dataAlteracao: new Date()
      });
    },
    reiniciarNome(){
        this.nome = 'Pedro'
        this.$emit('nomeMudou', this.nome)
    }
  },
    created(){
        barramento.quandoIdadeMudar( idade =>{
            this.idade = idade
        })
    }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
