new Vue({
    el: "#app",
    data: {
        running: true,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            //console.log(especial, this.getRandom(5, 10))
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0)
                this.hurt('playerLife', 7, 12, especial, 'Monstro', 'Jogador', 'monster')
        },
        hurt(prop, min, max, especial, source, target, cls) { // source = origem do ataque/target=destino ataque
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this.playerLife - hurt, 0)//maior entre os 2 numeros zero ou a subtracao
            this.registerLog(`${source} atigiu ${target} com ${hurt}.`,cls)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou ${heal} de vida`, 'player')
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls }) //unshift => deixa sempre na primeira posição colocando o resto pra baixo


        }

    }, watch: {
        hasResult(value) {
            if (value) {
                this.running = false
            }
        }
    }
})