// login
document.getElementById('g_id_onload').setAttribute('data-client_id', '278083335487-r4hcr6jcnesdaga60bvq2ov9d5hbbhjv.apps.googleusercontent.com');

function loginCredenciais(response) {
    let dados = response.credential
    console.log(dados);
  }