let listaDeNumeroSorteados = [];
let limiteNumerico = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1

function mudarTextoDaTag (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function textoInicial(){
mudarTextoDaTag('h1', 'Bem vindo ao jogo do número secreto. ^-^');
mudarTextoDaTag('p', 'Escolha um número de 1 á 100.');
}
textoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemDeChute = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
    if (chute == numeroAleatorio){
        mudarTextoDaTag('h1', 'Parabéns!');
        mudarTextoDaTag('p', mensagemDeChute);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroAleatorio) {
            mudarTextoDaTag('p', 'O número secreto é menor');
        }
            else{
                mudarTextoDaTag('p', 'O número secreto é maior');
            }
            tentativas++
            limparTela();
    }
}

function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * limiteNumerico + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == limiteNumerico){
        listaDeNumeroSorteados = [];
    }
    
    if(listaDeNumeroSorteados.includes(numeroSecreto)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroSecreto);
        console.log(listaDeNumeroSorteados);
        return numeroSecreto;
    }
}

function reiniciarJogo(){
    tentativas = 1;
    limparTela();
    numeroAleatorio = gerarNumeroAleatorio();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

console.log(numeroAleatorio);
