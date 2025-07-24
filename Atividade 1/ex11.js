// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let somaTotal = 0

for (let i = 1; i <=5; i++){
    let num = Number(prompt(`Digite o ${i} numero: `))
    somaTotal += num
}

console.log(`A soma dos 5 numeros deu: ${somaTotal}`)