// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 13 - RECEBER NUMEROS DECIMAIS E FAZER MEDIA ARITMÉTICA
// Instruções Uso:
// Informe numeros para calcular a média. Digite 0 seguido de <ENTER> quando quiser parar de informar os
// números e exibir a média.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let i = 0;
let media = 0;
let numero = parseFloat(prompt('Digite um número: '));
let soma = numero;
while(numero !==0){
    numero = parseFloat(prompt('Digite outro número: '));
    if (!isNaN(numero)){          //Se não digitar nenhum número não considera no contador
        i++;   
       soma = soma + numero;
    }
}
media = soma / i;
console.log('\n A média aritmética dos ' + i + ' números informados é ' + media.toFixed(2) + '\n');

// -----------------------------------------------------------------------------------------------------
