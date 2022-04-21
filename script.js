function Ocomeco(){
    console.log ("Sozinho, escuro, vaziu, não vejo ninguém, cadê vocês...");
    console.log ("Espero que vejam essa mensagem, não aguento mais.");
    console.log ("Acho que botei o restante do enigma num lugar onde eu me divertia...");
    console.log ("Acho que eu fazia videos lá, não lembro ao certo");
    console.log ("O ██████████ está chegando, vou ind----------------------");
    console.log (".");
    console.log ("..");
    console.log ("...");
    console.log ("_");
    console.log (" ");
    console.log ("Fim do áudio");
}

function rua(){
    window.open("video.html");
}


function alerta() {
    var resposta = prompt ("As vozes num audio ecoaram, quais números devem ser?:")
    if (resposta == "45971"){
        alert ("Você escutou os berros inquetos")
        alert ("                ENCRIPTADO                ")
    }
}

function mapa() {
    var resposta = prompt("No passeio, na viagem, o céu que não escureceu, ali se encontrou, quem será eles? Olá! disse o mais velho, todos se animaram e riram, mas ninguém se lembrou, quando?")
    if (resposta == "18.01.22") {
        alert("check")
    }
}

function fim() {
    var realFim = prompt("Oculto nos enigmas, do escuro e do claro, o que se vê, é realmente assim?")
    if (realFim == "chave para a salvação") {
        window.open("https://discord.gg/APWaNVzFmB")
    }
}

function teste() {
    console.log ("Fez corretamente!")
}

/* socorro: */

function Mudarestado(el) {
    var display = document.getElementById(el).style.visibility;

    if(display == "hidden") {
        console.log ('display == hidden')
        document.getElementById(el).style.visibility = 'visible';
    }
    else {
        console.log ('não hidden')
        document.getElementById(el).style.visibility = 'hidden';
    }
}
