// login

let perfil = {
    nome: "",
    sobrenome: "", // ou segundo nome nn sei, nn sei de mais nada porcaria dessa segurança do google
    email: "",
    foto: "",
    id: "",
    SetProfile: function(nome, sobrenome, email, foto, id) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.foto = foto;
        this.id = id;
    }
};


// jwt decode nativo, só separa as partes do JWT e usa o json no  opayload pra "traduzir?" sla, se der errado chama o console.erro
function parseJWT(info) {
    try {
        var base64Url = info.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error('Erro ao decodificar o token JWT:', e);
        return {};
    }
}

document.getElementById('g_id_onload').setAttribute('data-client_id', '278083335487-r4hcr6jcnesdaga60bvq2ov9d5hbbhjv.apps.googleusercontent.com');

function loginCredenciais(response) {
    let dados = parseJWT(response.credential)
    console.log(dados);

    perfil.SetProfile(dados.nome , dados.family_name, dados.email, dados.picture, dados.sub)
  }
