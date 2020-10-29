const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const notas = alunos.map(a => a.nota)
console.log(notas)
const resultado = notas.reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
},10)

console.log(resultado)