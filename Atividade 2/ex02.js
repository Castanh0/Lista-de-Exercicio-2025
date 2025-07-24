// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

let numSecreto = Math.floor(Math.random() * 100) + 1
let tentativa = 0
let chute = 0

while(chute !== numSecreto){
    chute = parseInt(prompt('Adivinhe um numero de 1 a 100: '))
    tentativa++

    if(chute < numSecreto){
        console.log('Mais Alto!')
    } else if (chute > numSecreto){
        console.log('Mais baixo!')
    } else {
        console.log(`Acertou! Tentativas: ${tentativa}`)
    }
}
