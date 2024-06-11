addEventListener("click",cambiarTamañoLetra)
addEventListener("btnEnviar",validarVacios)
function cambiarTamañoLetra(){
    let fuente = document.getElementsByClassName("texto1")
    if(fuente == "texto1"){
        document.getElementsByClassName("texto1")
    }
}

function validarVacios(){
    let nombre = document.getElementById("nombre")
    let vNombre = nombre.value
    if (vNombre == ""){
        
    }
}