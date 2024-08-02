// login

// dados do perfil do usuario... segurança de uma marea
let perfil = {
  nome: "",
  sobrenome: "", // ou segundo nome nn sei, nn sei de mais nada porcaria dessa segurança do google
  email: "",
  foto: "",
  id: "", //ou senha
  data: "",
  bio: "",
  SetProfile: function (array) {
    this.foto = array[0];
    this.nome = array[1];
    this.data = array[2];
    this.email = array[3];
    this.id = array[4];
    this.sobrenome = array[5];
  },
};

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
  console.log(iLoginvalue);
  ProfileContent();
}

//  const formulario_entrar = document.getElementById("form_e");
const ancora = document.querySelectorAll(".profile");

function ProfileContent() {
  fechar(null, ["none", "none", "none", "none", "none"]);
  ancora.forEach((a) => {
    a.innerHTML = `<a href="#" onclick='fechar( event, ["none", "none", "none", "flex", "flex"])'>
          <img src="${perfil.foto}" alt="foto de perfil">
          <p class="texto tema textColor ">Perfil</p>
        </a>`;
  });

  //   setar os valores para o perfil
}
