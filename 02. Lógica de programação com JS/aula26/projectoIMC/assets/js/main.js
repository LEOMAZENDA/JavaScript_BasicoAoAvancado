//Capturar evento de submit do formulario 
// alert(111)

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMG é ${imc} ${nivelImc}.` 
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivil = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivil[5]; 
    if (imc >= 34.9 ) return nivil[4];
    if (imc >= 29.9 ) return nivil[3];
    if (imc >= 24.9 ) return nivil[2];
    if (imc >= 18.5 ) return nivil[1];
    if (imc < 18.5 ) return nivil[0];
}

function getImc(peso, altura) {
    //Calcular o IMC 
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultudo');
    } else {
        p.classList.add('bad-resultudo');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

