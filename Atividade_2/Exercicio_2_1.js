// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 1 - FUNÇÃO QUE VERIFICA SE OS VALORES INFORMADOS FORMAM UMA DATA VÁLIDA
// -----------------------------------------------------------------------------------------------------

function ehDataValida(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia);          // cria um objeto Date  - mês -1 pois em JS Janeiro começa em 0 (vai de 0 a 11)                                              
    return (data.getDate() === dia && data.getMonth() === mes - 1 && data.getFullYear() === ano); 

}
console.log(ehDataValida(25, 12, 2025));
console.log(ehDataValida(31, 2, 2025));
