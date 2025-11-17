const somClick = new Audio("sons/vitoria.mp3");
const somFuja = new Audio("sons/erro.mp3");

function fuja() {
  somFuja.currentTime = 0;
  somFuja.play();
  
  var botaoNao = document.getElementById("nao");

  var larguraTela = window.innerWidth - botaoNao.offsetWidth;
  var alturaTela = window.innerHeight - botaoNao.offsetHeight;

  var novaPosicaoX = Math.random() * larguraTela;
  var novaPosicaoY = Math.random() * alturaTela;

  botaoNao.style.left = novaPosicaoX + "px";
  botaoNao.style.top = novaPosicaoY + "px";
}

function abrirPopup() {
document.getElementById("popup").classList.add("show");
}

function fecharPopup() {
document.getElementById("popup").classList.remove("show");
}


function fuja() {
somFuja.currentTime = 0;
somFuja.play();

const botao = document.getElementById("nao");
botao.style.top = (Math.random() * 300) + "px";
botao.style.left = (Math.random() * 300) + "px";
}


function parabens() {
somClick.currentTime = 0;
somClick.play();
abrirPopup();
}