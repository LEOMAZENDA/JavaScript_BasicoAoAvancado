const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-terafa");
const tarefas = document.querySelector(".tarefas");
// const btnRemover = document.querySelector(".tarefas");


function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limparImput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'Remover';
    btnRemover.setAttribute('class', 'apagar');
    btnRemover.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(btnRemover);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limparImput();
    criaBotaoApagar(li);
    salarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salarTarefas();
    }
});


function salarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //Criado a string do arrey convertida para JSON
    localStorage.setItem("tarefas", tarefasJSON); // so pode salvar string 
}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    console.log(tarefas);
}

adicionaTarefasSalvas();