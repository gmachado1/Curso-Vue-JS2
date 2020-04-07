<template>
  <div class="usuario-detalhe">
      <h3>Detalhe Usuário</h3>
            <hr>
      <p><strong>Código:</strong>{{id}} / {{$route.params.id }}</p>
<!-- :to="`/usuario/${id}/editar`" -->
      <router-link tag="button" primario :to="{name:'editarUsuario',
       params:{id}, query:{completo:true, lingua:'pt'}, hash:'#rodape'}">Editar</router-link> 
       <!-- :$route.params.id -->
  </div>
</template>

<script>
export default {
    props:['id'],
    // data(){
    //     return {id: this.$route.params.id}

    // },
    // watch:{
    //     $route(to,from){
    //        this.id = to.params.id 
    //     }
    // },
}
</script>

<style>

</style>