// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// memoize (técnica usada para evitar repetições de calculos)

function memoize(fn){
    const cache = {}

    return function(...args){
        const key = JSON.stringify(args)

        if(cache[key] !== undefined){
            return cache[key]
        }

        const resultado = fn.apply(this, args)
        cache[key] = resultado
        return resultado
    }
}

function soma(a, b){
    console.log("Calculando")
    return a + b
}

let memoSoma = memoize(soma)

console.log(memoSoma(2, 3))
console.log(memoSoma(2, 3))
console.log(memoSoma(3, 2))
