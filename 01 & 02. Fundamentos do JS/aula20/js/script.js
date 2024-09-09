function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) { 
        evento.preventDefault(); // Evita que a página seja atualizada (não envia o formulário)
        
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({
            nome: nome, sobrenome: sobrenome, peso: peso,altura: altura,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}.</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
