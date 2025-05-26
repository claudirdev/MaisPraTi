// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 3 - EXTRAIR PALAVRAS UNICAS DE UMA STRING EM UM ARRAY
// -----------------------------------------------------------------------------------------------------

let frase = "olá teste1 olá mundo mundo teste2";
let palavras = frase.split(" ");     //separa a string em palavras
let unica = [];

for(let i = 0; i < palavras.length; i++) {   //pega palavra por palavra do split
    let palavra = palavras[i];
    let repetida = false;

    for(let x = 0; x < palavras.length; x++) {
        if(i !== x && palavra === palavras[x]) {  //testa se palavra já apareceu antes - sendo que i deve ser diferente de x
            repetida = true;
            break;
        }
    }

    if(!repetida) {
        unica.push(palavra);  // se encontrou apenas uma palavra insere no array unica
    }
}
console.log(unica);