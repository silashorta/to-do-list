const input = document.querySelector(".digitaTexto");
const botao = document.querySelector("#limparLista");
const paletas = document.querySelector(".paletas");
const erro = document.querySelector(".erro");
const botaoValidar = document.querySelector("#botaoSubmit");
const blocoPaletas = document.querySelector(".blocoPaletas");
const tituloPaleta = document.querySelector(".tituloPaleta");
const paletasCriadas = document.querySelector(".paletasCriadas");

botaoValidar.addEventListener("click", () => cadastraAtividade());

function removeAtividades() {
    while (paletas.firstElementChild) {
        paletas.removeChild(paletas.firstElementChild);
    }
}

function removeAtividade(atividade){
    paletas.removeChild(atividade);

}

function criaAtividade(){
    const atividade = document.createElement("div");
    atividade.classList.add("paletasCriadas");

    const div01 = document.createElement("div");
    const div02 = document.createElement("div");
    div02.classList.add("divBotoes")

    const nomeAtividade = document.createElement("p");
    nomeAtividade.textContent = input.value;
    nomeAtividade.classList.add("paragrafoPaletas")

    const botaoLimpar = document.createElement("button");
    botaoLimpar.innerHTML = "<i class='bx bx-trash'></i>";
    botaoLimpar.classList.add("botaoLimpar");
    botaoLimpar.addEventListener('click', () => removeAtividade(atividade));
    
    const botaoCheck = document.createElement("button");
    botaoCheck.innerHTML = "<i class='bx bx-check'></i>";
    botaoCheck.classList.add("botaoCheck");
    botaoCheck.addEventListener('click', () => checkAtividade(nomeAtividade));

    const botaoSubmit = document.getElementById('botaoSubmit');

    paletas.appendChild(atividade);
    atividade.appendChild(div01);
    atividade.appendChild(div02);
    div01.appendChild(nomeAtividade);
    div02.appendChild(botaoCheck)
    div02.appendChild(botaoLimpar);
}

function funcAzul(){
    blocoPaletas.style.background = "#C6DBFC";
    tituloPaleta.style.background = "#419DFF";
    paletas.style.background = "#68B6FF";
}

function funcVerde(){
    blocoPaletas.style.background = "#CCFCC7";
    tituloPaleta.style.background = "#46FF40";
    paletas.style.background = "#78FF69";
}

function funcVermelho(){
    blocoPaletas.style.background = "#FCC7C7";
    tituloPaleta.style.background = "#FF4040";
    paletas.style.background = "#FF6969";
}

function funcAmarelo(){
    blocoPaletas.style.background = "#FCFCC7";
    tituloPaleta.style.background = "#fff700";
    paletas.style.background = "#f1ee83";
}

window.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        cadastraAtividade();
    }
})

function checkAtividade(nomeAtividade){ 
    nomeAtividade.classList.toggle("paragrafoPaletasChecked");
}

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `"${input.value}" não é uma atividade válida!
        Tente novamente.`;
    }
    limpaInput();
}
function limpaInput() {
    input.value = '';
}
function botaoCadastrar() {
    botaoSubmit = cadastraAtividade();
}