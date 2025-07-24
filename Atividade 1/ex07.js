// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

console.log(' === Maça === ')
console.log('R$ 0.30 - Menos que uma Duzia')
console.log('R$ 0.25 - Pelo Menos Doze')

let compra = Number(prompt('Digite o numero de maça que voce quer: '))
let preco 

if (compra < 12){
    preco = 0.30
} else {
    preco = 0.25
}

let total = compra * preco
console.log(`Cada maça custa R$ ${preco}`)
console.log(`O valor total da compra: R$ ${total}`)