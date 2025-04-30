// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 1 - VERIFICA SE NUMERO É PAR OU IMPAR
// Instruções Uso:
// Informe um número inteiro e pressione <ENTER> para descobrir se o número é par ou impar.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let x = parseInt(prompt ('Digite um número inteiro: '));
if (x % 2 == 0){                                            //verifica se é divisível por 2
    console.log('\n O número ' + x + ' é PAR! \n');
} else {
    console.log('\n O número ' + x + ' é IMPAR! \n');
}

// -----------------------------------------------------------------------------------------------------
