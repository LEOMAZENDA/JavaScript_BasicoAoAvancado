//                 1      2       3
let alunos = ['Luis','Maria','João'];

// console.log(alunos);
console.log(alunos.length);

alunos[0] = 'Leonildo';
alunos[3] = 'Chompita';
// console.log(alunos);

//Conta o array e adiciona um novo elemento
alunos[alunos.length] = 'Welvio';
alunos[alunos.length] = 'Yohanna';
alunos[alunos.length] = 'Esperança Lemos';
alunos[alunos.length] = 'Leonildo Mazenda';
alunos[alunos.length] = 'Joana';
alunos[alunos.length] = 'Ashley';
console.log(alunos.length);
console.log(alunos);

// //Adicionando dados no array sem ter que saber o tamanho para. iss vai inserir sempre na ultima possição
// alunos.push('Alzira António');
// alunos.push('André');
// alunos.push('Ilola');
// alunos.push('Diaku');
// console.log(alunos.length);
// console.log(alunos);

// //Adicionando elemento a frente do array. isso vai inserir sempre na começo do array
// alunos.unshift('Olinda');
// console.log(alunos);

// alunos.unshift('Isabel');
// alunos.unshift('Manuel');
// alunos.unshift('Natividade');
// console.log(alunos.length);
// console.log(alunos);

// // Remover alunos do arrey (Isso remove na posição final)
// alunos.pop();
// console.log(alunos);


// // Salvar o aluno removido do arrey em uma variável.
// const removido = alunos.pop();
// console.log(alunos);
// console.log('Foi removdido: ',removido);


// // Remover alunos do arrey (Isso remove na posição da frente)
// alunos.shift();
// console.log(alunos);

// // Salvar o aluno removido do arrey em uma variável.
// const removido2 = alunos.shift();
// console.log(alunos);
// console.log('Foi removdido: ',removido2);
// delete alunos[4];
// console.log(alunos);

// console.log(alunos[8]);
// console.log(alunos.slice(8));
// console.log(alunos.slice(3, 9));
console.log(alunos.slice(3, -1));
console.log(alunos.slice(3, -3));

console,log(typeof alunos);
console,log(alunos instanceof Array);

// // mudar o raarey para outros tipos 
// alunos = 123;
// // alunos = true;

// console,log(typeof alunos);
// console,log(alunos instanceof Array);