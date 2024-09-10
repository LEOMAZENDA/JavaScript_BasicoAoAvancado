// estrutura ccondicional IF
/*
    Entre 0 - 11 --> Bom dia 
    Entre 12 - 17 --> Boa tarde  
    Entre 18 - 23--> Boa note 
*/
const hora = -5;

if(hora >= 0 && hora <= 11){
    console.log('Bon dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else 
    console.log('Olá... Digite uma hora válida "Entre 0h à 23h!"');


    const tenhoDinheiro = false;

    if(tenhoDinheiro)
        console.log('Vou sair para curtir...');
    else
     console.log('Vou ficar em casa...');