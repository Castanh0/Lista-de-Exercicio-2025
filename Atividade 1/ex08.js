// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite um valor: '))
let numero2 = Number(prompt('Digite outro valor: '))

if(numero1 === numero2){
    console.log('são valores iguais')
} else{
    let numeros = [numero1, numero2]
    numeros.sort((a, b) => a - b)

    console.log(`Numeros em ordem crescente: ${numeros[0]} e ${numeros[1]}`)
}

