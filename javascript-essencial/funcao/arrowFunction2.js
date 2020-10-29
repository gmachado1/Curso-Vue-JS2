function Pessoa() {
    this.idade = 0
    let self = this
    setInterval(() => {
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa