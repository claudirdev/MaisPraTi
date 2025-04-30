// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 11 - CALCULA SOMA DE CINCO NUMEROS INFORMADOS
// Instruções Uso:
// Informe cinco numeros e pressione <ENTER> para ter a soma total em tela.
// -----------------------------------------------------------------------------------------------------
console.clear();
const prompt = require('prompt-sync')();
let soma = 0;
let i = 0;
for (i=1; i<= 5; i++) {
    let numero = parseFloat(prompt('Informe o ' + i + 'º número: '));
    soma += numero;
}
console.log('\n A soma total dos 5 números é: ' + soma + '\n');

// -----------------------------------------------------------------------------------------------------