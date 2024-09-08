//Trabalhando com constants no JS
// ao declarar a constant, deve desde lo ja dar o valor dela. esse valor não será modificcado 
const nome = 'João Manuel';

const primeiroNumero = "5";
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
console.log(primeiroNumero)

console.log(typeof(primeiroNumero)) // ver o tipo 


// Não se deve criar const com as palavras reservadas da linguagem
/* Exemplos a Baixo 
const if;*/

// Não se deve criar const cuja o nome começ a com número
/* Exemplo
const 1nome;*/
// Variváveis devem ter nomes expressivos ou significativos
//Utilizamos camelCase para Nomes compostos
/*case-sensitive (significa que levras maiusculas e minusculas fazem diferença nos nomes das const)
Exemplo: 
nomeCliente é diferente de nomecliente*/
// Não podemos modificar o valor de uma constante
//NÃO UTILIZE MAS "var", ULTILIZE "const"
