// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// EXERCICIOS 1 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 6 - VERIFICAR SE MEDIDAS FORMAM UM TRIANGULO E CLASSIFICAR
// Instruções Uso:
// Informe três medidas e pressione <ENTER> para verificar se trata-se de um triângulo e classificar 
// em Isósceles, Escaleno ou Equilátero.
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let ladoA = parseFloat(prompt('Informe a medida do Lado A: '));
let ladoB = parseFloat(prompt('Informe a medida do Lado B: '));
let ladoC = parseFloat(prompt('Informe a medida do Lado C: '));
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log('\n As medidas devem ser maiores que zero! \n');
}
let tipoTriangulo;
let eTriangulo = (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB));   // Retorna True na variavel se for Triangulo
if (eTriangulo){                                                                                    // Verifica se é Triangulo
    if (ladoA === ladoB && ladoB === ladoC){
        tipoTriangulo = 'EQUILÁTERO';        
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        tipoTriangulo = 'ISÓSCELES';        
    } else {
        tipoTriangulo = 'ESCALENO';        
    }
    console.log('\n As medidas informadas correspondem a um Triângulo!');
    console.log(' Trata-se de um Triângulo do tipo ' + tipoTriangulo + '! \n');
} else {
        console.log('\n As medidas informadas NÃO correspondem a um Triângulo! \n' );
}   

// -----------------------------------------------------------------------------------------------------

