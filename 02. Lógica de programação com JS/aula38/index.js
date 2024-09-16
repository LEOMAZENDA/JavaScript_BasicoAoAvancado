// let i = 0; 
// while (i <=10) {
//     console.log(i);
//     i++; // se não passar a actualzição, vai criar um loop infinito que pode congelar o navegador
// }
// console.log('Segue a vida')

// let a = 0; 
// const nome = 'Leonildo';
// while (a < nome.length) {
//     console.log(nome[a]);
//     a++; 
// } // não é muito recomendado

// console.log('Segue a vida')


// function random (min, max) {
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r); // Math.floor() faz com que me traz sempre um valor inteiro 
// }

// const min = 1;
// const max = 100;
// let rand = 0;
// // console.log(rand);

// while (rand !== 10) {
//     rand = random(min, max);
//     console.log(rand);
// }
// console.log('Saiu porque achou o valor "10"!');
//........................................................................

// DO WILLE
const min = 1;
const max = 100;
let rand;

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // Math.floor() faz com que me traz sempre um valor inteiro 
}

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10); 

console.log('Saiu porque achou o valor "10"!');

