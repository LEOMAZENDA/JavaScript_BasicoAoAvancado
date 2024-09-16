// // Atribuição via desestruturação
// // ... rrest // ... spread
// const numeros = [1500, 2000, 365, 4005, 544512, 60025, 75477, 844545, 9574645];
// const [um, dois, tres, ...resto] = numeros; // pega os numero na ordem do arrey ...resto;
// console.log(um, dois, tres);

// //pegar o resto do arrey
// console.log(resto);

// //PULANDO VALORES
// const numeros = [1500, 2000, 365, 4005, 544512, 60025, 75477, 844545, 9574645];
// const [um, ,tres, , cinco, ...resto] = numeros;

// console.log(um, tres, cinco)
// console.log(resto)


// ... rest,  ... spread
//                   0          1          2
//                 1  2  3    1  2  3    1  2  3
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// console.log(numeros[2][2]);
// const [,,[,,nove]] = numeros;
// console.log(nove);


console.log(numeros[2][2]);
const [lista1,lista2,lista3] = numeros;
console.log(lista3[2]);