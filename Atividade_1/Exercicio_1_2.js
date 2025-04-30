// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 2 - CLASSIFICAR IDADE EM CATEGORIAS
// Instruções Uso:
// Informe a idade da pessoa e pressione <ENTER> para descobrir em qual categoria ela está classificada.
// Critérios: Idoso (a partir de 65) - Adulto ( 18 a 64) - Adolescente (13 a 17) - Criança (até 12)
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let idade = parseInt(prompt ('Informe a idade da pessoa: '));
if (idade >= 65){
    console.log('\n A pessoa está classificada como IDOSO! \n');
} else if (idade >= 18 && idade <= 64){
    console.log('\n A pessoa está classificada como ADULTO! \n');
} else if (idade >= 13 && idade <= 17){
    console.log('\n A pessoa está classificada como ADOLESCENTE! \n');
} else {
    console.log('\n A pessoa está classificada como CRIANÇA! \n');
}

