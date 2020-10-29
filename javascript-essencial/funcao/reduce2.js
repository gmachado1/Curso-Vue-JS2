const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]
// todos os alunos são bolsistas?
//minha solucao
// const todosAlunosBolsistas = alunos.reduce(function (acumulador, atual) {
//     if (!atual.bolsista && acumulador)
//         acumulador = false
//     return acumulador
// }, true)
// console.log("todosAlunosBolsistas: "+todosAlunosBolsistas)
//solucao do curso
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log("todosBolsistas: " + alunos.map(a => a.bolsista).reduce(todosBolsistas))

//algum aluno é bolsista?
// const algumAlunosBolsistas = alunos.reduce(function (acumulador, atual) {
//     if (atual || acumulador)
//         acumulador = true
//     return acumulador
// }, false)
// console.log("algumAlunosBolsistas: "+algumAlunosBolsistas)
//solucao do curso
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log("algumBolsista: " + alunos.map(a => a.bolsista).reduce(algumBolsista))