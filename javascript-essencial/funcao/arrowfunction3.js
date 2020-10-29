let comparaComThis = function(params){
    console.log(this == params)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
console.log("-- arrow --")
let compracaComThisArrow = params => console.log(this == params)
compracaComThisArrow(global)
compracaComThisArrow(module.exports)
compracaComThisArrow(this)
console.log("-- bind --")
compracaComThisArrow = compracaComThisArrow.bind(obj)
compracaComThisArrow(obj)
compracaComThisArrow(module.exports)