new Vue({
    el: '#desafio',
    data: {
        nome: 'Gustavo',
        idade: '37',
        idadem3: 37 * 3,
        url: "https://img.elo7.com.br/product/zoom/1C33CB2/quadro-tela-animais-cavalo-decoracao-telas-cavalos-0001.jpg",
        urlHtml: '<img src="https://img.elo7.com.br/product/zoom/1C33CB2/quadro-tela-animais-cavalo-decoracao-telas-cavalos-0001.jpg" height="600" >'
    },
    methods: {
        multiplicaIdade: function (x) {
            console.log(this.idade * x)
            return this.idade * x
        },
        numeroRandomico: function () {
            return Math.random()
        }
    }
})
