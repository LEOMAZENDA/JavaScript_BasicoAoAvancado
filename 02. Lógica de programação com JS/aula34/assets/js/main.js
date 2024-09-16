const elementos = [
    { tag: 'p', texto: 'Qualquer coisa que eu quiser' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'section', texto: 'frase 3' },
    { tag: 'footer', texto: 'frase 4' },
];


const container = document.querySelector('.container');
const div = document.createElement('div');

// // SOLUÇÃO 1
// for (let i = 0; i < elementos.length; i++) {
//     let {tag, texto} = elementos[i];
//    let tagCriada = document.createElement(tag);
// //    tagCriada.innerHTML = texto; // OPÇÃO 1
//    tagCriada.innerText = texto; // OPÇÃO RECOMENDADA
//    div.appendChild(tagCriada); // adicionadno cada tag criada na div
// }

// container.appendChild(div); // adicionando todas a div com todas a tags criadas no container

// SOLUÇÃO 1
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado); // adicionadno os textos as tag criadas
    div.appendChild(tagCriada); // adicionadno cada tag criada na div
}

container.appendChild(div); // adicionando todas a div com todas a tags criadas no container

