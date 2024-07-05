document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.nick2').textContent;
    const element = document.querySelector('.nick2');
    element.textContent = '';

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                index = 0;
                element.textContent = '';
                typeWriter();
            }, 10000); 
        }
    }

    typeWriter();
});



document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoHtml');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 'Sigla para HyperText Markup Language (Linguagem de Marcação de Hipertexto), o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });


});


document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoCss');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 'CSS é chamado de linguagem Cascading Style Sheet (Folhas de Estilo em Cascata) e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense na decoração da sua página.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoJS');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoGit');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 
        'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoSQL');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 'Structured Query Language - SQL (linguagem de consulta estruturada), é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados, ou para processamento de fluxo de dados em um sistema de gerenciamento de fluxo de dados.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const hoverDiv = document.querySelector('#infoFigma');
    const textDiv = document.querySelector('.infoLinguagens');

    hoverDiv.addEventListener('mouseover', () => {
        textDiv.textContent = 'O Figma é uma plataforma online de criação de interfaces, wireframes e protótipos. Seu papel é oferecer recursos de design de telas para aplicações variadas, permitindo que times de Design trabalhem em conjunto no mesmo projeto remotamente e simultaneamente.';
    });

    hoverDiv.addEventListener('mouseout', () => {
        textDiv.textContent = 'Passe o mouse sobre a linguagem.';
    });
});