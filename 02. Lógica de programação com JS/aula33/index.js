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

const pessoas = ['Leonildo', 'Esperança', 'Yohanna', 'Welvio', 'Gilmiro', 'Joana', 'Pedro']

pessoas.length; 
console.log(pessoas.length);

for (let i = 0; i < pessoas.length ;i++) {
    console.log(`indice ${i} = ${pessoas[i]}`);
}