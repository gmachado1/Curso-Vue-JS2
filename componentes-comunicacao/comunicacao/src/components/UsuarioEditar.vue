<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>A idade é {{idade}} </p>
    <button @click="alterarIdade"> Alterar Idade</button>
  </div>
</template>
<script>
import barramento from '@/barramento'

export default {
  props: {
    idade: { type: Number }
  },
  methods:{
      alterarIdade(){
          this.idade += 1
         // this.$emit('idadeMudou', this.idade)
          barramento.alterarIdade(this.idade)
      }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
