new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado(neu, old) {
            console.log(`valores novo:${neu} valor antigo ${old}`)
            setTimeout(() => {
                this.valor = 0
            },5000)
        }
    },
    computed: {
        resultado() {
            return (this.valor == 37) ? 'Valor = 37' : 'Valor diferente'

        }
    }
});