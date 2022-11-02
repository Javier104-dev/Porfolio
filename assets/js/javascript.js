document.querySelector("#boton__id").onclick = function(event){
    validarNombre();
    validarEmail();
    validarAsunto();
    validarMensaje();

    event.preventDefault();
}

function validarNombre(){
    const $nombre = document.querySelector("#nombre__input").value;

    if($nombre.trim() === ""){
        alertaNombre();
    
    }else if(!/^[a-z ]+$/gi.test($nombre)){
        alertaNombreIncorrecto();

    }else if($nombre.length > 50){
        alertaNombreLargo();
        
    }else{
        limpiarAlertaNombre();
    }
}

function validarEmail(){
    const $email = document.querySelector("#email__input").value;

    if($email.trim() === ""){
        alertaEmail();
    
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($email)){
        alertaEmailIncorrecto();
    }else{
        limpiarAlertaEmail();
    }
}

function validarAsunto(){
    const $asunto = document.querySelector("#asunto__input").value;

    if($asunto.trim() === ""){
        alertaAsunto();

    }else if($asunto.length > 50){
        alertaAsuntoLargo();
        
    }else{
        limpiarAlertaAsunto();
    }
}

function validarMensaje(){
    const $mensaje = document.querySelector("#mensaje__input").value;

    if($mensaje.trim() === ""){
        alertaMensaje()
    }else if($mensaje.length > 300){
        alertaMensajeLargo($mensaje.length);
    
    }else{
        limpiarAlertaMensaje();
    }
}

function habilitarBoton(){
    const nombre = document.querySelector("#nombre__input").value;
    const email = document.querySelector("#email__input").value;
    const asunto = document.querySelector("#asunto__input").value;
    const mensaje = document.querySelector("#mensaje__input").value;

    if (((nombre.trim() && asunto.trim()) && (email.trim() && mensaje.trim()))) {
        document.querySelector("#boton__id").disabled = false;

    } else {
        document.querySelector("#boton__id").disabled = true;
    }
}

function alertaNombre(){
    const alerta = document.querySelector("#nombre__alerta");
    const borde = document.querySelector("#nombre__input");

    alerta.textContent = "*Este campo no puede estar vacio";
    borde.style.border = "2px solid #db4242";
}

function alertaNombreLargo(){
    const alerta = document.querySelector("#nombre__alerta");
    const borde = document.querySelector("#nombre__input");

    alerta.textContent = "*Solo se aceptan menos de 50 caracteres";
    borde.style.border = "2px solid #db4242";
}

function alertaNombreIncorrecto(){
    const alerta = document.querySelector("#nombre__alerta");
    const borde = document.querySelector("#nombre__input");

    alerta.textContent = "*Ingresa un nombre sin numeros o caracteres especiales";
    borde.style.border = "2px solid #db4242";
}

function alertaEmail(){
    const alerta = document.querySelector("#email__alerta");
    const boorde = document.querySelector("#email__input");

    alerta.textContent = "*Este campo no puede estar vacio";
    boorde.style.border = "2px solid #db4242";
}

function alertaEmailIncorrecto(){
    const alerta = document.querySelector("#email__alerta");
    const borde = document.querySelector("#asunto__input");

    alerta.textContent = "*Ingresa un email valido";
    borde.style.border = "2px solid #db4242";
}

function alertaAsunto(){
    const alerta = document.querySelector("#asunto__alerta");
    const borde = document.querySelector("#asunto__input");
    
    alerta.textContent = "*Este campo no puede estar vacio";
    borde.style.border = "2px solid #db4242";
}

function alertaAsuntoLargo(){
    const alerta = document.querySelector("#asunto__alerta");
    const borde = document.querySelector("#asunto__input");

    alerta.textContent = "*Solo se aceptan menos de 50 caracteres";
    borde.style.border = "2px solid #db4242";
}

function alertaMensaje(){
    const alerta = document.querySelector("#mensaje__alerta");
    const borde = document.querySelector("#mensaje__input");

    alerta.textContent = "*Por favor escribe tu mensaje";
    borde.style.border = "2px solid #db4242";
}

function alertaMensajeLargo(cantidad){
    const alerta = document.querySelector("#mensaje__alerta");
    const borde = document.querySelector("#mensaje__input");

    alerta.textContent = `*Tu mensaje solo puede tener 300 caracteres, actualmente tienes ${cantidad} caracteres`;
    borde.style.border = "2px solid #db4242";
}

function limpiarAlertaNombre(){
    const alerta = document.querySelector("#nombre__alerta");
    const borde = document.querySelector("#nombre__input");

    alerta.textContent = "";
    borde.style.border = "none";
}

function limpiarAlertaEmail(){
    const alerta = document.querySelector("#email__alerta");
    const borde = document.querySelector("#email__input");

    alerta.textContent = "";
    borde.style.border = "none";
}

function limpiarAlertaAsunto(){
    const alerta = document.querySelector("#asunto__alerta");
    const borde = document.querySelector("#asunto__input");

    alerta.textContent = "";
    borde.style.border = "none";
}

function limpiarAlertaMensaje(){
    const alerta = document.querySelector("#mensaje__alerta");
    const borde = document.querySelector("#mensaje__input");

    alerta.textContent = "";
    borde.style.border = "none";
}
