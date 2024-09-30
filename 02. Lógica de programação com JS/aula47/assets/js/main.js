
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; 
let timmer; 


function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-PT', {
        hour12: false, 
        timeZone: 'UTC'
    });
}


function iniciaRelogio(){
    timmer = setInterval(function(){
        segundos ++; 
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado'); //Isso está a remover a classe pausado do HTML
    clearInterval(timmer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(e){
    clearInterval(timmer);
    relogio.classList.add('pausado'); //Isso está a adiciona a classe pausado do HTML
});

zerar.addEventListener('click', function(e){
    relogio.classList.remove('pausado'); //Isso está a remover a classe pausado do HTML
    clearInterval(timmer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});