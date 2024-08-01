// login

let perfil = {
    nome: "",
    sobrenome: "",
    email: "",
    foto: ""
}

// jwt decode nativo, sla pq 
function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

document.getElementById('g_id_onload').setAttribute('data-client_id', '278083335487-r4hcr6jcnesdaga60bvq2ov9d5hbbhjv.apps.googleusercontent.com');

function loginCredenciais(response) {
    let dados = parseJWT(response.credential)
    console.log(dados);
  }