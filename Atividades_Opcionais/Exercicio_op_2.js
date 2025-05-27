// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE OPCIONAL - CLAUDIR R. KRAULICH - 29/04/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 2 - CALCULAR MULTA DE CARRO QUE ULTRAPASSA LIMITE DE VELOCIDADE
// Instruções Uso:
// Informe a velocidade para verificar se foi multado e qual o valor da multa
// -----------------------------------------------------------------------------------------------------
console.clear();
const prompt = require('prompt-sync')();
let velocidade = parseInt(prompt('Informe a velocidade: '));
let valorKm = 5;
let limiteVelocidade = 80;
let valorMulta = 0;
if(velocidade > limiteVelocidade){
    valorMulta = (velocidade - limiteVelocidade) * valorKm;
    console.log('\nVocê excedeu o limite de velocidade de ' + limiteVelocidade + ' Km/h e será multado em R$ ' + valorMulta.toFixed(2) + '\n');
} else{
    console.log('\nVocê está dentro do limite de velocidade da via!\n')
}