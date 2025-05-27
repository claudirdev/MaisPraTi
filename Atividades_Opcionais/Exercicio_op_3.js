// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE OPCIONAL - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 3 - CALCULAR PREÇO DA PASSAGEM DE ACORDO COM DISTANCIA
// // Instruções Uso:
// Informe a distância a ser percorrida para descobrir o valor da passagem
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require("prompt-sync")();
let distancia = parseFloat(prompt('Digite a distância da viagem (Km): '));
let limiteDistancia = 200;
let valorPerto = 0.5;
let valorLonge = 0.45;
let valorPassagem = 0;
if(distancia > limiteDistancia){
    valorPassagem = distancia * valorLonge;
}else
    valorPassagem = distancia * valorPerto;
console.log('\nO valor da passagem para uma viagem de ' + distancia + ' Km é de R$ ' + valorPassagem.toFixed(2) + '\n')