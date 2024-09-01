/*
Leonildo Vivaldo Mazenda tem 30 anos, pesa 84kg 
ten 1.8 de altura e seu IMC é de 25.925925925925924 
Leonildo vivaldo nasceu em 1980
*/ 

const nome = 'Leonildo Vivaldo';
const sobrenome = 'Mazenda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //imc = peso / (altura * altura)
let anoNAcimento; 

imc =  peso/(alturaEmM*alturaEmM);
anoNAcimento = 2019 - idade

console.log(nome, sobrenome,'tem',idade,'anos, pesa',peso+'kg');
console.log('tem',alturaEmM+'M','de altura e seu IMC é de',imc);
console.log(nome, 'nasceum em',anoNAcimento+'.');