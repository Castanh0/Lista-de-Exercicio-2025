// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

let pares = [
  ['AK47', 3500],
  ['AWP', 4500],
  ['USP', 700]
];

function paresParaObjetos(pares){
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor
        return obj
    }, {})
}

let resultado = paresParaObjetos([
    ['AK47', 3500],
    ['AWP', 4500],
    ['USP', 700]
])

console.log(resultado)

function objetoParaPares(obj){
    let pares = []

    for(let chave in obj){
        pares.push([chave, obj[chave]])
    }
    return pares
}

let armas = {
    AK47: 3500,
    AWP: 4500,
    USP: 700
}

console.log(objetoParaPares(armas))
