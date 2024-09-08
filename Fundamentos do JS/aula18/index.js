// AULA SOBRE objectos

//Crinando objectos
// const pessoa1 = {
//     nome: 'Leonildo',
//     sobrenome: 'Mazenda',
//     idade: 39
// };

// const pessoa2 = {
//     nome: 'Welcio',
//     sobrenome: 'Lemos',
//     idade: 16
// };

// console.log(pessoa1.nome);
// console.log(pessoa2.sobrenome);


// criando objectos com função
// function criaPessoa(nome, sobrenome, idade){
//     return {
//        nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Esperança de Lemos','Mazenda',35);
// const pessoa2 = criaPessoa('Maria','Luis',36)
// const pessoa3 = criaPessoa('Yohanna','Mazenda',10)
// const pessoa4 = criaPessoa('André','Miranda',24)
// console.log(pessoa1.idade);
// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// console.log(pessoa4);

//Crinando objectos com metodos
const pessoa1 = {
    nome: 'Leonildo',
    sobrenome: 'Mazenda',
    idade: 39,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está dando um oi...`);
        console.log(`A minha idade actual é ${this.idade} anos.`)
    },

    incrementaIdade () {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();