<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <!-- javascript -->
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque="'blue'">Usando diretivas personalizadas</p>
    <p v-destaque="cor">Usando diretivas personalizadas</p>

    <p v-destaques:fundo.atrasar="'lightblue'">Usando diretivas personalizadas</p>
    <p v-destaques="cor">Usando diretivas personalizadas</p>

    <p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretivas personalizadas</p>
    <p v-destaque-local:atrasar.alternar="cor">Usando diretivas personalizadas</p>
   
    <p v-destaque-local:atrasar.alternar.fundo="{cor1:'green', cor2:'red',atraso:2000, intervalo:200}">Usando diretivas personalizadas</p>
    <p v-destaque-local:atrasar="{cor1:'green',atraso:2000}">Usando diretivas personalizadas</p>
    <!--  <p v-teste:argumento.modificador1.modificador2...="'valor'"<> -->
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        const aplicarCor = cor => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) {
          atraso = binding.value.atraso;
        }

        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
          aplicarCor(binding.value);
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: "red"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
