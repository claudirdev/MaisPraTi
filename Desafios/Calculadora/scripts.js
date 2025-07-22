/*------------------------------------------------------------------ 
File: scripts.js
Subject: Desafio Aula 38 - Formação +PraTI                      
Create: 22/07/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/

const resultado = document.getElementById('resultado');

function adicionar(valor) {
  resultado.value += valor;
}

function limpar() {
  resultado.value = '';
}

function voltar() {
  resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
  const expressao = resultado.value;

  /* Validações*/
  if (
    !expressao ||                                 // vazio
    /^[+\-*/.]+$/.test(expressao) ||              // apenas operador
    /[+\-*/.]$/.test(expressao.slice(-1)) ||      // termina com operador
    /\.{2,}/.test(expressao)                      // pontos seguidos
  ) {    
    resultado.value = 'Erro';
    return;
  }

  try {
    resultado.value = eval(expressao);
  } catch (e) {
    resultado.value = 'Erro';
  }
}
