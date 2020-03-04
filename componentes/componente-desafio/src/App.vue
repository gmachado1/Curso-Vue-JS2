<template>
  <div id="app">
    <v-app>
      <app-menu></app-menu>

      <v-toolbar app>
       <app-toolbar></app-toolbar>
      </v-toolbar>

      <v-content>
        <app-carousel></app-carousel>
      </v-content>
      <!-- parte do footer-->
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from "./components/templates/Footer.vue";
import Carousel from "./components/widgets/Carousel.vue";
import Menu from "./components/templates/Menu.vue";
import Toolbar from "./components/templates/Toolbar.vue"

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
	"app-menu": Menu,
	"app-toolbar":Toolbar
  }
}
</script>
