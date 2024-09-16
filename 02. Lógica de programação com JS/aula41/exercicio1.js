//escreva uma função que rece 2 numeros e retorna o maior deles 
// Normal 
function maiorNumero1(x, y) {
    if (x > y) return x;
    return y;
}

//Ternário 
function maiorNumero2(x, y) {
    return x > y ? x : y;
}

//Arrow funciomn  
const maiorNumero3 = (x, y) => x > y ? x : y;

console.log(maiorNumero1(2, 3));
console.log(maiorNumero2(12, 23));
console.log(maiorNumero3(43, 55));
