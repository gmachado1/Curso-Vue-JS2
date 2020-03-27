import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')

Vue.filter('contagem',function(valor){	
	let arr = valor.split(' ')
	let Toreturn = ""
	for(let i = 0 ;i < arr.length;i++){
		Toreturn += arr[i] + `(${arr[i].length})` 
	}
	return Toreturn
})

Vue.filter('contarPalavras',function(valor){	
	return valor.split(' ').map( p => p + `(${p.length})`).join(' ')
})