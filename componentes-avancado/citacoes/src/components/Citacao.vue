<template>
  <div class="citacao">
    {{texto}}
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
import Citacoes from "./Citacoes";

export default {
  components: { Citacoes },
  props: ["texto"],
  destroyed() {
    console.log("destroyed");
  },
  created() {
    console.log("created");
  },
  activated(){
      console.log('activated')
  },
  deactivated(){
      console.log('deactivated')
  }
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
