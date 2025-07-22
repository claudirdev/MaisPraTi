/*------------------------------------------------------------------ 
File: traducaoPigLatin.js
Subject: Desafio Aula 38 - Formação +PraTI                      
Create: 21/07/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/

//Função Translate Pig Latin
function traducaoPigLatin(palavra) {
    const vogal = ['a', 'e', 'i', 'o', 'u', 'y'];
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (vogal.includes(palavra[i])) {
            // Se a primeira letra for uma vogal
            if (i === 0) {
                return palavra + 'ay';
            }

            // Dividsão da palavra em prefixo e radical
            const prefixo = palavra.slice(0, i);
            const radical = palavra.slice(i);
            return radical + prefixo + 'ay';
        }
    }

    // Se não encontrar nenhuma vogal na palavra
    return palavra + 'ay';
}

console.log(traducaoPigLatin("away"))


/*
Exemplo:
A palavra “sandwich” →
Prefixo: s
Radical: andwich
Resultado: andwich + s + ay → andwichsay
*/