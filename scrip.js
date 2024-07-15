const submitFunction = event => {
        if(!validarFormulario()) {
            event.preventDefault();// evita que el formulario se borre cuando apreto el boton de enviar
        }else{
            event.preventDefault();
            alert(
                `Los datos del formulario para enviar son: \n`+
                `Nombre: ${document.getElementById("name").value} \n`+
                `Apellido: ${document.getElementById("lastname").value} \n`+ 
                `Documento: ${document.getElementById("documentid").value} \n`+ 
                `Email: ${document.getElementById("email").value} \n`+ 
                `Edad: ${document.getElementById("yearsOld").value} \n`+ 
                `Actividad: ${document.getElementById("activity").value} \n`+
                `Estudio: ${document.getElementById("study").value} \n`+ 
                `Terminos: ${document.getElementById("terms").checked} \n`+
                `Ofertas: ${document.getElementById("novedades").checked} \n`+ 
                `Novedades: ${document.getElementById("ofertas").checked} \n`
            )
        }
}

document.getElementById("formulario").addEventListener("submit", submitFunction) // escucha envio del formulario

function validarFormulario(){
    // Valida los campos de texto
    const camposTexto = document.querySelectorAll(`input[type="text"]`)
    let validacionCorrecta = true

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ""){
            mostrarError(errorCampo, "Este campo es requerido");
            validacionCorrecta=false;
        } else if(campo.value.length > 0 && campo.value.length < 3 ){
            mostrarError(errorCampo, "Este campo debe tener al menos tres caracteres");
            validacionCorrecta=false;
        }else{
            ocultarError(errorCampo)
        }
    })

    // Esto valida los campos de mail
    const email = document.getElementById("email")
    let errorEmail = document.getElementById("errorEmail")

    if(!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email.value)) {
        mostrarError(errorEmail, "Ingrese un correo electrocido válido");
    } else{
        ocultarError(errorEmail);
    }

    //validacion del campo edad
    const edad = document.getElementById("yearsOld");
    const errorEdad = document.getElementById("errorYearsOld")

    if(edad.value < 18) {
        mostrarError(errorEdad, "La edad debe ser mayor a 18 años");
    } else{
        ocultarError(errorEdad);
    }


    //validacion actividad
    const actividad = document.getElementById("activity");
    const errorActividad = document.getElementById("errorActivity");

    if(actividad.value == ""){
        mostrarError(errorActividad, "Debe seleccion una actividad");
        validacionCorrecta=false
    } else{
        ocultarError(errorActividad);
    }


    //Validadcion Nivel Estudio
    const estudio = document.getElementById("study")
    const errorEstudio = document.getElementById("errorStudy")
        if(estudio.value == ""){
        mostrarError(errorEstudio, "Por favor seleccione un nivel de estudio")
        validacionCorrecta=false
    } else{
        ocultarError(errorEstudio)
    }

    //Validad terminos y condiciones

    const terminos = document.getElementById("terms")
    const errorTerminos = document.getElementById("errorTerms")

    if(!terminos.checked){
        mostrarError(errorTerminos, "Debe aceptar los terminos y condiciones")
        validacionCorrecta=false
    } else{
        ocultarError(errorTerminos)
    }

    return validacionCorrecta // esto nos dira si el formulario es o ono valido
}

const mostrarError = (elemento,mensaje) => {
    elemento.textContent = mensaje
    elemento.style.display = "block"
}

const ocultarError = elemento => {
    elemento.textContent = ""
    elemento.style.display = "none"
}