//FOR CLASSICO 
// i => Index

// for (let i = 0; i <= 15 ;i++) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 250; i <= 350 ;i += 10) {
//     console.log(`Número ${i}`);
// }

// for (let i = 500; i >= 0 ;i -= 50) {
//     console.log(`Descrementado para ${i}`);
// }

// //Checando valores Pares 
// for (let i = 0; i <= 20 ;i++) {
//     const par = i % 2 === 0 ? 'par': 'impar';   
//     console.log(i, par);
// }

// percorrendo arrey 

const frutas = ['Leonildo', 'Esperança', 'Yohanna', 'Welvio', 'Gilmiro', 'Joana', 'Pedro']

frutas.length; 
console.log(frutas.length);

for (let i = 0; i < frutas.length ;i++) {
    console.log(`indice ${i} = ${frutas[i]}`);
}