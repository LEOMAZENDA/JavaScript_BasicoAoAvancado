/*
Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (em numeros). 
Retorna true se a imagem estiver no modo paisagem.
*/

function ePaisagem(altura, largura) {
    return largura > altura;    
}

console.log(ePaisagem(12,44));
console.log(ePaisagem(44,12));

//Arrow funcion 
var ePaisagem2 = (altura, largura) => largura > altura;  

console.log(ePaisagem2(12,44));
console.log(ePaisagem2(44,12));
