const apiKey = "fbb0d70895a30bad5d7ccd4be2567731";

const cepInput = document.querySelector("#cep");
const botao = document.querySelector("#set");

const city = document.querySelector(".city");
const temperatura = document.querySelector(".temp span");
const condicaIcon = document.querySelector(".iconClima img");
const humidade = document.querySelector(".humidade span");
// const vento = document.querySelector("#vento span")

const erroMensagem = document.querySelector(".erro");
const loader = document.querySelector(".load");
const resultadoelement = document.querySelector(".resultado");
const setcity = document.querySelector(".setcity");

async function setApiClima(localidade) {
  const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${localidade}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiClimaURL);
  const inf = await res.json();

  exibir(["none", "none", "none", "block"]);

  return inf;
}

async function setClima(localidade) {
  const inf = await setApiClima(localidade);

  if (inf.cod === "404") {
    exibir(["none", "none", "block", "none"]);
    cepInput.value = "";
    return;
  }

  city.innerText = inf.name;
  temperatura.innerText = parseInt(inf.main.temp);
  condicaIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${inf.weather[0].icon}.png`
  );
  humidade.innerText = `${inf.main.humidity}%`;
  // vento.innerText = `${inf.wind.speed}km/h`
}

botao.addEventListener("click", async (e) => {
  e.preventDefault();

  const cep = cepInput.value;

  setApiCep(cep);
  exibir(["none", "block", "none", "none"]);
});

async function setApiCep(cep) {
  try {
    const apiCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var infApiCep = await apiCep.json();
    if (infApiCep.erro) {
      exibir(["none", "none", "block", "none"]);
      cepInput.value = "";
    }

    setClima(infApiCep.localidade);
  } catch (erro) {
    exibir(["none", "none", "block", "none"]);
    cepInput.value = "";
  }
}

erroMensagem.addEventListener("click", (e) => {
  e.preventDefault();
  exibir(["block", "none", "none", "none"]);
});

function exibir(display) {
  checkbox.checked = false;

  const forms = [setcity, loader, erroMensagem, resultadoelement];

  for (let i = 0; i < forms.length; i++) {
    forms[i].style.cssText = `display: ${display[i]}`;
  }
}
