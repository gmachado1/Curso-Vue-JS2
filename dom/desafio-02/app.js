new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('desafio 2!')
        },
        armazenar(event){
            this.valor =event.target.value 
        }
    }
})