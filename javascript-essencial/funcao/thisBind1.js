const pessoa = {
    saudacao: 'Bom dia!',
    falar() {//ecme script 2015
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflit entre paradigma: funcional e OO
// bind serve para dizer quem seraá o resolvedor de "this" --amarra
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()