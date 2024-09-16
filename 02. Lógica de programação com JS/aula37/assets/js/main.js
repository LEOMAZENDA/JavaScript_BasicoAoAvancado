
const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body); /// pegar o estilo que foi aplicado no body
const bgColorBody = estiloBody.backgroundColor;

console.log(bgColorBody);


for (let p of ps) {
    p.style.backgroundColor = bgColorBody;
    p.style.color =  '#FFFFFF';
}