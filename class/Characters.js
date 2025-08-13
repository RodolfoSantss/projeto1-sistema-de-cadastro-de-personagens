class Characters {
    #vida
    constructor(nome, classe, vida) {
        this.nome = nome
        this.classe = classe
        this.#vida = vida
    }
    
    characterInfos() {
        console.log(`Nome: ${this.nome} \nClasse: ${this.classe} \nVida: ${this.#vida}
        `)
    }

    atack() {
        console.log(`${this.nome} está atacando!`)
    }
}

module.exports = Characters