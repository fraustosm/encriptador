const textArea = document.querySelector("#textoEncriptar");
const mensaje = document.querySelector("#textoDesencriptado");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado; // Mostrar el texto encriptado en el campo de texto desencriptado
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "emes"], ["a", "awas"], ["i", "isis"], ["o", "owo"], ["u", "uwu"], ["s", "soso"], ["m", "momo"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["emes", "e"], ["awas", "a"], ["isis", "i"], ["owo", "o"], ["uwu", "u"], ["soso", "s"], ["momo", "m"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
}
