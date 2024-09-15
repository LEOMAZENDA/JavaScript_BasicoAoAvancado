// Operador ternário "?" 

// const pontuacaoUsuario = 900; 

// // Condição normal
// if (pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }
//-------------------------------------------------------------

// usando o Operador ternário "?" 
// condição) ? 'Valor para verdadeiro' : 'Valor para falso'; 
const pontuacaoUsuario = 900; 

const nivielUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null; //pode mudar o valor aqui para uma cor 
const corPadrao = corUsuario || 'Preta';

console.log('Nivel e cor do Usuário ==> ',nivielUsuario, corPadrao);


//-------------------------------------------------------------

