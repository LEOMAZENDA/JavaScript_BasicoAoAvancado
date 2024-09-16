/* Escreva uma função que recebe um numero e retorna o seguinte:
1. Numero é divisível por 3 = Fizz;
2. Numero é divisível por 5 = Buzz;
3. Numero é divisível por 3 e 5 = Retorna FizzBuzz;
4. Numero NÃO É divisível por 3 e 5 = Retorna o que for digitado;
a1). Checar se o número é realemente um numero = Retorna o própio número;
a2). Use a funçãp com números de 0 a 100 
*/

function fizzBuzz(numero) {
    if (typeof(numero) !== 'number') return ` "${numero}" não é um numero`;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; 
    if (numero % 3 === 0) return 'Fizz'; 
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0;  i<= 100; i++) {
    console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz(368));