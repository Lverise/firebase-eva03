import { registrarJugador, actualizarJugador } from "./promesas.js"

//se agrega un listener para que se ejecuten las funciones cuando ya haya cargado la pagina
addEventListener("load", ()=>{
    document.getElementById("btnFuente").addEventListener("click",cambiarTamañoLetra);
    document.getElementById("btnContraste").addEventListener("click",cambiarContraste);
    document.getElementById("btnEnviar").addEventListener("click",validar)
    document.getElementById("btnEnviar").addEventListener("click", registrar);
    document.getElementById("btnActualizar").addEventListener("click", actualizar)
})

const registrar = ()=> {
    //recupero todos los elementos necesarios
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eTelefono = document.getElementById("telefono");
    let eEmail = document.getElementById("email");
    let eAbout = document.getElementById("textabout");

// recupero el primer input type radio con name="line" que esté marcado como seleccionado
    let eLinea = document.querySelector('input[name="line"]:checked');
    let eSexo = document.getElementById("sexo")
    let eFechaNacimiento = document.getElementById("fechaNacimiento")
    let eColor = document.getElementById("color")
    let vNombre = eNombre.value
    let vApellido = eApellido.value
    let vTelefono = eTelefono.value
    let vEmail = eEmail.value
    let vAbout = eAbout.value
    let vSexo = eSexo.value
    let vLinea =  eLinea.value;
    console.log(vSexo)
    let vFechaNacimiento = eFechaNacimiento.value
    let vColor = eColor.value
    //se agregan a un objeto
    let objeto ={nombre:vNombre,apellido:vApellido,telefono:vTelefono,email:vEmail,about:vAbout,linea:vLinea,sexo:vSexo,fechaNacimiento:vFechaNacimiento,color:vColor}
// se usa la funcion de firebase para registrar y se muestra un mensaje de confrimacion en caso de que logre
    registrarJugador(objeto).then(()=>{
        alert("Se registra con éxito al jugador")
    })
}

const actualizar = ()=>{
    //Recupero elemento
    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido");
    let eTelefono = document.getElementById("UPDtelefono");
    let eEmail = document.getElementById("UPDemail");
    let eAbout = document.getElementById("UPDtextabout");
    let eLinea = document.querySelector('input[name="UPDline"]:checked');
    let eSexo = document.getElementById("UPDsexo")
    let eFechaNacimiento = document.getElementById("UPDfechaNacimiento")
    let eColor = document.getElementById("UPDcolor")
    let vNombre = eNombre.value
    let vApellido = eApellido.value
    let vTelefono = eTelefono.value

    let vEmail = eEmail.value
    let vAbout = eAbout.value
    let vSexo = eSexo.value
    let vLinea =  eLinea.value;
    console.log(vSexo)
    let vFechaNacimiento = eFechaNacimiento.value
    let vColor = eColor.value
    //se agregan a un objeto
    let objeto ={nombre:vNombre,apellido:vApellido,telefono:vTelefono,email:vEmail,about:vAbout,linea:vLinea,sexo:vSexo,fechaNacimiento:vFechaNacimiento,color:vColor}


    let id = document.getElementById("btnActualizar").value;
    //Envío el objeto y el id a las promesas

    //Cargar algo tipo loading...(para evitar que se aprete el boton muchas veces)
    document.getElementById("btnActualizar").disabled = "True";
    actualizarJugador(objeto,id).then(()=>{
        alert("Se actualiza con éxito")
        document.getElementById("btnActualizar").disabled = "False";
    }).catch((e)=>{
        console.log(e)
        //catch para que en caso de algo falle, se recoga el error y lo especifique.
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
        //finally para que se active el boton aunque falle la promesa
    })
}


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

//se usa esta funcion para no hacer la misma funcion todas las veces que se quiera validar los espacios vacios
function validar(){
    validarEspaciosVacios("nombre")
    validarEspaciosVacios("apellido")
    validarEspaciosVacios("telefono")
    validarEspaciosVacios("email")
    validarEspaciosVacios("textabout")
    //validarEspaciosVacios("line")
    //validarEspaciosVacios("formsexo")
    //validarEspaciosVacios("fechaNacimiento")
    //validarEspaciosVacios("color")

} 
//comprueba que los datos de los inputs no esten vacios, de lo contrario muestra un mensaje
function validarEspaciosVacios(idEtiqueta){
    //se recupera una etiqueta
    let etiqueta = document.getElementById(idEtiqueta)
    //console.log(etiqueta)
    //se recupera el valor que tiene
    let etiquetaValor = etiqueta.value
    //se recupera el parrafo con display none para mostrar el error en caso de ser necesario
    let parrafoAlerta = document.getElementById("p"+idEtiqueta)
    //se comprueba si esta vacio el campo
    if (etiquetaValor.trim()==""){
    //si esta vacio se cambia el color del borde del input a rojo
        etiqueta.style.borderColor = "red"
    //y el parrafo con display none ahora se vuelve visible poniendo el display en block
        parrafoAlerta.style.display = "block"
    }
    //si el campo tiene valores dentro entonces hace lo siguiente
    else{
        //mantiene escondido el parrafo
        parrafoAlerta.style.display = "none"
        //el color de borde del input se vuelve verde confirmando que el valor es correcto
        etiqueta.style.borderColor = "green"
    }
}
