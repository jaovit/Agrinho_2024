// login

// dados do perfil do usuario... segurança de uma marea
let perfil = {
  logado: false,
  nome: "",
  sobrenome: "", // ou segundo nome nn sei, nn sei de mais nada porcaria dessa segurança do google
  email: "",
  foto: "",
  id: "", //ou senha
  data: "",
  bio: "",
  capa: "",
  SetProfile: function (array) {
    this.foto = array[0];
    this.nome = array[1];
    this.data = array[2];
    this.email = array[3];
    this.id = array[4];
    this.sobrenome = array[5];
    this.bio = array[6];
    this.capa = array[7];
  },
  SalvaStorage: () => {
    localStorage.setItem("perfil", JSON.stringify(perfil));
  },
};

window.addEventListener("load", () => {
  const perfilStr = localStorage.getItem("perfil");

  if (perfilStr) {
    const storedPerfil = JSON.parse(perfilStr);
    if (storedPerfil.logado) {
      perfil = Object.assign(perfil, storedPerfil);
      ProfileContent();
    }
  }
});

// jwt decode nativo, só separa as partes do JWT e usa o json no opayload pra "traduzir?" sla, se der errado chama o console.erro
function parseJWT(info) {
  try {
    var base64Url = info.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Erro ao decodificar o token JWT:", e);
    return {};
  }
}

document
  .getElementById("g_id_onload")
  .setAttribute(
    "data-client_id",
    "278083335487-r4hcr6jcnesdaga60bvq2ov9d5hbbhjv.apps.googleusercontent.com"
  );

function loginCredenciais(response) {
  let dados = parseJWT(response.credential);
  perfil.SetProfile([
    dados.picture,
    dados.name,
    "Data de nascimento",
    dados.email,
    dados.sub,
    dados.family_name,
  ]);

  fechar(null, ["none", "none", "none", "none", "none"]);
  ProfileContent();
}

//  LoginLocal  é chamada lá em menus.js quando o formulario for eviado
function LoginLocal(event) {
  const inputsLogin = document.querySelectorAll("#form_e .input");
  let iLoginvalue = [];

  inputsLogin.forEach((input) => {
    iLoginvalue.push(input.value);
  });

  iLoginvalue[0] = foto_perfil;
  perfil.SetProfile(iLoginvalue);
  fechar(null, ["none", "none", "none", "none", "none"]);
  ProfileContent();
}

// parte da logica do perfil
//  const formulario_entrar = document.getElementById("form_e");
const ancora = document.querySelectorAll(".profile");
const perfilInputs = document.querySelectorAll(".perfil .input");

function ProfileContent() {
  perfil.logado = true;

  ancora.forEach((a) => {
    a.innerHTML = `<a href="#" onclick='fechar( event, ["none", "none", "none", "block", "flex"])'>
          <img src="${perfil.foto}" alt="foto de perfil">
          <p class="texto tema textColor ">Perfil</p>
        </a>`;
  });

  const perfilMap = new Map(Object.entries(perfil));

  for (let i = 0; i < perfilInputs.length; i++) {
    const input = perfilInputs[i];
    const infoType = input.getAttribute("infoType");

    if (perfilMap.has(infoType)) {
      if (infoType != "capa" && infoType != "foto") {
        input.value = perfilMap.get(infoType);

        if (perfilMap.get(infoType) == null || perfilMap.get(infoType) == "") {
          input.value = `${infoType}`;
        }

        if (infoType == "email") {
          input.textContent = perfilMap.get(infoType);
        }
      }
    }
  }

  for (let i = 0; i < labels.length; i++) {
    if (perfil.foto != "img/null.png" && perfil.foto != "") {
      labels[i].style.backgroundImage = `url('${perfil.foto}')`;
      texto_labels[i].style.display = "none";
    } else {
      labels[i].style.backgroundImage = "none";
      texto_labels[i].style.display = "block";
    }
  }

  const capa = document.querySelector(".capa");
  const capaText = document.querySelector(".capa > .textolabel");

  if (perfil.capa != null && perfil.capa != "") {
    capa.style.backgroundImage = `url('${perfil.capa}')`;
    capaText.style.display = "none";
  } else {
    capa.style.backgroundImage = "none";
    capaText.style.display = "block";
  }

  perfil.SalvaStorage();
}

perfilInputs.forEach((input) => {
  input.addEventListener("change", () => {
    atualizaPerfil(input);
  });
});

function atualizaPerfil(input) {
  const attributes = input.getAttribute("infoType");

  if (input.value == "") {
    if (attributes != "capa" && attributes != "foto") {
      input.value = perfil[attributes];
    }
  } else {
    if (attributes != "capa" && attributes != "foto") {
      perfil[attributes] = input.value;
    } else {
      const file = input.files[0];
      if (file) {
        const fileReader = new FileReader();

        fileReader.onload = function (event) {
          perfil[attributes] = event.target.result;
          perfil.SalvaStorage();
          ProfileContent();
        };
        fileReader.readAsDataURL(file);
      }
    }
  }

  perfil.SalvaStorage();
  ProfileContent();
}

function Deslogar() {
  fechar(null, ["none", "none", "none", "none", "none"]);

  perfil.SetProfile(["", "", "2000-01-01", "", "", "", "", ""]);
  ProfileContent();

  ancora.forEach((a) => {
    a.innerHTML = ` <a href="#" onclick='fechar( event, ["flex", "none", "none", "block", "none"])'>
          <p class="texto tema textColor ">Entrar</p>
        </a>`;
  });

  perfil.logado = false;
  perfil.SalvaStorage();
}
