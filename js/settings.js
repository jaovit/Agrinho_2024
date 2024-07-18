// tema

var modo = true;
var root = document.documentElement;

const elementosMudar = document.querySelectorAll(".tema");

temaPadrao()

function temaPadrao() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    modo = false;
    // true = escuro;
    for (var i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.remove("claro");
    }
  } else {
    modo = true;
    // false = claro;
    for (var i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.add("claro");
    }
  }
}

function mudarRoot() {
  resetcolor();
  if (modo) {
    var root_prop = {
      // claro
      "--borda-menu": "solid .1vw #ebc4b0",
      "--cor-principal-deg": "none",
      "--menu-cor": "#191919",
      "--cor-text-menu": "#c9c2c0",
      "--cor-menu-2": "#e4b7a0",

      "--cor-principal": "#c7c7c7",
      "--cor-segundaria": "#b6b6b6",
      "--cor-titulo": "#202020",
      "--sub-titulo": "#242424",
      "--cor-texto": "#2e2e2e",
      "--borda": "solid .01vw rgb(70, 70, 70)",
      "--background-card": "url(../img/fundo_elem.jpg)",
      "--filtro": "brightness(75%) opacity(.5)",
    };

    for (var i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.add("claro");
    }

    modo = false;
  } else {
    // escuro
    var root_prop = {
      "--borda-menu": "solid .1vw #ebc4b0",
      "--cor-principal-deg": "#302d2cc9",
      "--menu-cor": "#191919",
      "--cor-text-menu": "#c9c2c0",
      "--cor-menu-2": "#e4b7a0",

      "--cor-principal": "#292626",
      "--cor-segundaria": "#413d3c",
      "--cor-titulo": "#e4b7a0",
      "--sub-titulo": "#EBCCBB",
      "--cor-texto": "#c9c2c0",
      "--borda": "solid .01vw rgb(172, 170, 170)",
      "--background-card": "url(../img/fundo.jpg)",
      "--filtro": "brightness(25%)",
    };

    for (var i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.remove("claro");
    }

    modo = true;
  }

  for (var i in root_prop) {
    root.style.setProperty(i, root_prop[i]);
  }
}

// tamanho da fonte
const txtMax = document.querySelectorAll("[txt_max]");
const barraFont = document.querySelector("#progress_font_size");

barraFont.addEventListener("input", fonte)

function fonte() {
  
  document.querySelector(".fonte_tamanho").innerHTML = barraFont.value / 100;
  root.style.setProperty("--font-size-js", barraFont.value / 100);

  for (let i = 0; i < txtMax.length; i++) {
    let VtxtMax = parseInt(txtMax[i].attributes.txt_max.value);
    txtMax[i].classList.toggle(
      `txt_${(txtMax[i].attributes.txt_max.value)}`, barraFont.value > VtxtMax
    );
  }
};


// tamanho img
const barraImg = document.querySelector("#progress_img");
const imgMax = document.querySelectorAll("[img_max]");

barraImg.addEventListener("input", img)

function img(){
  document.querySelector(".img_tamanho").innerHTML = barraImg.value / 100;
  root.style.setProperty("--tamanho-img", barraImg.value / 100);

  for (let i = 0; i < imgMax.length; i++) {
    let VimgMax = parseInt(imgMax[i].attributes.img_max.value);
    imgMax[i].classList.toggle(
      `img_${(imgMax[i].attributes.img_max.value)}`,barraFont.value > VimgMax
    );
  }
};

// geral
const barraGeral = document.querySelector("#progress_geral");

barraGeral.addEventListener("input", geral);

function geral() {
  document.querySelector(".geral_tamanho").innerHTML = barraGeral.value / 100;

  barraFont.value = barraGeral.value;
  barraImg.value = barraGeral.value;

  img()
  fonte()
}

// cores
const titulo = document.querySelectorAll(".titulo");
const subtitulo = document.querySelectorAll(".subtitulo");
const texto = document.querySelectorAll(".texto");
const input_cor_1 = document.querySelector("#input_cor_1");
const input_cor_2 = document.querySelector("#input_cor_2");

const input_cor_3 = document.querySelector("#input_cor_3");
const tituloColor = document.querySelectorAll(".titleColor");

const input_cor_4 = document.querySelector("#input_cor_4");
const txtColor = document.querySelectorAll(".textColor");

const input_cor_5 = document.querySelector("#input_cor_5");
const input_cor_6 = document.querySelector("#input_cor_6");

input_cor_1.addEventListener("input", () => {
  root.style.setProperty("--cor-principal", input_cor_1.value);
  root.style.setProperty("--cor-principal-deg", `${input_cor_1.value}00`);
});

input_cor_2.addEventListener("input", () => {
  root.style.setProperty("--cor-segundaria", input_cor_2.value);
  
});

input_cor_3.addEventListener("input", () => {
  root.style.setProperty("--cor-titulo", input_cor_3.value);
  root.style.setProperty("--sub-titulo", input_cor_3.value);
  for (var i = 0; i < tituloColor.length; i++) {
    tituloColor[i].classList.add("tituloColor");
  }
});

input_cor_4.addEventListener("input", () => {
  root.style.setProperty("--cor-texto", input_cor_4.value);
  for (var i = 0; i < txtColor.length; i++) {
    txtColor[i].classList.add("txtColor");
  }
});

input_cor_5.addEventListener("input", () => {
  root.style.setProperty("--menu-cor", input_cor_5.value);
  
});

input_cor_6.addEventListener("input", () => {
  root.style.setProperty("--cor-text-menu", input_cor_6.value);
  
});

function resetcolor() {
  for (var i = 0; i < txtColor.length; i++) {
    txtColor[i].classList.remove("txtColor");
  }
  for (var i = 0; i < tituloColor.length; i++) {
    tituloColor[i].classList.remove("tituloColor");
  }
}

// resetar

function resetConf() {
  barraFont.value = 100;
  barraImg.value = 100;
  barraGeral.value = 100;
  resetcolor();
  geral();
  temaPadrao()
  mudarRoot();
}