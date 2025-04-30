// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 4 - CRIAR MENU INTERATIVO
// Instruções Uso:
// Escolha uma opção informando o numero do item de menu e pressione <ENTER> para entrar na opção desejada.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
console.log('MENU');
console.log('1 - Incluir');
console.log('2 - Alterar');
console.log('3 - Excluir');
console.log('0 - Sair')
let opcaoMenu = parseInt(prompt('Informe a opção desejada: '));
switch (opcaoMenu){
    case 1:
        console.log('\n Você selecionou a opção 1-INCLUIR \n');
        break;
    case 2:
        console.log('\n Você selecionou a opção 2-ALTERAR \n');
        break;
    case 3:
        console.log('\n Você selecionou a opção 3-EXCLUIR \n');
        break;    
    case 0:
        console.log('\n Você saiu do Sistema \n');
    break;
    default:
        console.log('\n Opção inválida! \n');
}

// -----------------------------------------------------------------------------------------------------
