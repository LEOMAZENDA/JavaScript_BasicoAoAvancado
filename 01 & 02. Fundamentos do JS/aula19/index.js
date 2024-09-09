//TIPOS DE DADOS 
/*
Primitivos (são imutáveis) -string, number, boolean, undefined, 
null (bigint, symbol) - valores copiados 
*/


/*
Referência (mutáveis) - array, object, funcion - Passados por refeência
*/

let a = [1,2,3];
let b = a;
let c = b;

let d = [...a];// o valor de d recebe o de a mas fica independente. Em  [...a], foi feito uma copia do valor que está en a 
console.log(a, b, d);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b, d);
a.push('Leonildo');
console.log(c);
console.log(d);