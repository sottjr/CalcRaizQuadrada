function calcRaiz() {
    let inRaiz = document.getElementById("inRaiz");
    let outResult = document.getElementById("outResult");

    //valores
    let numero = Number(inRaiz.value);
    
    //se nao preencheu corretamente
    if (numero == 0 || isNaN(numero)) {
        alert("Informe o número corretamente!");
        inRaiz.focus();
        return;
    }

    //saber a raiz
    let raiz = Math.sqrt(numero);

    //se o valor da variável for igual ao valor da raiz, arredonda para baixo.
    if (raiz % 1 == 0) {
        outResult.textContent = "Raiz: " + raiz; //mostra a raiz
    } else {
        outResult.textContent = "Não é uma raiz inteira";
    }

}
//cria referencia ao elemento btexibir
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcRaiz);