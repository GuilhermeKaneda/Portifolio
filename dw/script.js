function abrirIframe(url) {
    document.getElementById('projetosContainer').innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = url;
    document.getElementById('projetosContainer').appendChild(iframe);
}
