// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log(' === ARMAMENTO CS === ')
console.log('1 - KARAMBIT')
console.log('2 - AK47')
console.log('3 - USP')

let escolha = prompt('Escolha o numero que voce quer 1 a 3: ')

switch (escolha){
    case '1':
        console.log('Voce escolheu a karambit')
        break
    case '2':
        console.log('Voce escolheu a ak47')
        break
    case '3':
        console.log('Voce escolheu a usp')
        break
    default:
        console.log('Voce não escolheu nenhuma das opções')
    }