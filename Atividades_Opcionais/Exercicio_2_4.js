// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 4 - DESCOBRIR SE COM TRES SEGMENTOS INFORMADOS É POSSIVEL FORMAR UM TRIANGULO
// // Instruções Uso:
// Informe o tamanho de três segmentos de reta e pressione <ENTER> para descobrir se é possivel formar
//  um triangulo 
// -----------------------------------------------------------------------------------------------------
console.clear();
let prompt = require('prompt-sync')();
let retaA = parseFloat(prompt('Informe o tamanho da reta A: '));
let retaB = parseFloat(prompt('Informe o tamanho da reta B: '));
let retaC = parseFloat(prompt('Informe o tamanho da reta C: '));
if(retaA < retaB + retaC && retaB < retaA + retaC && retaC < retaA + retaB){
    console.log('\nCom as três retas informadas é possível formar um Triângulo\n')
} else {
    console.log('\nCom as três retas informadas NÃO possível formar um Triângulo\n')
}
