const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e){
    relogio.innerHTML = 'Cliquei no iniciar';
});

pausar.addEventListener('click', function(e){
    alert('Oi.. Clicado no pausar');
});

zerar.addEventListener('click', function(e){
    alert('Oi.. Clicado no zerar');
});