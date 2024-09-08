//     //TRABALHANDO COM NUMEROS 
// let num1 = 150;
// let num2 = 10.5; 
// let num3 = 15.585565878450;

// // OS EXEMPLOS ESTÃO COMENTADOS 
// console.log(num1.toString() + num2); //num1 transformado em string temporariamente
// console.log(typeof num1, typeof num2);

// console.log(num1.toString(16)); //num1 transformado em binário
// console.log(num3.toString(16)); //num3 transformado em exadeciumal

// console.log(num3.toFixed(2)); //num3 redondado com duas casa de cimais 
// console.log(num3.toFixed(4)); //num3 redondado com quatro casa de cimais 

// console.log(Number.isInteger(num2)) // verificar se o numero é inteiro ou não (retorna um boleano)

// let temp = num1 * 'Olá'
// let temp = num1 + parseInt('5')
// console.log(temp);

// console.log(Number.isNaN(temp)) // Verifica se temp é um NaN (Not a Namber) <-> (retorna um boleano)


// // padrao IEEE 754-2008

// let numer1 = 0.7;
// let numer2 = 0.1;

// numer1 += numer2; // 0.8
// numer1 += numer2; // 0.9
// numer1 += numer2; // 1.0
// // numer1 += numer2; // 1.1
// console.log(numer1)

// // numer1 = numer1.toFixed(2); 
// // console.log(numer1)

// //Correção com a converção
// numer1 = parseFloat(numer1.toFixed(2)); 
// console.log(numer1)
// console.log(Number.isInteger(numer1))

// numer1 = Number(numer1.toFixed(2)); 
// console.log(numer1)
// console.log(Number.isInteger(numer1))


// OUTRA FORMA DE SE CHEGAR A PRECISÃO REALIZANDO APENAS CALCULOS

let num1 = 0.7;
let num2 = 0.1; 

num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) /100;; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) /100;; // 1.0

numer1 = Number(num1.toFixed(2)); 
console.log(num1)
console.log(Number.isInteger(num1))
