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