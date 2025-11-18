const somFuja = new Audio("sons/erro.mp3");
const somClick = new Audio("sons/vitoria.mp3");

function fuja() {
  var botaoNao = document.getElementById("nao");

  var larguraTela = window.innerWidth - botaoNao.offsetWidth;
  var alturaTela = window.innerHeight - botaoNao.offsetHeight;

  var novaPosicaoX = Math.random() * larguraTela;
  var novaPosicaoY = Math.random() * alturaTela;

  somFuja.currentTime = 0;
  somFuja.play();

  botaoNao.style.left = novaPosicaoX + "px";
  botaoNao.style.top = novaPosicaoY + "px";

  const botao = document.getElementById("nao") ;
  botao.style.top = (Math.random() * 300) + "px";
  botao.style.left = (Math.random() * 300) + "px";
}

function abrirPopup() {
document.getElementById("popup").classList.add("show");
}

function fecharPopup() {
document.getElementById("popup").classList.remove("show");
}

function parabens() {
somClick.currentTime = 0;
somClick.play();
abrirPopup();
}

// BOTÃO DECLARAÇÃO
const botaoDeclaracao = document.getElementById("btnDeclaracao");

// MODAL SENHA
const senhaModal = document.getElementById("senhaModal");
const confirmarSenha = document.getElementById("confirmarSenha");
const senhaInput = document.getElementById("senhaInput");
const erroSenha = document.getElementById("erroSenha");

// SENHA CORRETA
const SENHA_CORRETA = "batata frita";

// Abre o modal de senha (chame isso quando quiser)
function abrirModalSenha() {
    senhaModal.style.display = "flex";
}

// Verifica a senha
confirmarSenha.addEventListener("click", () => {
    if (senhaInput.value === SENHA_CORRETA) {
        senhaModal.style.display = "none";
        botaoDeclaracao.disabled = false;  // libera o botão
        botaoDeclaracao.style.opacity = "1";
        erroSenha.textContent = "";
    } else {
        erroSenha.textContent = "Senha incorreta!";
    }
});
