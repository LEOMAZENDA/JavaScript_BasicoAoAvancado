/*Avariação de curso circuito
    && -> false && true <--> false "o valor mesmo" 
    || -> true && false <--> Vai retornar "o valor verdadeiro"
*/

// //---------------------------------------------------------------------------------------------------------------
// console.log('leonildo' && 0 && 'Esperança'); // RETONAR O VALOR FALSO. NO CASO, O 0 (ZERO)
// console.log('leonildo Mazenda' && true && 'Esperança');//RETONAR O ULTIMO VALOR. NO CASO, ESPERANÇA
// console.log('leonildo Mazenda' && true && NaN);//RETONAR O NaN. NUE NO CASO É UM VALOR FALSO

/* Valores que avaliam em falso no JS
FALSY
    - false
    - '', "", ``
    - null, underfined
    - NaN
Auqlaque coisa diferente desses valores o JS avalia em true (verdadeiro) 
*/ 


// TRABALHANDO COM O AND &&
// //---------------------------------------------------------------------------------------------------------------
// console.log('leonildo' && 'Esperança');
// console.log('leonildo' && ''  && 'Esperança');
// console.log('leonildo' && NaN &&'Esperança');
// console.log('leonildo' && null &&'Esperança');
// console.log('leonildo' && undefined &&'Esperança');

// //---------------------------------------------------------------------------------------------------------------
// function falaOi (){
//     return 'Oi';
// }

// const vaiExecutar = 1; 

// console.log(vaiExecutar && falaOi());


// TRABALHANDO COM O AND &&
//---------------------------------------------------------------------------------------------------------------

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);// mude o valor de corUsuario para uma cor 

const a = 0;
const b = null;
const c = 'false'; //exibe esse por ser um valor verdadeiro (um texto)
const d = false;
const e = NaN;
console.log(a || b || c || d || e);