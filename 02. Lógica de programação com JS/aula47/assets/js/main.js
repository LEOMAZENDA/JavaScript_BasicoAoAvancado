function relogio () {
    let segundos = 0;
    let timmer;
    
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-PT', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    
    function iniciaRelogio() {
        timmer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    /**
     */
    
    //Segunda Solução 
    const relogio = document.querySelector('.relogio');
    
    document.addEventListener('click', function (e) {
        const elClicado = e.target;
    
        if (elClicado.classList.contains('zerar')) {
            clearInterval(timmer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado'); //Isso está a remover a classe pausado do HTML       
            segundos = 0;
        }
        
        if (elClicado.classList.contains('iniciar')) {
            relogio.classList.remove('pausado'); //Isso está a remover a classe pausado do HTML
            clearInterval(timmer);
            iniciaRelogio();
        }
    
        if (elClicado.classList.contains('pausar')) {
            relogio.classList.add('pausado'); //Isso está a remover a classe pausado do HTML
            clearInterval(timmer);   
        }
        
    });
}

relogio();

//------------------------------------------------------------------------------------------------------


/*
//Primeira solução 

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado'); //Isso está a remover a classe pausado do HTML
    clearInterval(timmer);
    iniciaRelogio();
});

pausar.addEventListener('click', function (e) {
    clearInterval(timmer);
    relogio.classList.add('pausado');         //Isso está a adiciona a classe pausado do HTML
});

zerar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado');     //Isso está a remover a classe pausado do HTML
    clearInterval(timmer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/