function sumar() {
    let op1 = parseFloat(document.getElementById("op1").value);
    let op2 = parseFloat(document.getElementById("op2").value);
    let resultado = op1 + op2;
    document.getElementById("pantalla").value = resultado;
}

function restar() {
    let op1 = parseFloat(document.getElementById("op1").value);
    let op2 = parseFloat(document.getElementById("op2").value);
    let resultado = op1 - op2;
    document.getElementById("pantalla").value = resultado;
}

function multiplicar() {
    let op1 = parseFloat(document.getElementById("op1").value);
    let op2 = parseFloat(document.getElementById("op2").value);
    let resultado = op1 * op2;
    document.getElementById("pantalla").value = resultado;
}

function dividir() {
    let op1 = parseFloat(document.getElementById("op1").value);
    let op2 = parseFloat(document.getElementById("op2").value);
    if (op2 === 0) {
        document.getElementById("pantalla").value = "Error";
    } else {
        let resultado = op1 / op2;
        document.getElementById("pantalla").value = resultado;
    }
}
function limpiarCampos() {
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    document.getElementById("pantalla").value = "";
}
