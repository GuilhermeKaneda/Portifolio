var elementos = document.getElementsByClassName("main");
var nome = document.getElementsByClassName("header");
var novoIframe = document.createElement('iframe');

function ai () {
    onlyOne();

    nome[0].textContent = "Automação Industrial";
    novoIframe.src = 'ai/index.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elementos[0].appendChild(novoIframe);
}

function inss() {
    onlyOne();

    novoIframe.src = 'INSS/inss.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elementos[0].appendChild(novoIframe);
}

function onlyOne() {
    if (elementos.length > 0)
        elementos[0].innerHTML = '';
}
