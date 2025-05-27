// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE OPCIONAL - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 5 - JOGO PEDRA-PAPEL-TESOURA
// // Instruções Uso:
// Jogue o jogo Pedra-Papel-Tesoura
// -----------------------------------------------------------------------------------------------------
console.clear();
let prompt = require('prompt-sync')();
let jogador1 = prompt('Jogador 1 (Pedra-Papel-Tesoura): ');
let jogador2 = prompt('Jogador 2 (Pedra-Papel-Tesoura): ');

if(jogador1 === jogador2){
    console.log('Jogo empatado!')
} else if (jogador1 === 'Pedra' && jogador2 === 'Tesoura'){
    console.log('Jogador 1 é o ganhador!');        
} else if (jogador1 === 'Papel' && jogador2 === 'Pedra'){
    console.log('Jogador 1 é o ganhador!');        
} else if (jogador1 === 'Tesoura' && jogador2 === 'Papel'){
    console.log('Jogador 1 é o ganhador!');        
} else {
    console.log('Jogador 2 é o ganhador!');        
}
