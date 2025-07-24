// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function Debounce(fn, delay){
    let timeId

    return function(...args){
        clearTimeout(timeId)

        timeId = setTimeout(() =>{
            fn.apply(this, args)
        }, delay)
    }
}

function hello(){
    console.log('Ola!! isso foi executado utilizando um DEBOUNCE')
}

let debounceHello = Debounce(hello, 1000)

debounceHello()
debounceHello()
debounceHello()
