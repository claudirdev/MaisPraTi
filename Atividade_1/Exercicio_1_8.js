// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 8 - COLOCAR VALORES EM ORDEM CRESCENTE
// Instruções Uso:
// Informe dois valores distintos inteiros e pressione <ENTER> para organizar em ordem crescente
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require ('prompt-sync')();
let valor1 = parseInt(prompt('Digite o primeiro valor..: '));
let valor2 = parseInt(prompt('Digite o segundo valor...: '));
if (valor1 !== valor2){
    if (valor1 < valor2){
        console.log('\n Os valores em ordem crescente são: [' + valor1 + ' - ' + valor2 + '] \n');
    } else {
        console.log('\n Os valores em ordem crescente são: [' + valor2 + ' - ' + valor1 + '] \n');
    }    
} else {
    console.log('\n Os valores não podem ser iguais! \n');
}

// -----------------------------------------------------------------------------------------------------
