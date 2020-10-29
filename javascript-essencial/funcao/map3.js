Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray

}
const carrinho = [
    '{ "nome":"Borracha", "preco":3.45}',
    '{ "nome":"Caderno", "preco":13.90}',
    '{ "nome":"Lápis", "preco":1.00}',
    '{ "nome":"Caneta", "preco":7.50}',
]

//retorar um array apenas com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = p => p.preco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)