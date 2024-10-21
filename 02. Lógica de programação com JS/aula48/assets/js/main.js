const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-terafa");
const tarefas = document.querySelector(".tarefas");


function criaLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypree', function(e){
    // if(e.ke === "")
    console.log(e);
});

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;  
    tarefas.appendChild(li);
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);  
});
