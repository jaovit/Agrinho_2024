// animação do scroll

const elementosHeader = document.querySelectorAll(".scroll_header")
const elementos = document.querySelectorAll(".animation")
const ajuste = 0.35 // ajusta a porcentagem do objeto que deve aparecer antes da opacidade aumentar 
window.addEventListener('resize', scroll) // qunado o tamanho da pagina for alterado
window.addEventListener('load', scroll)  // quando ela terminar de carregar
window.addEventListener("scroll", scroll) // qunado a pagina for scrolada (essa palavra existe?)

function distanciaTopo(element) {
  let distance = 0;
  while (element) {
      distance += element.offsetTop
      element = element.offsetParent
  }
  return distance
}

function scroll() {
  for (let i = 0; i < elementosHeader.length; i++) {
    elementosHeader[i].classList.toggle("visible", window.scrollY > 75);
  }

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].classList.toggle("visible", window.scrollY + window.innerHeight > distanciaTopo(elementos[i]) + (elementos[i].offsetHeight * ajuste));
  }
}