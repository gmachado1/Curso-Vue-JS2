<template>
    <div>
        <h1>{{global}}</h1>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
</template>

<script>
import frutasMixin from './frutasMixins'
import usuarioMixin from "./usuarioMixin";

export default {
     mixins:[frutasMixin,usuarioMixin] 
        
    //ESTA no MIXIN
    // data(){
    //     return {
    //         fruta:'',
    //         frutas:['banana', 'maçã', 'laranja']
    //     }
    // },
    // methods:{
    //     add(){
    //         this.frutas.push(this.fruta)
    //         this.fruta = ''
    //     }
    //}
}
</script>

<style>

</style>