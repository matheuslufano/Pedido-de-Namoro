/* -----------------------------------------------------
   🎨 Paletas de Cores
----------------------------------------------------- */

const paletteDefault = ["#e03776", "#8f3e98", "#4687bf", "#3bab6f", "#f9c25e", "#f47274"];

const paletteSoft1 = [
  "#ffb3c6", "#d9b3ff", "#a7ceff",
  "#b7f2d0", "#fff2a6", "#ffd1a6"
];

const paletteSoft2 = [
  "#ff88aa", "#d48ce0", "#7fb6ff",
  "#7fe3b5", "#ffe58a", "#ff9ea1"
];

const paletteSoft3 = [
  "#ffd6e0", "#ebd6ff", "#d6e9ff",
  "#d6fff0", "#fff9d6", "#ffe5d6"
];

const paletteRed = [
  "#ff0000", "#e60026", "#cc0018", "#b30016", "#ff1a3c",
  "#ff3355", "#ff4d4d", "#ff6666", "#ff8080", "#d91e2b",
  "#c21807", "#a40000", "#8b0000", "#e63946", "#ff5a5f",
  "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c"
];

/* 👉 Escolha a paleta que quiser */
let currentPalette = paletteRed;


/* -----------------------------------------------------
   ❤️ Animação dos Corações
----------------------------------------------------- */

const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINK = "http://www.w3.org/1999/xlink";

const heartsArray = [];
const maxScale = 18;
const heartsContainer = document.getElementById("hearts");


/* Cria um coração */
function createHeart(scale) {
  const heart = document.createElementNS(SVG_NS, "use");

  heart.scale = scale; // guarda o valor da escala interno
  heart.setAttributeNS(SVG_XLINK, "xlink:href", "#heart");
  heart.setAttribute("transform", `scale(${scale})`);
  heart.setAttribute("fill", currentPalette[scale % currentPalette.length]);
  heart.setAttribute("x", -69);
  heart.setAttribute("y", -69);
  heart.setAttribute("width", 138);
  heart.setAttribute("height", 138);

  heartsArray.push(heart);
  heartsContainer.appendChild(heart);
}


/* Gera todos os corações */
for (let scale = maxScale; scale >= 0; scale--) {
  createHeart(scale);
}


/* Animação */
function animate() {
  requestAnimationFrame(animate);

  for (let heart of heartsArray) {
    if (heart.scale < maxScale) {
      heart.scale += 0.01;
    } else {
      heart.scale = 0;
      heartsContainer.appendChild(heart); // recicla o SVG para o final (efeito z-index)
    }

    heart.setAttribute("transform", `scale(${heart.scale})`);
  }
}

animate();


/* -----------------------------------------------------
   🟦 Função para trocar paleta dinamicamente
------------------------------------------------------ */

function setPalette(palette) {
  currentPalette = palette;

  heartsArray.forEach((heart, i) => {
    heart.setAttribute("fill", palette[i % palette.length]);
  });
}

// Exemplo:
// setPalette(paletteSoft1);
