//Função em JS é First-Class Object (Citizens)
//higher-order function 

// criar de forma literal
function fun1(){
    //return undefined caso nao retorne nada
}

//armazenar em uma variável
const fun2 = function(){} //funcao anônima

//armazenar uma funcao em um array
const array = [function(a,b){return a+b}, fun1, fun2]

console.log(array[0](2,4))

//armazenar em um atributo de objeto
const obj = {}

obj.falar = function(){return 'Opa'}

console.log(obj.falar())


//passar funcao como paramentro 
function run(fun){
    fun()
}

run(function(){console.log('executando...')})

// uma funcao pode retornar/conter uma outra funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cinco = soma(2,3)
cinco(5)

