// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 5 - DEBOUNCE ( atrasa ou limita a execução de uma função, evitando chamadas repetidas )
// -----------------------------------------------------------------------------------------------------

function debounce(fn, delay) {
    let timeout;

    return function (...args) {               
        clearTimeout(timeout);                
        timeout = setTimeout(() => {
            fn.apply(this, args);             //executa a função original - this:mantem o contexto - args: pega os argumentos passados
        }, delay);
    }
}

function startServices(serviceName) {
    console.log(`${serviceName} started.`);
}

let debounceService = debounce(startServices,3000);

debounceService("Service 1");
debounceService("Service 2");             //cancela a anterior se chamada dentro do tempo definido (3s) e agenda para ser executada dentro de 3s






// return function (...args)	Cria uma função que aceita qualquer número de argumentos. PEga os argumentos e coloca em um array 'args'
// clearTimeout(timeout)	Cancela o timer anterior
// setTimeout(..., delay)	Espera o tempo antes de executar a função
// fn.apply(this, args)	Executa a função original com os argumentos corretos