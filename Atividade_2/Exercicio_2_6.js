// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 6 - MEMOIZE ( otimiza funções que são chamadas repetidamente com os mesmos argumentos,
//  armazenando em cache os resultados para evitar cálculos redundantes)
// -----------------------------------------------------------------------------------------------------

function memoize(fn) {
    const cache = new Map();                    //Cria um Map chamado cache para armazenar os resultados das chamadas da função fn.
    
    return function(...args) {                  //Retorna uma nova função, que pode receber qualquer quantidade de argumentos (...args). Esses argumentos serão usados para formar uma chave única.
        const key = JSON.stringify(args);       //Transforma os argumentos em uma string JSON. Isso garante que diferentes conjuntos de argumentos gerem chaves únicas. Exemplo: args = ['2, 3') vira key = "[2,3]".

        if(cache.has(key)) {                    //Verifica se já existe um valor armazenado no cache para essa chave.
            return cache.get(key);              //Se sim, retorna o valor armazenado sem precisar executar a função de novo.
        }
                                                //Se não tiver valor no cache:
        const result = fn.apply(this, args);    //Chama a função original fn com os argumentos fornecidos. O apply(this, args) é usado para manter o contexto (this) e passar os argumentos como array.
        cache.set(key, result);                 //Armazena o resultado no cache usando a key como identificador.
        return result;                          //Retorna o resultado da execução da função original.
    }       
}

function fibonacci(n) {
    if(n <2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFibonacci = memoize(function fibonacci(n) {
    if(n < 2) return n;
    return fastFibonacci(n - 1) + fastFibonacci(n - 2);
})
console.log(fastFibonacci(10));
console.log(fibonacci(10));

    