// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

console.log(' === IMC ===' )

let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura: '))

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log('Baixo peso')
} else if(imc >=18.5 && imc <= 24.9){
    console.log('Peso Normal')
} else if(imc >=25 && imc <=29.9){
    console.log('Sobrepeso')
} else{
    console.log('Obesidade')
}

console.log(`Seu IMC é: ${imc}`)