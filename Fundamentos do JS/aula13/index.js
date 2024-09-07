//MANIPULANDO STRINGS 
//               01234567
// let aString = "Um \\Texto"; //passar uma barra invertida
// console.log(aString);

//               01234567
let umaString = "Um Texto"; // pagar uma posição do texto
console.log(umaString[6]);
console.log(umaString.charAt(6));

// concatenação 
console.log(umaString.concat(' em',' um',' lindo',' dia'));
console.log(umaString.concat(' em um lindo dia'));
console.log(`${umaString} em um lindo dia`); // a mais recomendada

// Pagar palavra de um texto 
console.log(umaString.indexOf('Texto')); //pegar o index onde começa a palava
console.log(umaString.indexOf('o', 3)); //pegar o index onde começa a palava
console.log(umaString.indexOf('Um')); //pegar o index zero
console.log(umaString.lastIndexOf('m', 3)); //da posição para tras

// Algumas expressões regulares 
console.log(umaString.match(/[a-z]/)); 
console.log(umaString.match(/[a-z]/g)); 
console.log(umaString.search(/[a-z]/)); 
console.log(umaString.search(/[x]/)); //Achar a letra X
console.log(umaString.replace('Um','Algum')); //Substituir um pelo ouro texto
console.log(umaString.replace(/Um/,'Algum')); //Substituir um pelo ouro texto com expressão regular
//              01234567
let strengEx = 'O rato roeu a roupa do rei de roma.';
console.log(strengEx.length);
console.log(strengEx.replace(/r/,'##')); //Substituir apenas o primeiro R
console.log(strengEx.replace(/r/g,'##')); //Substituir todos os  primeiro R

console.log(strengEx.slice(-5)); // pega o tamanho (o lengh) menos a quantidade
console.log(strengEx.slice(-5, -1)); // pega o tamanho (o lengh) menos a quantidade sem o ponto
console.log(strengEx.slice(2,6));

console.log(strengEx.substring(umaString.length - 5, umaString.length -1)); // a dierenção é que nao usa valor negativo
console.log(strengEx.substring(2,6)); 

//dividir pelos espaços 

console.log(strengEx.split(' '));
console.log(strengEx.split(' ', 3)); // aconteça so 3x
console.log(strengEx.split('r')); // retira os r

console.log(strengEx.toUpperCase());
console.log(strengEx.toLocaleLowerCase());

// LINKS DA DOCUMENTAÇÃO DO JS 
// https://www.w3schools.com/js/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
// https://ecma-international.org/publications-and-standards/standards/ecma-262/
