// +PRATI - CODIFICA 
// FORMAÇÃO DESENVOLVEDOR FULL STACK JUNIOR
// ATIVIDADE 2 - CLAUDIR R. KRAULICH - 26/05/25

// -----------------------------------------------------------------------------------------------------
// EXERCICIO 9 - CONVERSÃO ENTRE FORMATOS
// Função 1 recebe um array de pares e retorna o objeto equivalente

const arrayPares = [['nome', 'Marcio'], ['idade', 34], ['altura', 175]];   //array onde cada elemento é um par
const resultadoObj = paresParaObjeto(arrayPares);                          //chama a função e passa array como argumento e cria objeto 
                                                                        
console.log(resultadoObj);

function paresParaObjeto(arrayPares) {                                     // define a funcão que espera um array como entrada
  return Object.fromEntries(arrayPares);                                   //função interna do JS que transforma array em objeto
}


// Função 2 faz o inverso, retorna um array de pares

const objetoPares = {nome: 'Marcio', idade: 34, altura: 175};           //objeto com tres propriedades
const resultadoArray = objetoParaPares(objetoPares);                   //chama a função com argumento o objeto

console.log(resultadoArray);

function objetoParaPares(obj) {                                   //cria função 
  return Object.entries(obj);                                     //oposto de fromEntries. Aqui está transformando objeto em array
}
