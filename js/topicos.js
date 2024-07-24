const cards = document.querySelectorAll(".cards");
const carrocel = document.querySelector(".carrocel-box");

window.addEventListener("load", () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.cssText = `order: ${i};`;
    }
    PositionCard()
}) // quando ela terminar de carregar
carrocel.addEventListener("scroll", PositionCard);// qunado o carrocel for scrolada (essa palavra existe?)
window.addEventListener('resize', PositionCard) // qunado o tamanho da pagina for alterado 

function Positions(element, position) {
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;

    const viewportWidth = window.innerWidth;
    const viewportWPorCento = viewportWidth / 100

    const positions = {
        centro: viewportWPorCento * 50,
        esquerdo: viewportWPorCento * 28,
        direito: viewportWPorCento * 72,
        cantoE: viewportWPorCento * 7.5,
        cantoD: viewportWPorCento * 92.5 
    };

    // Tolerancia em px
    const tolerance = viewportWidth / 7.5;

    return Math.abs(positions[position] - elementCenterX) < tolerance;
}

function PositionCard() {
    for (let index = 0; index < cards.length; index++) {
        cards[index].classList.toggle("centro", Positions(cards[index], 'centro'));
        cards[index].classList.toggle("esquerdo", Positions(cards[index], 'esquerdo'));
        cards[index].classList.toggle("direito", Positions(cards[index], 'direito'));
        cards[index].classList.toggle("cantoE", Positions(cards[index], 'cantoE'));
        cards[index].classList.toggle("cantoD", Positions(cards[index], 'cantoD'));
    }
}

