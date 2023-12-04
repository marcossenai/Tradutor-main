function Escolher(idioma) {
    fetch(`textos_${idioma}.json`)
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        return resposta.json();
    })
    .then(texto => {
        document.getElementById('paragrafo1').innerText = texto.paragrafo1;
        document.getElementById('paragrafo2').innerText = texto.paragrafo2;
        document.getElementById('paragrafo3').innerText = texto.paragrafo3;
        document.getElementById('paragrafo4').innerText = texto.paragrafo4;
        document.getElementById('paragrafo5').innerText = texto.paragrafo5;
    })
    .catch(error => console.error('Erro buscando textos:', error));
}