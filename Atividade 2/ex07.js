// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    {nome: 'Celular', preco: 3120},
    {nome: 'Notebook', preco: 600},
    {nome: 'TV', preco: 310},
    {nome: 'Sofá', preco: 3000}
]

function Nomes(){
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(p => p.nome)
}

console.log(Nomes())
