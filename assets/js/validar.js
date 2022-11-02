const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
/*
const validarTextArea = (area) => {
    if(area.validity.valid){
        area.classList.remove("contacto__formulario__error");
        area.parentElement.querySelector(".contacto___alerta").innerText = "";

    }else{
        area.classList.add("contacto__formulario__error");
        area.parentElement.querySelector(".contacto___alerta").innerText = "eror en campo mensaje";
    }
}
*/
textarea.addEventListener("blur", (area) => {validar(area.target)});

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) => {
    validar(input.target)});
});

const validar = (input) => {
    const datas = input.dataset.tipo;
    if(input.validity.valid){
        input.classList.remove("contacto__formulario__error");
        input.parentElement.querySelector(".contacto___alerta").innerText = "";

    }else{
        input.classList.add("contacto__formulario__error");
        input.parentElement.querySelector(".contacto___alerta").innerText = mostrarMensajeDeError(datas, input);
    }
};

const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no debe estar vacio",
    },
    email: {
        valueMissing: "El campo email no debe estar vacio",
        patternMismatch: "El correo debe tener un formato valido",
    },
    asunto: {
        valueMissing: "Debes escribir un asunto",
    },
    mensaje: {
        valueMissing: "Por favor escribe un mensaje",
        patternMismatch: "Tu mensaje debe tener entre 10 a 300 caracteres"
    },
};

const mostrarMensajeDeError = (datas, input) => {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajeDeError[datas][error];
        }
    });
    return mensaje;
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