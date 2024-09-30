//Declarar variáveis nome, xp e nível do personagem
const herois = [
    {nome: 'Moubu', xp: 9777},
    {nome: 'Shin', xp: 6117},
    {nome: "Ouki", xp: 11000},
    {nome: 'Shousa', xp: 3425},
    {nome: 'Felipão', xp: 15000}
]
let nivel = " "
//Detemrinar nível do personagem
function determinarNivel(xp) {
if (xp <= 1000) {
 nivel = 'Ferro'
}
else if (xp >= 1001 && xp < 2000) {
 nivel = 'Bronze'
}
else if(xp >= 2001 && xp < 4000) {
 nivel = 'Prata'
}
else if (xp >= 4001 && xp < 5000) {
  nivel = 'Ouro'
}
else if(xp >= 5001 && xp < 6000) {
  nivel = 'Platina'
}
else if (xp >= 6001 && xp < 8000) {
    nivel = 'Diamante'
}
else if(xp >= 8001 && xp < 9000) {
 nivel = 'Ascendente'
}
else if (xp >= 9001 && xp < 10000) {
  nivel = 'Imortal'
}
else {
   nivel = 'Radiante'
}
return nivel
}

//Loop para chamar o Herói
for (let i = 0; i < herois.length; i++) {
    let heroi = herois [i]
    let nivel = determinarNivel(heroi.xp)

//Mensagem final
console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel}`)

}