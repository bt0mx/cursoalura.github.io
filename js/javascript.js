function encriptar() { 
    var entrada = document.getElementById("textarea").value;
 
    if (entrada == "") { 
        alert("Ingresa un valor");
        return true;
    }
    else if( /[A-Z]/.test(entrada)){
      alert("No puede contener mayusculas");
    }
    else if(/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(entrada)){
      alert("No puede contener acentos");
    }
    else{
         var encriptado = entrada.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[a]/gi,'ai').replace(/[o]/gi,'ober').replace(/[u]/gi,'ufat');
         document.getElementById("codificado").innerHTML=encriptado;
         document.getElementById("ocultar").innerHTML="";
         document.getElementById("copiar").style.display="block";
         document.getElementById("muneco").style.display="none";
         document.getElementById("codificado").style.marginTop="0px";
    }

}

function desencriptar() {
   var salida = document.getElementById("textarea").value;
   
    if (salida == "") { 
         alert("Ingresa un valor");
        return true;
    }
    else if( /[A-Z]/.test(salida)){
         alert("No puede contener mayusculas");
    }
    else if( /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(salida)){
      alert("No puede contener acentos");
    }
    else{
      var desencriptar = salida.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
      document.getElementById("codificado").innerHTML=desencriptar;
      document.getElementById("ocultar").innerHTML="";
      document.getElementById("copiar").style.display="block";
      document.getElementById("muneco").style.display="none";
    }
}

function copiar() {
    var paraCopiar = document.getElementById("codificado");
    paraCopiar.select();
    document.execCommand('copy');
    alert('Copiado');

}