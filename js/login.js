// 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

function loginCredenciais(response) {
    let dados = jwt_decode(response.credential);
    console.log(dados);
}