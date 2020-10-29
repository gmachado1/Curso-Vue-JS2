const carrinho = [
    '{ "nome":"Borracha", "preco":3.45}',
    '{ "nome":"Caderno", "preco":13.90}',
    '{ "nome":"Lápis", "preco":1.00}',
    '{ "nome":"Caneta", "preco":7.50}',
]

//retorar um array apenas com os precos
const objects = carrinho.map(c => JSON.parse(c))
const precos = objects.map( o => o.preco)
console.log(precos)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = p => p.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)