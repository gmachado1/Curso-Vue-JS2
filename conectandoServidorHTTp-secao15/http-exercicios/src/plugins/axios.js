import Vue from 'vue'
import axios from 'axios'


// axios.defaults.baseURL = "https://curso-vue-8601c.firebaseio.com/"
//outras formas de autenticacao
// axios.defaults.headers.common['Authorization'] = 'abc123' //token
// axios.defaults.headers.common['Accepts'] = 'application/json' //

Vue.use({
    install(Vue){
    //    Vue.prototype.$http = axios 
       Vue.prototype.$http = axios.create({
            baseURL:"https://curso-vue-8601c.firebaseio.com/",
            headers:{"Authorization" : "abc123"}
                // get:{"Authorization" : "abc123"}
                // put:{"Authorization" : "abc123"},
                // post:{"Authorization" : "abc123"}
            //}
       })

    //    Vue.prototype.$http.interceptors.request.use(config =>{
    //        console.log(config.method)
    //        return config
    //    }, error => Promise.reject(error=>{
    //        console.log("Erro muito errado ocrorreu!")
    //    }))

    //    Vue.prototype.$http.interceptors.response.use(res=>{
    //     console.log('response - sucesso')
    //     const arr = []
    //     for(let chave in res.data){
    //         arr.push({id:chave, ...res.data[chave]}) //igual o de baixo
    //         // arr.push({id:chave, nome:res.data[chave].nome, email:res.data[chave].email })
    //     }
    //     res.data = arr
    //     return res
    // }, error => Promise.reject(error =>{
    //     console.log('response - erro')
        
    //    }))
    }
})