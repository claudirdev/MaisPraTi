// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 2 - JOGO DE ADIVINHAÇÃO DE NUMERO ALEATÓRIO
// -----------------------------------------------------------------------------------------------------

console.clear();
const prompt = require('prompt-sync')();
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let ehCorreto = false;

while (!ehCorreto) {
    //console.log(numeroAleatorio);
    let n = parseInt(prompt ('Tente adivinhar um número inteiro entre 1 e 100 (0 p/ sair): '));

    if(isNaN(n) || n < 0 || n > 100){
        console.log("Valor Inválido! Informe um número inteiro entre 1 e 100!");
        continue;
    }
    if(n === 0) {
        console.clear();
        console.log("Jogo encerrado!")
        break;        
    }    
    if(n > numeroAleatorio) {     
        console.log("\nNão foi desta vez! Tente um número mais baixo!\n");
    }else if(n < numeroAleatorio){
        console.log("\nNão foi desta vez! Tente um número mais alto!\n");
    } else {
        console.log(`\nParabéns, você acertou! O número ${numeroAleatorio} está correto!\n`);
        ehCorreto = true;
    }
}

