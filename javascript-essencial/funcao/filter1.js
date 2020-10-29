const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const barato = p => p.preco < 2400
const fragil = p => p.fragil

const produtosCarosFragil = produtos.filter(barato).filter(fragil)
console.log(produtosCarosFragil)
