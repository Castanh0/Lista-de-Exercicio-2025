// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um numero: '))
let fatorial = 1
let contador = numero

while (contador > 1){
    fatorial *= contador
    contador--
}

console.log(`O fatorial de ${numero} é: ${fatorial}`)