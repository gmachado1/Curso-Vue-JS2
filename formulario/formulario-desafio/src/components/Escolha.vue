<template>
  <div class="escolha" @click="$emit('input', !value)"
  :class="{ligado:value, desligado:!value}">
    <div class="botao"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      require: true
    }
  }
};
</script>

<style scoped>
.escolha {
  border: 1px solid #aaa;
  border-radius: 20px;
  width: 40px;
  height: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.botao {
  position: absolute;
  margin: 0px 1px;
  height: 25px;
  width: 25px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 0px 5px #000b;
}
.desligado {
  background-color: #aaa;
}

.ligado {
  background-color: #7495c2;
}

.desligado .botao {
  left: -10px;
}

.ligado .botao {
  background-color: #255ca9;
  align-self: flex-end;
}
</style>