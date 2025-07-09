/* 
------------------------------------------------------------------ 
File: app.js
Subject: Exercícios 3 - Desenvolvimento Web Básico - Formação +PraTI                      
Create: 01/07/25                                                   
Developer: Claudir Kraulich
------------------------------------------------------------------*/

var alternador = document.querySelector('.js-botaoAlternador')

alternador.onclick = function(){
	var menu = document.querySelector('.cabecalho__menu');
	menu.classList.toggle('ativo');
}