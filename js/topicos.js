const cards = document.querySelectorAll(".cards");
const carrocel = document.querySelector(".carrocel");
const box = document.querySelector(".carrocel-box");

window.addEventListener("load", () => {
  ajustColunas();
  const scrollTotal = carrocel.scrollWidth - carrocel.clientWidth;
  carrocel.scrollLeft = scrollTotal / 2;
  PositionCard();
}); // quando a página terminar de carregar

carrocel.addEventListener("scroll", PositionCard); // quando o carrocel for rolado (melhor doq scrolado...)
window.addEventListener("resize", PositionCard); // quando o tamanho da página for alterado

function Positions(element) {
  const rect = element.getBoundingClientRect();
  const elementCenterX = rect.left + rect.width / 2;

  const viewportWidth = window.innerWidth;
  const viewportWPorCento = (value) => (value / 100) * viewportWidth;
  //   const vwToPx = (value) => (parseFloat(value) / 100) * viewportWidth;

  const colunaCarrocel = ajustColunas();

  const positions = [
    [viewportWPorCento(50), "centro"],
    [viewportWPorCento(28), "esquerdo"],
    [viewportWPorCento(72), "direito"],
    [viewportWPorCento(7.5), "cantoE"],
    [viewportWPorCento(92.5), "cantoD"],
    [viewportWidth - colunaCarrocel * 1.5, "fimEs"],
    [viewportWidth + colunaCarrocel * 1.5, "fimDi"],
  ];

  const tolerance = viewportWPorCento(10);

  for (let i = 0; i < positions.length; i++) {
    const Verifica = Math.abs(positions[i][0] - elementCenterX) < tolerance;
    element.classList.toggle(positions[i][1], Verifica);
  }
}

function PositionCard() {
  for (let i = 0; i < cards.length; i++) {
    Positions(cards[i]);
  }
}

function ajustColunas() {
  const cardStyle = window.getComputedStyle(cards[1]); // todos os cards são iguais

  const marginLeft = parseFloat(cardStyle.marginLeft);
  const marginRight = parseFloat(cardStyle.marginRight);
  const width = parseFloat(cardStyle.width);

  const colunaCarrocel = marginLeft + marginRight + width;

  box.style.width = `${colunaCarrocel * (cards.length + 3.5)}px`;

  if (window.innerWidth >= 1900) {
    box.style.width = `${colunaCarrocel * (cards.length + 4.4)}px`;
  }

  if (window.innerWidth <= 1000 && window.innerWidth > 500) {
    box.style.width = `${colunaCarrocel * (cards.length + 3)}px`;
  }

  if (window.innerWidth <= 500) {
    box.style.width = `${colunaCarrocel * (cards.length + 1.225)}px`;
  }

  return colunaCarrocel;
}

function Arrows(direction) {
  const scrollTotal = carrocel.scrollWidth - carrocel.clientWidth;

  const colunaCarrocel = ajustColunas();

  if (direction == 0) {
    carrocel.scrollLeft -= colunaCarrocel;
  } else {
    carrocel.scrollLeft += colunaCarrocel;
  }
}
