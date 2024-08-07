// tema

let modo = 1;
let root = document.documentElement;

const elementosMudar = document.querySelectorAll(".tema");

function mudarRoot(tema) {
  if (tema == 0) {
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

    for (let i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.add("light");
      elementosMudar[i].classList.remove("dark");
    }
  } else if (tema == 1) {
    // padrao
    var root_prop = {
      "--color-principal": "#222525",
      "--color-principal-deg":
        "linear-gradient(to top, var(--color-principal) 7%, #1e1e1ecb 25%, transparent)",
      "--color-segundaria": "#141414",
      "--color-title": "#FEFEFE",
      "--color-title-deg": "linear-gradient(120deg, #FFFFFF 0%, #96989C 80%)",
      "--color-subtitle": "#d8d5d5",
      "--color-text": "#dde1e6",
      "--color-principal-light": "#e7eef1",
      "--color-title-light": "#27272A",
      "--color-subtitle-light": "rgb(194, 193, 193)",
      "--color-text-light": "#504f4f",
    };

    for (let i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.remove("light");
      elementosMudar[i].classList.remove("dark");
    }

    modo = true;
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

    for (let i = 0; i < elementosMudar.length; i++) {
      elementosMudar[i].classList.add("dark");
      elementosMudar[i].classList.remove("light");
    }
  }

  for (let i in root_prop) {
    root.style.setProperty(i, root_prop[i]);
  }
}

// tamanho da fonte
const txtMax = document.querySelectorAll("[txt_max]");
const barraFont = document.querySelector("#progress_font_size");

barraFont.addEventListener("input", fonte);

function fonte() {
  document.querySelector(".fonte_tamanho").innerHTML = barraFont.value / 100;
  root.style.setProperty("--font-size", barraFont.value / 100);

  for (let i = 0; i < txtMax.length; i++) {
    let VtxtMax = parseInt(txtMax[i].attributes.txt_max.value);
    txtMax[i].classList.toggle(
      `txt_${txtMax[i].attributes.txt_max.value}`,
      barraFont.value > VtxtMax
    );
  }
}

// tamanho img
const barraImg = document.querySelector("#progress_img");
const imgMax = document.querySelectorAll("[img_max]");

barraImg.addEventListener("input", img);

function img() {
  document.querySelector(".img_tamanho").innerHTML = barraImg.value / 100;
  root.style.setProperty("--img-size", barraImg.value / 100);

  for (let i = 0; i < imgMax.length; i++) {
    let VimgMax = parseInt(imgMax[i].attributes.img_max.value);
    imgMax[i].classList.toggle(
      `img_${imgMax[i].attributes.img_max.value}`,
      barraImg.value > VimgMax
    );
  }
}

// letter space
const letterBarra = document.querySelector("#progress_letter");
const letterMax = document.querySelectorAll("[letter_max]");

letterBarra.addEventListener("input", Letter);

function Letter() {
  document.querySelector(".letter_tamanho").innerHTML = letterBarra.value / 100;
  root.style.setProperty("--letter-space", letterBarra.value / 100);

  for (let i = 0; i < letterMax.length; i++) {
    let VLetterMax = parseInt(letterMax[i].attributes.letterMax_max.value);
    letterMax[i].classList.toggle(
      `letter_${letterMax[i].attributes.letter_max.value}`,
      letterBarra.value > VLetterMax
    );
  }
}

// geral
const barraGeral = document.querySelector("#progress_geral");

barraGeral.addEventListener("input", geral);

function geral() {
  document.querySelector(".geral_tamanho").innerHTML = barraGeral.value / 100;

  barraFont.value = barraGeral.value;
  barraImg.value = barraGeral.value;

  img();
  fonte();
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
  root.style.setProperty("--color-principal", input_cor_1.value);
});

input_cor_2.addEventListener("input", () => {
  root.style.setProperty("--color-segundaria", input_cor_2.value);
  root.style.setProperty("--color-principal-deg", `linear-gradient(to top, var(--color-segundaria) 10%, ${input_cor_2.value} 45%, transparent 90%);`);
  root.style.setProperty("--color-principal-light", input_cor_2.value);
});

input_cor_3.addEventListener("input", () => {
  root.style.setProperty("--color-title", input_cor_3.value);
  root.style.setProperty("--color-subtitle", input_cor_3.value);

  root.style.setProperty("--color-title-light", input_cor_3.value);
  root.style.setProperty("--color-subtitle-light", input_cor_3.value);
});

input_cor_4.addEventListener("input", () => {
  root.style.setProperty("--color-text", input_cor_4.value);
  root.style.setProperty("--color-text-light", input_cor_4.value);
});

input_cor_5.addEventListener("input", () => {
  root.style.setProperty("--color-menu", input_cor_5.value);
  root.style.setProperty("--color-menu-2", input_cor_5.value);
});

input_cor_6.addEventListener("input", () => {
  root.style.setProperty("--color-text-menu", input_cor_6.value);
  root.style.setProperty("--color-title-menu", input_cor_6.value);
});


// resetar

function resetConf() {
  barraFont.value = 100;
  barraImg.value = 100;
  barraGeral.value = 100;
  letterBarra.value = 100;
  Letter();
  geral();
  mudarRoot(1);
  modo = 1;
}
