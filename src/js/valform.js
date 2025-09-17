let cont = 0;

let vetor = [];

let maiorNum;
let menorNum;
let somaTotal = 0;

let matriz = [[0, 0], [0, 0]];

function valForm(){
    const regexNum = /^[\-]?[0-9]+$/;
    let cxNum = document.getElementById("num");

    if(cxNum.value == ""){
        alert("Preencha o campo 'Número'.");
        cxNum.focus();
        return false;
    }else if(!regexNum.test(cxNum.value)){
        alert("Erro! Insira apenas números inteiros.");
        cxNum.focus();
        return false;
    }else{
        alert("O número " + cxNum.value + " foi armazenado com sucesso!");
        
        maiorOuMenor(cxNum.value);
        somarNumero(cxNum.value)

        vetor[cont] = parseInt(cxNum.value);
        cont ++;

        calcularMedia();
        quantosInseridos(cont);
        armazenarNaMatriz();
        exibirTodosOsNumeros();
    }
    return false;
}

function quantosInseridos(quantia){
    let cxQuantidade = document.getElementById("quantidade");
    cxQuantidade.innerHTML = quantia;
}

function maiorOuMenor(num){
    let cxMaior = document.getElementById("maior-num");
    let cxMenor = document.getElementById("menor-num");

    if(cont == 0){
        maiorNum = num;
        menorNum = num;
    }else{
        if(num > maiorNum){
            maiorNum = num;
        }else if(num < menorNum){
            menorNum = num;
        }
    }

    cxMaior.innerHTML = maiorNum;
    cxMenor.innerHTML = menorNum;
}

function somarNumero(num){
    let cxSomaTotal = document.getElementById("soma-total");
    somaTotal += parseInt(num);
    cxSomaTotal.innerHTML = somaTotal;
}

function calcularMedia(){
    let cxMedia = document.getElementById("media-total");
    let mediaTotal = 0;

    for(let i = 0; i < cont; i++){
        mediaTotal += vetor[i];
    }

    mediaTotal /= cont;
    cxMedia.innerHTML = mediaTotal.toFixed(1);
}

function armazenarNaMatriz(){
    cxUltNum = document.getElementById("ult-num");
    cxPenultNum = document.getElementById("penult-num");

    cxUltQuadrado = document.getElementById("ult-quadrado");
    cxPenultQuadrado = document.getElementById("penult-quadrado");

    matriz[0][0] = vetor[cont-1];
    matriz[0][1] = vetor[cont-1] * vetor[cont-1];
    if(cont > 1){
        matriz[1][0] = vetor[cont-2];
        matriz[1][1] = vetor[cont-2] * vetor[cont-2];
    }

    cxUltNum.innerHTML = matriz[0][0];
    cxUltQuadrado.innerHTML = matriz[0][1];

    cxPenultNum.innerHTML = matriz[1][0];
    cxPenultQuadrado.innerHTML = matriz[1][1];
}

function exibirTodosOsNumeros(){
    cxTodosNumeros = document.getElementById("todos-numeros");
    if(cont == 1){
        cxTodosNumeros.innerHTML = (vetor[cont-1] + "; ");
    }else{
        cxTodosNumeros.innerHTML += (vetor[cont-1] + "; ");
    }
}
