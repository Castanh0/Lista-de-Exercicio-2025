// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {cliente: 'Ana', total: 400},
    {cliente: 'Matheus', total: 200},
    {cliente: 'Pedro', total: 400},
    {cliente: 'João', total: 700},
]

function TotalDoCliente(){
    return vendas.reduce((acumulador, vendas) => {
        let cliente = vendas.cliente

        if(!acumulador[cliente]){
            acumulador[cliente] = 0
        }

        acumulador[cliente] += vendas.total
        return acumulador
    }, {})
}
console.log(TotalDoCliente());

