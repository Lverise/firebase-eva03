window.addEventListener("load", ()=>{
    document.getElementById("btnFuente").addEventListener("click",cambiarTamañoLetra);
    document.getElementById("btnContraste").addEventListener("click",cambiarContraste);
})


//Esta función cambia las clases que tiene el body por unas ya creadas y que cambian el tamaño de las letras
function cambiarTamañoLetra(){
    //se asigna el body a una variable
    let fuente = document.getElementById("body")
    //se comprueba en cual es la clase actual y la cambia por la siguiente
    if(fuente.className == "texto1"){
        fuente.classList.remove("texto1")
        fuente.classList.toggle("texto2")
    }
    //se hace lo mismo hasta que se cubran todas las clases texto
    else if(fuente.className =="texto2"){
        fuente.classList.remove("texto2")
        fuente.classList.toggle("texto3")
    }
    else if(fuente.className=="texto3"){
        fuente.classList.remove("texto3")
        fuente.classList.toggle("texto1")
    }
}
//Cambia colores de distintas etiquetas
function cambiarContraste(){
    //recuperar el body
    let eBody = document.body;
    //se recupera el color que tiene en ese momento el fondo del body.
    let fondo = eBody.style.backgroundColor;
    //recupera el div
    let fondoDiv = document.getElementById("divform")
    //recupera todo lo que tenga por nombre de clase "letras"
    let letras = document.getElementsByClassName("letras")
    //console.log(fondo)
    //se hace una condicional donde si el color de fondo es uno en especifico
    //este cambien varios valores del css
    if(fondo == "rgb(121, 102, 95)"){
        //cambia el color de fondo del body
        eBody.style.backgroundColor = "black";
        //cambia el color de fondom del div
        fondoDiv.style.backgroundColor = "black";
        //recorre una colección html en base a los elementos que tengan la clase letras
        //y les va cambiando el color del texto 1 a 1 hasta cambiarlos todos
        for (let index = 0; index < letras.length; index++) {
            const element = letras[index];
            element.style.color = "white";}
    }
    //este else hace exactamente lo mismo que el if anterior solo que devuelve los colores a como estaban al inicio
    //de todos los elementos que se cambiaron anteriormente
    else{
        eBody.style.backgroundColor = "rgb(121, 102, 95)"
        fondoDiv.style.backgroundColor = "rgb(121, 102, 95)"
        for (let index = 0; index < letras.length; index++) {
            const element = letras[index];
            element.style.color = "black";}
    }
}
