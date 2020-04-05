import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})
Vue.mixin({
	data(){
		return {global:'Estou no mixin global'}
	},
	created(){
		console.log('create mixin global')
	}
})

new Vue({
	render: h => h(App),
	created(){
		console.log('create vue instance')
	}
}).$mount('#app')
