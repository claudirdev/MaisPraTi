// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 12 - EXIBIR TABUADA DE NUMERO FORNECIDO
// Instruções Uso:
// Informe qual tabuada quer que seja exibida na tela (1 a 10) e pressione <ENTER> para ter o resultado.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require ('prompt-sync')();
let tabuada = parseInt(prompt("Digite a tabuada desejada: "));
let i = 1;
console.log();
console.log('Tabuada do ' + tabuada);
console.log('--------------');
if (tabuada >= 1 && tabuada <= 10){
    for(i=1; i<=10; i++){       
        console.log(tabuada + ' x '+ i + ' = ' + tabuada * i);        
    }
    console.log('\n Concluído! \n')   
} else {
    console.log('\n Escolha um número entre 1 e 10 \n');
}    

// -----------------------------------------------------------------------------------------------------
