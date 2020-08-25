const pessoa = {
    saudacao: 'Bom dia!',
    falar() {//ecme script 2015
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()