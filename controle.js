
/*chamando os elementos*/

let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')
/*adicionar tarefa na lista*/

function addTarefa() {
    //valor digitado no input//

    let valorInput = input.value; // input elemendo buscado//

    //validação, se não for vazio, nulo ou indefinido//
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador; // +1 zerp passa a ser 1
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>

            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
        
               ${valorInput}
            </div>
            <!--botao para deletar informação-->
            <div class="item-botao">
              
                <button onclick="deletar(${contador})" class="delete">deletar<i class="mdi mdi-delete"></i> </button>


            </div>`;
        // main recebe o conteudo que ja tem e mais um conteudo novoItem//
        main.innerHTML += novoItem;

        //zerar  o campo para escrever algo novo//
        input.value = "";
        input.focus();
        ++contador; //add +1



    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe === "item") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');


    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");

    }

}

input.addEventListener("keyup", function (event) {
    // Se apertar Enter = código 13 envia a tarefa
    if (event.keyCode === 13) {
        event.preventDefault(); // Previne o comportamento padrão (como enviar um formulário)
        btnAdd.click(); // Acionar o clique no botão
    }
});
