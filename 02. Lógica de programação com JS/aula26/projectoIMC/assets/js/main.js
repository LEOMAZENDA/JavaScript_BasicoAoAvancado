//Capturar evento de submit do formulario 
alert(111)

const form = document.querySelector('#formulario');
form.addEventListener('subnit' ,function (e) {
    e.preventDefault();

    console.log('Evento prevenito');
});