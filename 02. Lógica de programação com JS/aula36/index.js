const nome = ['Leonildo Mazenda', 'Yohanna Nayara Mazenda', 'Esperança de Lemos Mazenda', 'Welvio Vivaldo de Lemos Mazenda']

console.log('FOR OF');
for(let valor of nome){
    console.log(valor);
}

console.log();
console.log('FOR IN');
for(let chave in nome){
    console.log(nome[chave]);
}

console.log();
console.log('FOR CLÁSSICO');
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
} 

console.log();
console.log('FOREACH DO JS');
nome.forEach(function (el){
    console.log(el)
});


/**
FOR CLÁSSICO --> Geralmente com iteráveis (arey ou strings):
FOR IN --> Retorna o Índice ou chave (string, array ou objectos);
FOR OF --> Retorna o valor e, si - (iteráveis, arrays ou strings)   

------------------------------------------------------

As diferenças entre os loops no seu código a cima são as seguintes:

FOR OF:
Percorre os valores da array diretamente.
Exemplo: valor será cada nome da lista.

FOR IN:
Percorre as chaves/índices da array.
Usa o índice (chave) para acessar os valores, então nome[chave] retorna o valor correspondente.

FOR CLÁSSICO:
Controla o loop usando um índice manualmente (i), desde 0 até o tamanho da array.
Funciona como o FOR IN, mas você define as condições do loop.

FOREACH:
Executa uma função para cada elemento da array, passando o valor diretamente para o callback.
É uma forma mais moderna e legível de iterar sobre arrays em JavaScript.
Em resumo, todos iteram sobre a array, mas de maneiras diferentes: alguns usam índices e outros valores diretamente.
 */