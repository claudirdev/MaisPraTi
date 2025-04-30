// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 10 - ESCREVER UM NUMERO 10x NA TELA
// Instruções Uso:
// Informe um numero inteiro e pressione <ENTER> para que este seja repetido 10x na tela.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Informe um número: '));
let forma = prompt('Deseja listar na Horizontal (H) ou na Vertical (V): ').toUpperCase();
let i = 0;
let listaNumero = '';
if (forma === "V"){
    for (i=1; i<=10; i++){
        console.log(i + " - " + numero);
    } 
} else if (forma === "H"){
    for (i=1; i<=10; i++){
        listaNumero += numero;        
        if (i < 10) {
            listaNumero += ' - ';               
        }      
    } 
    console.log('\n listaNumero \n');    
} else {
    console.log('\n Opção Inválida! \n');
}

// -----------------------------------------------------------------------------------------------------
