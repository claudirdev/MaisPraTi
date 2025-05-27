// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 8 - AGRUPAMENTO POR PROPRIEDADE (Gerar objeto com soma de totais por cliente)

console.clear();
const vendas = [
    {cliente: "Jose", total: 80},
    {cliente: "Paulo", total: 50},
    {cliente: "Maria", total: 100},
    {cliente: "Joao", total: 30},
    {cliente: "Maria", total: 80},
    {cliente: "Paulo", total: 150}    
];

const somaPorCliente = vendas.reduce((acumulador, venda) => {    //reduce percorre o array 'vendas'  - acumulador guarda os totais e venda é o item atual de vendas
    const {cliente, total} = venda;                              //desestrutura, extrai cliente e total do objeto venda
    acumulador[cliente] = (acumulador[cliente] || 0) + total;    //se acumulador[cliente] já existir soma o valor
    return acumulador;                                           //retorna acumulador para proxima iteração
},{});                                                           // o "{}" representa o valor inicial do acumulador (vazio)

console.log(somaPorCliente);