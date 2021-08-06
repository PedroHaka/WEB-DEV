function calculaDesconto () {
    var precovet = document.getElementById("precovacina");
    var descontovet = document.getElementsByName("opcaoconvenio");
    
    if(descontovet.value){
        var respostavet = parseFloat(precovet.value) * 0.9;
    }
    
    if(!descontovet.value){
        var respostavet = parseFloat(precovet.value) * 0.95;
    }
    
    document.getElementById("respostavet").innerHTML = "O preço final é: " + respostavet.value;
    console.log(respostavet.value);
}

function mostraCarro () {
    
    var marcacar = document.getElementById("marcacarro").value;
    var modelocar = document.getElementById("marcacarro").value;
    var anofabcar = document.getElementById("anofabcarro").value;
    var precocar = document.getElementById("precocarro").value;
    var dataregcar = document.getElementById("dataregcarro").value;
}

var vet = document.getElementById("vet");
vet.addEventListener("click", calculaDesconto());