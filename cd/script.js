function abrirColab(text, url, i) {
    switch (i) {
        case 0:
            var div = document.getElementById('colabContainer1');
            break;
        case 1:
            var div = document.getElementById('colabContainer2');
            break;
        case 2:
            var div = document.getElementById('colabContainer3');
            break;
        case 3:
            var div = document.getElementById('colabContainer4');
            break;
        case 4:
            var div = document.getElementById('colabContainer5');
            break;
        case 5:
            var div = document.getElementById('colabContainer6');
            break;
        default:
            break;
    }

    div.innerHTML = ''; 
    
    const titulo = document.createElement('p');
    const img = document.createElement('img');
    titulo.textContent = text;
    img.src = url;
    
    img.style.width = '70%';
    titulo.style.fontSize = '22px';
    titulo.style.fontWeight = 'bold';
    
    div.appendChild(titulo);
    div.appendChild(img);
}


function abrirImagem(url) {
    const projetosContainer = document.getElementById('projetosContainer');
    projetosContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = url;
    img.style.maxHeight = '700px';  
    img.style.maxWidth = '100%';
    img.style.height = 'auto';     
    img.style.width = 'auto';       
    img.style.margin = 'auto';
    projetosContainer.appendChild(img);

    projetosContainer.appendChild(document.createElement('br'));

    const github = document.createElement('a');
    github.href = 'https://github.com/SEUUSERNAME';
    github.target = '_blank';

    const imgGit = document.createElement('img');
    imgGit.src = 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white';

    github.appendChild(imgGit);
    projetosContainer.appendChild(github);
}
