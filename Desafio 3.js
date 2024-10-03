class Hero{ //Aqui eu defino a classe
    constructor(classe, idade, tipo){ //Toda classe deve ter o método oficial chamado 'constructor'
        this.classe = classe
        this.idade = idade
        this.tipo = tipo
 
    } 

    //Método de ataque

    atacar() {
        let ataque

    //Estrutura de decisão para identificar o herói e o tipo de ataque

    if (this.tipo === 'mago'){
        ataque = 'magia'
    } else if(this.tipo === 'guerreiro'){
        ataque = 'espada'
    } else if(this.tipo === 'ninja'){
        ataque = 'shuriken'
    } else if (this.tipo === 'monge'){
        ataque = 'artes marciais'
    } else if(this.tipo === 'dragonkind'){
        ataque = 'sopro do dragão'
    } else if(this.tipo === 'Lobisomen'){
        ataque = 'garras ferozes'
    }

    //Exibir a mensagem
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

    //Usando
    const heroi1 = new Hero('Moubu', 63, 'guerreiro')
    const heroi2 = new Hero('Felipão', 32, 'monge')
    const heroi3 = new Hero('Michael', 29, 'lobisomen')
    const heroi4 = new Hero('Arthorius', 47, 'dragonkind')
    const heroi5 = new Hero('Mamasuke', 30, 'ninja')

    heroi4.atacar()