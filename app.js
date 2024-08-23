function actualizarElemento(id, displayStyle) {
    document.getElementById(id).style.display = displayStyle;
}

function manejarVisibilidad(elementos, estilo) {
    elementos.forEach(id => actualizarElemento(id, estilo));
}

function actualizarTextarea(texto) {
    const textarea = document.getElementById('output__textarea');
    textarea.value = texto;
    manejarVisibilidad(["output__textarea", "boton__copiar", "boton__borrar"], 'block');
    manejarVisibilidad(["output__img", "output__titulo", "output__parrafo"], 'none');
}

function manejarSalida(textoCifrado) {
    if (textoCifrado) {
        actualizarTextarea(textoCifrado);
    } else {
        animarTitulo();
        manejarVisibilidad(["output__img", "output__titulo", "output__parrafo"], 'block');
        manejarVisibilidad(["boton__copiar", "boton__borrar", "output__textarea"], 'none');
        document.getElementById("output__textarea").value = "";
    }
}

function encriptarTexto() {
    const inputTextarea = document.getElementById("input__textarea").value.trim();
    manejarSalida(inputTextarea ? 
        inputTextarea.replace(/e/gi, "enter")
                     .replace(/i/gi, "imes")
                     .replace(/a/gi, "ai")
                     .replace(/o/gi, "ober")
                     .replace(/u/gi, "ufat") 
        : null
    );
}

function desencriptarTexto() {
    const inputTextarea = document.getElementById("input__textarea").value;
    manejarSalida(
        inputTextarea.replace(/enter/gi, "e")
                     .replace(/imes/gi, "i")
                     .replace(/ai/gi, "a")
                     .replace(/ober/gi, "o")
                     .replace(/ufat/gi, "u")
    );
}

function verificarTexto(event) {
    const texto = event.target.value;
    const regex = /[^a-z\s]/g;
    if (regex.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
        event.target.value = texto.replace(regex, "");
    }
}

function copiarTexto() {
    const texto = document.getElementById("output__textarea");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function borrarTexto() {
    document.getElementById("input__textarea").value = "";
    document.getElementById("output__textarea").value = "";
    manejarVisibilidad(["output__textarea", "boton__copiar", "boton__borrar"], 'none');
    manejarVisibilidad(["output__img", "output__titulo", "output__parrafo"], 'block');
}