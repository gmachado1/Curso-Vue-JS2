//ES8 Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//Melhorias na notacao Literal
const nome = 'Carla'
const pessoa = {
nome,
ola(){
    return 'Oi gente!'
}
}

console.log(pessoa.nome, pessoa.ola())

class Animal {
    falar(){
        return 'generic'
    }
}
class Cachorro extends Animal {
    falar(){
        return 'au au'
    }
}
console.log(new Cachorro().falar())
