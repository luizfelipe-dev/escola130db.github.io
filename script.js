//Abrir janela Conteudo.html

function pop_up() {
    jan = open("conteudo.html", "dd", "width=550, height=550, top=100, left=410, scrollbars=no, resizable=no");
}

//Botão Enviar da Sessão News

function assinarNews() {

    const nomeDoUsuario = document.getElementById('nomeNews').value;
    const emailDoUsuario = document.getElementById('emailNews').value;
    localStorage.setItem('nomeDoUsuario', nomeDoUsuario);
    localStorage.setItem('emailDoUsuario', emailDoUsuario);
}

const botaoEnviar = document.getElementById('botao-news');
botaoEnviar.addEventListener('click', assinarNews);
botaoEnviar.addEventListener('click', showNameOnMenu);

//Mostrar Nome do Usuário no Menu Superior

window.onload = showNameOnMenu();

function showNameOnMenu() {
    if (localStorage.length !== 0) {
        const userSpace = document.getElementById('espacoUsuario');
        userSpace.innerText = `Olá ${localStorage.getItem('nomeDoUsuario')}, seja Bem Vindo!`
    }
}