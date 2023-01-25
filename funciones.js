function encriptar (){
    
    var textoingresado = document.querySelector("#input").value;
    var textoencriptado = textoingresado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".output-texto").value = textoencriptado ;
    document.querySelector("#input").value = "";
    document.querySelector("#output").style.backgroundImage = "none";
   
    
}

     var botonEncriptar = document.querySelector("#encriptar") ; botonEncriptar.onclick = encriptar;

function desencriptar(){
    var textoingresado = document.querySelector("#input").value;
    var textoencriptado = textoingresado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".output-texto").value = textoencriptado ;
    document.querySelector(".input-texto").value = textoencriptado ;
    document.querySelector("#input").value = "";
   
}

    var botonDesencriptar = document.querySelector("#desencriptar") ; botonDesencriptar.onclick = desencriptar;



function copiarTexto(){
    var texto = document.getElementById("output")
    texto.select();
    texto.setSelectionRange(0 , 99999);
    document.execCommand("copy");

}
  

function limpiarTexto(){
    var texto = document.getElementById("output")
    texto.select();
    texto.setSelectionRange(0 , 99999);
    document.querySelector("#output").value = "";
}
  