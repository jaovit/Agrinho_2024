// otimização
const inputOti = document.querySelector("#progress_otim_size");
const blurElement = document.querySelector(".formularios");
const otimiz = [baixa, media, alta];
let animations = true;

inputOti.addEventListener("change", () => {
  for (let i = 0; i < otimiz.length; i++) {
    if (inputOti.value == i) {
      otimiz[i]();
    }
  }
});

function baixa() {
  // ativa o blur do forms (isso é muito pessado)
  blurElement.style.backdropFilter = "blur(10px)";

  // ativa o transition
  const styleSheets = document.styleSheets;
  for (let i = 0; i < styleSheets.length; i++) {
    const sheet = styleSheets[i];
    if (
      sheet.ownerNode &&
      sheet.ownerNode.innerHTML.includes("transition: none !important;")
    ) {
      sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
    }
  }
  
  //ativa as animações
  animations = true;
}

function media() {
  // desativa o blur do forms (isso é muito pessado)
  blurElement.style.backdropFilter = "none";

  // ativa o transition
  const styleSheets = document.styleSheets;
  for (let i = 0; i < styleSheets.length; i++) {
    const sheet = styleSheets[i];
    if (
      sheet.ownerNode &&
      sheet.ownerNode.innerHTML.includes("transition: none !important;")
    ) {
      sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
    }
  }

  //ativa as animações
  animations = true;
}

function alta() {
  // desativa o blur do forms (isso é muito pessado)
  blurElement.style.backdropFilter = "none";

  // desativa o transition
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      transition: none !important;
    }
  `;
  document.head.appendChild(style);

  //desativa as animações
  animations = false;
}

// animação do scroll

const elementosHeader = document.querySelectorAll(".scroll_header");
const elementos = document.querySelectorAll(".animation");
const ajuste = 0.5; // ajusta a porcentagem do objeto que deve aparecer antes da opacidade aumentar
window.addEventListener("resize", scroll); // qunado o tamanho da pagina for alterado
window.addEventListener("load", scroll); // quando ela terminar de carregar
window.addEventListener("scroll", scroll); // qunado a pagina for scrolada (essa palavra existe?)

function distanciaTopo(element) {
  let distance = 0;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return distance;
}

function scroll() {
  if (animations) {
    for (let i = 0; i < elementosHeader.length; i++) {
      elementosHeader[i].classList.toggle("visible", window.scrollY > 75);
    }

    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.toggle(
        "visible",
        window.scrollY + window.innerHeight >
          distanciaTopo(elementos[i]) + elementos[i].offsetHeight * ajuste
      );
    }
  }
}

// animação do topicos 
let direcao = true;
// Chama a função rolagem a cada 10 segundos

window.addEventListener("load", setInterval(rolagem, 10000));

function rolagem() {
  if (animations) {
  
  const scrollTotal = carrocel.scrollWidth - carrocel.clientWidth;
  const colunaCarrocel = ajustColunas();


  if (carrocel.scrollLeft >= scrollTotal) {
    direcao = false;
  } else if(carrocel.scrollLeft <= 0) {
    direcao = true;
  }

  if (direcao) {
    carrocel.scrollLeft += colunaCarrocel;
  } else {
    carrocel.scrollLeft -= colunaCarrocel;
  }
}
}


