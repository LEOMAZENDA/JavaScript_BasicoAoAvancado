//// ENTENDENDO O Continue

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//     if (numero === 4 || numero === 7 ) {
//         console.log('Pulei os números 4 e 7');
//         continue; 
//     }

//     if (numero === 2) {
//         console.log('Pulei número o 2');
//         continue; 
//     } 
//     console.log(numero);
// }

//// ENTENDENDO O Breack

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //for of
// console.log();
// console.log('COM O FOR OF -----------------');
// for (let numero of numeros) {
//     if (numero === 2) {
//         console.log('Pulei número o 2');
//         continue; // pula para o próximo 
//     }

//     console.log(numero);    
//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break; // a primeira vez que chegar no breack, o loop termina
//     }
// }

// //for classico 
// console.log();
// console.log('COM O FOR CLÁSSICO -----------------');
// for (let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i];
//     if (numero === 2) {
//         console.log('Pulei número o 2');
//         continue; // pula para o próximo 
//     }

//     console.log(numero);    
//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break; // a primeira vez que chegar no breack, o loop termina
//     }
// }

// console.log();
// console.log('COM O FOR IN -----------------');
// for (let i in numeros) {
//     let numero = numeros[i];
//     if (numero === 2) {
//         console.log('Pulei número o 2');
//         continue; // pula para o próximo 
//     }

//     console.log(numero);    
//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break; // a primeira vez que chegar no breack, o loop termina
//     }
// }

// FUNCIONANDO COM O WILE E DO WILE 

console.log();
console.log('COM O WHILE -----------------');
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei número o 2');
        i++;
        continue; // pula para o próximo        
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break; // a primeira vez que chegar no breack, o loop termina
    }
    i++;
}

console.log();
console.log('COM O DO WHILE -----------------');
let a = 0;
do {
    let numero = numeros[a];

    if (numero === 2) {
        console.log('Pulei número o 2');
        a++;
        continue; // pula para o próximo        
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        a++;
        break; // a primeira vez que chegar no breack, o loop termina
    }
    a++;
}while (a < numeros.length);


/**
 * Continue vai para a próxima iteração
 * Breack sai do laço
 */