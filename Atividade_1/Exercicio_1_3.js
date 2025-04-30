// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 3 - VERIFICA SITUAÇÃO DO ALUNO CONFORME NOTA INFORMADA
// Instruções Uso:
// Informe uma nota de 0 a 10 e pressione <ENTER> para descobrir a situação do aluno.
// Critérios: Aprovado (8 a 10) - Recuperação ( 5 a 7.9) - Reprovado (0 a  4.9)
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let nota = parseFloat(prompt('Informe a Nota do aluno (0 a 10): '));
if (nota >= 8 && nota <= 10){
    console.log('\n O aluno está APROVADO! \n');
} else if (nota >= 5 && nota < 8){
    console.log('\n O aluno está em RECUPERAÇÃO! \n');
} else if (nota >= 0 && nota < 5){
    console.log('\n O aluno está REPROVADO! \n');
} else {
    console.log('\n Nota Inválida! \n');
}

// -----------------------------------------------------------------------------------------------------
