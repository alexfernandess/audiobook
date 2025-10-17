const botaoPlayPause = document.getElementById('play-pause');
const botaoProximoCapitulo = document.getElementById('proximo');
const botaoCapituloAnterior = document.getElementById('anterior');
const audio = document.getElementById('audio-capitulo');
const textoCapitulo = document.getElementById('capitulo');
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    console.log('Clicou no play');
    audio.play();
    taTocando = true;
    console.log('Deu play no áudio');

    botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
    console.log('Clicou no pause');
    audio.pause();
    taTocando = false;
    console.log('Deu pause no áudio');

    botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
    if (taTocando === true )  {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximoCapitulo() {
    pausarFaixa();

    if (capituloAtual < qtdCapitulos) {
        capituloAtual = capituloAtual + 1;
    } else {
        capituloAtual = 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capítulo " + capituloAtual;
}

function capituloAnterior() {
    pausarFaixa();

    if (capituloAtual === 1) {
        capituloAtual = qtdCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capítulo " + capituloAtual;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);

