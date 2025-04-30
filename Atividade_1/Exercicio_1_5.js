// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 5 - CÁLCULO DO IMC (INDICE MASSA CORPORAL)
// Instruções Uso:
// Informe a altura e peso da pessoa e pressione <ENTER> para descobrir o IMC e classificar sua categoria.
// Critérios: Baixo Peso (< 18.5) - Peso Normal ( 18.5 a 24.9) - Sobrepeso (25 a 29.9) - Obesidade (> 30)
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let imc = 0;
let classificacao;
let altura = parseFloat(prompt('Informe a sua altura (m): '));
let peso = parseFloat(prompt('Informe o seu peso  (kg): '));
imc = peso / (altura * altura);
if (imc < 18.5){
    classificacao = 'BAIXO PESO!';    
} else if (imc >= 18.5 && imc < 25){
    classificacao = 'PESO NORMAL!';    
} else if (imc >= 25 && imc < 30){
    classificacao = 'SOBREPESO!';    
} else {
    classificacao = 'OBESIDADE!';    
}
console.log('\n Seu IMC é ' + imc.toFixed(2) + '. Você está com ' + classificacao + '\n');

