/*------------------------------------------------------------------ 
File: app.js
Subject: Exercício 4 - Desenvolvimento Web Básico - Formação +PraTI                      
Create: 08/07/25                                                   
Developer: Claudir Kraulich
------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open')
        
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.textContent = isOpen ? 'x' : '☰';    
      })

window.addEventListener('resize', () => {
    if (window.innerWidth > 600 && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    }
  });
});
