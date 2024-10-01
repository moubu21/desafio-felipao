
//Criar os heróis
const herois = [
    {nome: 'Moubu', vitorias: 97, derrotas: 2},
    {nome: 'Sam', vitorias: 101, derrotas: 3},
    {nome: 'Santo', vitorias: 52, derrotas: 22},
    {nome: 'Amendis', vitorias: 35, derrotas: 9},
    {nome: 'Ilza', vitorias: 87, derrotas: 21},
    {nome: "Seke", vitorias: 56, derrotas: 16},
    {nome: 'Felipao', vitorias: 150, derrotas: 0}
]

//Declarar variável nivel
let nivel = " "

//Função para determinar o nível do Herói
function determinarNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas

    if (saldo <= 10) {
        nivel = 'Ferro'
    }
    else if (saldo >= 11 && saldo <20) {
        nivel = 'Bronze'
    }
    else if (saldo >= 21 && saldo <50) {
        nivel = 'Prata'
    } else if (saldo >= 51 && saldo <80) {
        nivel = 'Ouro'
    } else if (saldo >= 81 && saldo <90) {
        nivel = 'Diamante'
    } else if (saldo >= 91 && saldo <100) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }
    return nivel
    }

    //Loop para chamar o Herói
    for(let i = 0; i <herois.length; i++) {
        let heroi = herois[i]
        let nivel = determinarNivel(heroi.vitorias, heroi.derrotas)

    //Mensagem final
    console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel} na ranqueada`)
}