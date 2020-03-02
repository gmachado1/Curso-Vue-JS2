new Vue({
	el: '#desafio',
	data: {
		destaque: true,
		encolher: false,
		exercicio3: false,
		perigo:true,
		classe3 : '',
		classe4:'',
		cor5:'',
		estilo5:{
			width:'100px',
			height: '100px'
		},
		width:'0'
	},
	methods: {
		iniciarEfeito() {
			destaque = this.destaque
			encolher = this.encolher
			setInterval(() => {
				if (destaque) {
					this.destaque = false
					this.encolher = true
				} else {
					this.destaque = true
					this.encolher = false
				}
			}, 1000);
		},
		setPerigo(event){
			if(event.target.value =="true"){
				this.perigo = true
			}else if(event.target.value == "false"){
				this.perigo = false
			}
		},
		iniciarProgresso(){
			console.log('iniciarProresso')
			let valor = 0
			const temporizador = setInterval(() =>{
				valor += 5
				this.width = `${valor}%`
				if(valor==100) clearInterval(temporizador)
			},500)
		}
	}
})
