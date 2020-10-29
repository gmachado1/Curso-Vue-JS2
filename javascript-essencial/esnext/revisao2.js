//arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


//parametros default
function log(texto = "node") {
    console.log(texto)
}
log()
log(null)
log('sou mais forte')

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
function total2(...numeros) {
    let soma = (a, b) => a + b
    return numeros.reduce(soma, 0)
}
console.log(total(2, 3, 4, 5))
console.log(total2(2, 3, 4, 5))