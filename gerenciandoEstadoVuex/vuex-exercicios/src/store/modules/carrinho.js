export default{
    namespaced:true,
    state:{
        produtos:[],

    },
    getters:{
        valorTotal(state){

        return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)   
        }
    },
    mutations:{
        adicionarProduto(state, payload){ //payload => produto
           state.produtos.push(payload)     
        }
    },
    actions:{
        // adicionarProduto(context,payload){
        // adicionarProduto({commit},payload){ //desmembrando o context
        //     setTimeout(()=>{
        //         commit('adicionarProduto',payload)
        //         // context.commit('adicionarProduto',payload)
        //     },1000)
        // }
        adicionarProduto:{
            root:true,
            handler({commit},payload){
                setTimeout(()=>{
                    commit('adicionarProduto',payload)
                },1000)
            }
        }
    }
}