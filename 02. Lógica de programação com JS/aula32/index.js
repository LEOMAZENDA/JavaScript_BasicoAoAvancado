const pessoa = {
    nome: 'Leonildo',
    sobrenome: 'Mazenda',
    idade: 39,
    endereco: {
        // rua: 'Alenteijo',
        numero: 515
    }
};

// // atribuiççao normal
// const nome = pessoa.nome;
// console.log(nome);



// atribuiççao via desentruturacao
// const {nome, sobrenome, outroNome = 'Não existe', idade} = pessoa;
// console.log(nome, sobrenome, outroNome);
// const {nome: teste, sobrenome, idade} = pessoa;
// console.log(teste,sobrenome ,idade, endereco);
// console.log(teste, sobrenome);

// const {nome, sobrenome, endereco} = pessoa;

// const {endereco: {rua, numero}, endereco} = pessoa;
// console.log(rua, numero, endereco);

// const {endereco: {rua: r ='Novo endereço', numero}, endereco} = pessoa;
// console.log(r, numero, endereco);



const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);