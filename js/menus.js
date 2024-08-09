// menu principal

let aberto = false;
const checkbox = document.querySelector("#menu_input");
const nav = document.querySelector(".config");
const label = document.querySelector(".clic_js");

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target !== checkbox) {
    if (target === label) {
      if (aberto) {
        aberto = false;
        checkbox.checked = true;
      } else {
        aberto = true;
        checkbox.checked = false;
      }
    } else if (target !== checkbox && target !== nav) {
      checkbox.checked = false;
      if (aberto) {
        aberto = false;
        checkbox.checked = false;
      }
    }
  }
});

nav.addEventListener("click", (event) => {
  event.stopPropagation();
});

//dropdown, sla se é isso

const inputs = document.querySelectorAll(".subMenu .dropDown");
const contents = document.querySelectorAll(".subMenu");

inputs.forEach((checkbox) => {
  checkbox.addEventListener("change", dropdown);
});

function dropdown(event) {
  for (let i = 0; i < inputs.length; i++) {
    if (event.target === inputs[i]) {
      contents[i].classList.toggle("aberto");
    }
  }
}
// audio

const input = document.querySelector(".menu_audio input");
const menuAudio = document.querySelector(".menu_audio");

menuAudio.classList.add("transition");
input.addEventListener("input", menu_audio);

function menu_audio() {
  if (input.checked) {
    menuAudio.classList.add("menuAudio_aberto");
  } else {
    menuAudio.classList.remove("menuAudio_aberto");
  }
}

// formularios

const fundo_element = document.querySelector(".formularios"); // elmento pai, para manipular o fundo

// formularios ,sessões, ou divs nn lembro
const compartilhar_element = document.querySelector(".share");
const contato_element = document.querySelector(".contato");
const entrar_element = document.querySelector(".entrar");
const perfil_content = document.querySelector(".perfil");

const texto_labels = document.querySelectorAll(".textolabel");
const inputs_foto = document.querySelectorAll(".input_foto");
const labels = document.querySelectorAll(".label_foto");

// esses são os forms
const formulario_entrar = document.getElementById("form_e");
const formulario_contato = document.getElementById("form_c");

let foto_perfil = "img/null.png"; // vai para lá no login.js

// Coloca como fundo da label a foto selecionada no login "local"
inputs_foto.forEach((input, index) => {
  input.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        labels[index].style.backgroundImage = `url('${reader.result}')`;
        foto_perfil = reader.result;
      };
      reader.readAsDataURL(file);
      texto_labels[index].style.display = "none";
    } else {
      labels[index].style.backgroundImage = "none";
      texto_labels[index].style.display = "block";
    }
  });
});

function fecharCompleto(event, form) {
  if (event != null) {
    event.preventDefault();
  }

  if (form) {
    if (formulario_entrar.checkValidity()) {
      LoginLocal(event); //função criada no login.js
    } else {
      formulario_entrar.reportValidity();
    }
  } else {
    if (formulario_contato.checkValidity()) {
      // faz nada, só desaparece
      fechar(null, ["none", "none", "none", "none", "none"]);
    } else {
      formulario_contato.reportValidity();
    }
  }
}

//fecha de acordo com o array no onclick dos botoes no html
function fechar(event, display) {
  if (event != null) {
    event.preventDefault();
  }

  checkbox.checked = false;

  const forms = [
    entrar_element,
    contato_element,
    compartilhar_element,
    fundo_element,
    perfil_content,
  ];

  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = display[i];
  }
}

// ativa o "menu nativo" de compartilhamento
function nativo(event) {
  fechar(event, ["none", "none", "flex", "block", "none"]);
  if (navigator.share !== undefined) {
    navigator.share({
      title: "Tecnologia e Sustentabilidade: Unindo Campo e Cidade",
      text: "Descubra como a tecnologia está transformando a agricultura e a vida urbana, promovendo uma conexão mais eficiente e sustentável entre o campo e a cidade.",
      url: "https://jaovit.github.io/Agrinho_2024/",
    });
  }
}

// botao para copiar

document.querySelectorAll("#copyButton").forEach((Element) => {
  Element.addEventListener("click", function (event) {
    if (event != null) {
      event.preventDefault();
    }

    let info = "";

    if (event.target === Element) {
      info = event.target.attributes.infoCopy.value;
    } else {
      info = event.target.parentElement.attributes.infoCopy.value;
    }

    navigator.clipboard.writeText(info).catch(function (error) {
      console.error("Erro ao copiar o link: ", error);
    });
  });
});
