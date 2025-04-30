// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 7 - CALCULAR VALOR TOTAL DE COMPRA
// Instruções Uso:
// Informe a quantidade de maçãs compradas e pressiona <ENTER> para que seja calculado o valor total da compra.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require ('prompt-sync')();
const precoComDesconto = 0.25;
const precoSemDesconto = 0.30;
const quantidadeCorte = 12;
let totalCompra = 0;
let quantidadeComprada = parseInt(prompt('Informe quantidade de maçãs compradas: '));
if (quantidadeComprada > 0) {
    if (quantidadeComprada >= quantidadeCorte){
        totalCompra = quantidadeComprada * precoComDesconto;
    } else {
        totalCompra = quantidadeComprada * precoSemDesconto;
    }
    console.log('\n O Valor Total da compra de ' + quantidadeComprada + ' maçã(s) foi de R$ ' + totalCompra.toFixed(2) + '\n');        
} else {
    console.log('\n Quantidade deve ser maior que zero! \n');
}

// -----------------------------------------------------------------------------------------------------
