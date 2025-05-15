// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 1 - CALCULAR REDUÇÃO DE VIDA DE UM FUMANTE
// Instruções Uso:
// Informe um a quantidade de cigarros e o tempo que fuma para descobrir a redução de vida.
// -----------------------------------------------------------------------------------------------------
console.clear();
const prompt = require('prompt-sync')();
let reducaoPorDia = 0;
let reducaoTotal = 0;
let resultado = 0;
let quantidadeCigarros = parseInt(prompt('Cigarros consumidos por dia: '));
let anosFumante = parseInt(prompt('Quantos anos é fumante: '));
reducaoPorDia = quantidadeCigarros * 10;
reducaoTotal = reducaoPorDia * (anosFumante * 365);
resultado = reducaoTotal / 1440;

console.log('\nFumando ' + quantidadeCigarros + ' cigarro(s) por dia, durante ' + anosFumante + ' ano(s), você já reduziu sua vida em ' + resultado.toFixed(1) + ' dia(s).\n')
