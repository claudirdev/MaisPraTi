// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 14 - CALCULAR O FATORIAL DE UM NÚMERO
// Instruções Uso:
// Informe o número que deseja calcular o Fatorial e pressione <ENTER> para exibir o resultado.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let fatorial = 1;
let numero = parseInt(prompt('Informe o número que deseja calcular o Fatorial: '));
if (!isNaN(numero) && numero > 0){
    for(i=numero; i>1; i--){    
        fatorial = fatorial * i;
    } 
    console.log('\n O Fatorial do número ' + numero + ' é ' + fatorial + '\n');
}else {
    console.log('\n Informar um número inteiro maior que zero! \n');
}

// -----------------------------------------------------------------------------------------------------
