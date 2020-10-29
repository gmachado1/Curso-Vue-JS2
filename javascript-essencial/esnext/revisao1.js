//let e const
// let escopo de bloco 

{
    var a =2
    let b=3
    console.log(b)
}

console.log(a)

//Template String
let texto = `a variável "a"  é: ${a}`
console.log(texto)


//destructuring
const [l,e, ...tras] = "Gustavo"
console.log(l,e,tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {nome,idade:i} = {nome:'Gustavo', idade:37}
console.log(i,nome)