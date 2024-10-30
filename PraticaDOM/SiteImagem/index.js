function TrocarImagem() 
{
    const imagem = document.getElementById("Imagem");
    imagem.src="/SiteImagem/img/Goku.png";
}

function TrocaTitulo() 
{
    const Titulo = document.getElementById("Titulo");
    Titulo.innerText="Esse é o Goku!";
}

function AlteraParagrafo() 
{
    const Paragrafo = document.getElementById("Paragrafo");
    Paragrafo.innerText="Seu KI é mais de 8 mil!";
}

function TocaAudio() 
{
    const Meuaudio = document.getElementById("Meuaudio");
    Meuaudio.play();
}

function AlteraBotao() 
{
    const botao = document.querySelectorAll(".botaoNormal");
    botao.forEach(button => {
        button.classList.toggle("botaoNormal");
        button.classList.toggle("botaoVerde");
        
    });
}