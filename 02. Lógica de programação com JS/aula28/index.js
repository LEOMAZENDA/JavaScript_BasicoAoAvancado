// // TRABALHANDO COM O MARCO ZERO
// const tresHoras = 60 * 60 * 3 * 1000; 
// const umDia = 60 * 60 *24 * 1000; 
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());


// const data = new Date(2019, 3, 20, 15, 14, 27, 500);// A, M, D, H, m, S, Ms -  tudo com naber 
// console.log(data.toString());

// const data = new Date('2019-04-20 12:14:58:584');// PASANDO COMO STRING A HORA E DATA  
// console.log(data.toString());
// console.log('Dia: ', data.getDate());
// console.log('Més: ', data.getMonth()+1); // Zomeça do zero, Janiero = 0 e Dezembro = 11
// console.log('Ano: ', data.getFullYear());
// console.log('Hora: ', data.getHours());
// console.log('Minuto: ', data.getMinutes());
// console.log('Segundo: ', data.getSeconds());
// console.log('Milisegundos: ', data.getMilliseconds());
// console.log('Dia da Semana: ', data.getDay()); // Zero é domingo, 6 - sabado 

// // data em milésimo de segundo 1726388257948 que equivale a 2024-09-15T08:17:37.948Z

// const data2 = new Date(1726388257948);
// console.log(data2) 

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataAngola = formataData(data);
console.log(dataAngola);