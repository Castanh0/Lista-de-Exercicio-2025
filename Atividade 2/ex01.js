// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){
    if(mes < 1 || mes > 12 || dia < 1 || ano < 1){
        return false
    }
    let diaMes

    switch(mes){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            diaMes = 31
            break
        case 4: case 6: case 9: case 11:
            break
        case 2:
            if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                diaMes = 29;
            } else {
                diaMes = 28;
            }
            break
        default:
            return false
    }
    return dia <= diaMes
}
console.log(ehDataValida(29, 2, 2024))
console.log(ehDataValida(29, 2, 2023))
console.log(ehDataValida(31, 4, 2023))
console.log(ehDataValida(31, 12, 2023))
console.log(ehDataValida(0, 1, 2023))