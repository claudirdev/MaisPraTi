// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 15 - GERAR SEQUENCIA FIBONACCI COM 10 TERMOS
// Instruções Uso:
// Execute o programa para ter os 10 primeiros termos da Sequencia Fibonacci.
// -----------------------------------------------------------------------------------------------------

console.clear();
let numeroTermos = 10;
let valorA = 0;
let valorB = 1;
let valorProximo;
let resultado = '';
let i = 0;
for(i=1; i<=numeroTermos; i++){    
    resultado += valorA;
    if (i < 10) {
        resultado += ' - ';               
    }      
    valorProximo = valorA + valorB;
    valorA = valorB;
    valorB = valorProximo;
}
console.log('Sequencia Fibonacci');
console.log('--------------------')
console.log('\n Os primeiros 10 termos da Sequencia Fibonacci são:');
console.log(' [' + resultado + ']\n');

// -----------------------------------------------------------------------------------------------------