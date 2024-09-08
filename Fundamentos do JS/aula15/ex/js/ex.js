const numero = Number(prompt('Digite um numero')); 

const numeroTitulo =  document.getElementById('numero-titulo');
const texto =  document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ``;
texto.innerHTML += `<p>A Raiz quadrada do seu numero é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é um inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(numero)}`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;

