<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <!-- <Menu></Menu> -->
    <router-view name="menu"></router-view>

    <transition
      mode="out-in"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rollOut"
    >
      <router-view />
    </transition>
    <router-view name="menuInferior"></router-view>
    <div id="rodape">
      <h3>Curso vue</h3>
    </div>
  </div>
</template>

<script>
import Menu from "./components/template/Menu";
export default {
  // components:{Menu}
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
