function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-PT', {
        hour12: false
    });
}

// function funcaoDoIntervalo(){
//     console.log(mostrarHora());
// }

// setInterval(funcaoDoIntervalo, 1000);

const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

//parar em 10 seguindos 
setTimeout(function(){
   console.log('Olá mundo!')
}, 3000); 


setTimeout(function(){
    clearInterval(timer);
}, 10000); 


