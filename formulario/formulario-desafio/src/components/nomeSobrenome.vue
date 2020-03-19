<template>
  <div class="nome-sobrenome">
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="alterarNome" placeholder="Digite seu nome" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.sobrenome" @input="alterarSobrenome" placeholder="Digite seu sobrenome" />
    <!--  v-on:keydown="$emit('input',value.sobrenome)" -->
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
    components:{Rotulo},
  props: {
    value: {
      type: Object,
      require: true
    }
  },
  methods:{
      alterarNome(event){
          this.$emit('input',{nome:event.target.value, sobrenome:this.value.sobrenome})
      },
      alterarSobrenome(event){
          this.$emit('input',{nome:this.value.nome, sobrenome:event.target.value})
      }
  }
};
</script>

<style>
</style>