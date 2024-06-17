function abrirDER(i) {
    const div = document.getElementById('derContainer');
    div.innerHTML = ''; 
    
    const additionalText = document.createElement('p');
    const text = document.createElement('p');
    const img = document.createElement('img');
    let img2 = null;
    
    switch (i) {
        case 1:
            additionalText.textContent = "Entidades";
            text.textContent = "Entidades representam objetos ou conceitos que podem armazenar informações em um banco de dados. As entidades fortes são independentes e possuem chave primária (Primary Key), enquanto as entidades-relacionamento associam outras entidades e não possuem chave primária.";
            img.src = 'images/entidade.png';
            img2 = document.createElement('img');
            img2.src = 'images/entidade relacionamento.png'; 
            img.style.width = '200px';
            img2.style.width = '200px';
            break;
        case 2:
            additionalText.textContent = "Relacionamentos:";
            text.textContent = "Definem um vínculo entre duas ou mais entidades. A cardinalidade descrevem a lógica do relacionamento.";
            img.src = 'images/relacionamento.png';
            img.style.width = '300px';
            break;
        case 3:
            additionalText.textContent = "Atributos:";
            text.textContent = "Caracterizam as propriedades das entidades, fornecendo informações adicionais através de algum tipo dado, como texto, número, booleano, etc. Há também a Primary Key, um atributo que identifica unicamente cada registro em uma tabela.";
            img.src = 'images/atributo.png';
            img2 = document.createElement('img');
            img2.src = 'images/primary key.png'; 
            img.style.width = '150px';
            img2.style.width = '150px';
            break;
        case 4:
            additionalText.textContent = "Cardinalidades:";
            text.textContent = "Define o número de instâncias de uma entidade associada a outra. Os principais relacionamentos cardinais são: um-para-um (1:1), um-para-muitos (1:N) e muitos-para-muitos (N:N).";
            img.src = 'images/cardinalidade.png';
            img.style.width = '500px';
            break;
        default:
            additionalText.textContent = "Erro:";
            text.textContent = "Selecione uma opção válida.";
            img.src = '';
    }
    
    additionalText.style.fontSize = '20px';
    additionalText.style.fontWeight = 'bold';
    
    div.appendChild(additionalText);
    div.appendChild(text);
    div.appendChild(img);
    if (img2) 
        div.appendChild(img2);
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
