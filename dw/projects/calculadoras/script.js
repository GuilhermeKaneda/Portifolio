var elementos = document.getElementsByClassName("main");

function carregarIframe(url, scale = 0.7) {
    if (elementos.length > 0) {
        elementos[0].innerHTML = '';

        var novoIframe = document.createElement('iframe');
        novoIframe.src = url;
        novoIframe.classList.add('iframe');
        novoIframe.style.transform = `scale(${scale})`;

        elementos[0].appendChild(novoIframe);
    }
}

function mat() {
    carregarIframe('Matematica/matematica.html');
}

function inss() {
    carregarIframe('INSS/inss.html');
}
