// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um numero aleatório: '))

if (numero % 2 === 0){
    console.log('PAR')
} else{
    console.log('IMPAR')
}