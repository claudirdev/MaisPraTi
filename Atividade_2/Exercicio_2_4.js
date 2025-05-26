// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 4 - FATORIAL RECURSIVO
// -----------------------------------------------------------------------------------------------------

function fatorial(n) {
    if(n === 0){
        return 1;
    }else if(n < 0){
        throw new Error("\nValor inválido!\n")    
    } else {
        return n * fatorial(n -1);
    }
}
console.log(fatorial(-2));
