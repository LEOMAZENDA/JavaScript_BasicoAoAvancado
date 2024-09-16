const pessoas = ['Leonildo', 'Esperança', 'Yohanna', 'Welvio', 'Gilmiro', 'Joana', 'Pedro']

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Mazenda',
    idade: 39
}

// for(let cahfe in pessoa){
//     console.log(cahfe);
// }

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}




// // esse for esta a ler os indices (lé por indices ou chaves)
// for(let variavel in pessoas){
//     console.log(pessoas[variavel]);
// }

//for Classico
// for(let i = 0; i < pessoas.length; i++){
//     console.log(pessoas[i]);
// }
