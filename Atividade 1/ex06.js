// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

let a = Number(prompt('Digite um número do lado A: '))
let b = Number(prompt('Digite um número do lado B: '))
let c = Number(prompt('Digite um número do lado C: '))

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Triângulo equilátero: possui todos os lados iguais')
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo isósceles: possui dois lados iguais')
    } else {
        console.log('Triângulo escaleno: possui todos os lados diferentes')
    }
} else {
    console.log('Os valores não formam um triângulo')
}
