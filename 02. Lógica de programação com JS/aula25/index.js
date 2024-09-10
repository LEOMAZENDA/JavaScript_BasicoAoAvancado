// estrutura condicional IF (2)
/*
  
*/
// const numero = 3;

// if(numero >= 0 && numero <= 5){
//     console.log(`O número "${numero}" está entre 0 e 5.`);
// } else{
//     console.log(`O número "${numero}" NÃO está entre 0 e 5.`);
// }


const numero = 5;

if(numero <= 10){
    console.log(`O número "${numero}" é menor ou igual a 10.`);
 }

if(numero >= 0 && numero <= 5){
   console.log(`O número "${numero}" está entre 0 e 5.`);
}else if (numero >= 6 && numero <= 8){
    console.log(`O número "${numero}" está entre 6 e 8.`);
 }else if (numero >= 9 && numero <= 11){
    console.log(`O número "${numero}" está entre 9 e 11.`);
 }else{
    console.log(`O número "${numero}" NÃO está entre 0 e 11.`);
 }

 console.log(`... Aqui vai o resto do código.`);