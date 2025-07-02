/* 
------------------------------------------------------------------ 
File: app.js
Subject: Exercícios 3 - Desenvolvimento Web Básico - Formação +PraTI                      
Create: 01/07/25                                                   
Developer: Claudir Kraulich
------------------------------------------------------------------ 
*/
/*const botao = document.querySelector('.js-botaoAlternador');
const menu = document.querySelector('.cabecalho__menu');

botao.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});
*/

var alternador = document.querySelector('.js-botaoAlternador')

alternador.onclick = function(){
	var menu = document.querySelector('.cabecalho__menu');
	menu.classList.toggle('ativo');
}