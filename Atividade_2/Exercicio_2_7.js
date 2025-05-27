// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 7 - MAPEAMENTO E ORDENAÇÃO(Retornar array com nomes ordenados pelo preço)

console.clear();
const produtos = [
    {nome: "Notebook", preco: 5000},
    {nome: "Monitor", preco: 1000},
    {nome: "Mouse", preco: 80},
    {nome: "Headset", preco: 80},
    {nome: "Placa Video", preco: 6000},
    {nome: "Teclado", preco: 50}
];

function nomesOrdenadosPreco(produtos) {
    return [...produtos]                               //cria uma copia do array original
        .sort((a, b) => a.preco - b.preco)             //organiza por preco
        .map(produto => produto.nome);                 //cria novo array com resultado
    
}

const nomesOrdenados = nomesOrdenadosPreco(produtos);  //cria uma variavel com os nomes ordenados vindos da função (copia array)
console.log(nomesOrdenados);

