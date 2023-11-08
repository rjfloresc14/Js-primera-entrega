// mi funcion y mis 3 variables
function calcularCuota() {
    var monto = parseFloat(document.getElementById("monto").value);
    var plazo = parseInt(document.getElementById("plazo").value);
    var tasa = parseFloat(document.getElementById("tasa").value) / 100;
    
    if (isNaN(monto) || isNaN(plazo) || isNaN(tasa)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    var tasaMensual = tasa / 12;
    var cuota = monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazo)));
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Cuota Mensual: $" + cuota.toFixed(2);
// la idea con de la siguiente formula, es asesorar al cliente, haciendole elegir un plazo que le convenga.
    if (cuota > monto * 0.3) {
        resultadoElement.innerHTML += "<br>La cuota es mayor del 30% del monto, ¡considere una tasa o plazo diferente!";
    } else if (cuota < monto * 0.1) {
        resultadoElement.innerHTML += "<br>La cuota es menor del 10% del monto, ¡puede pagar más rápido!";
    }
}
// botoncito para limpiar no puede faltar
function limpiarCampos() {
    document.getElementById("monto").value = "";
    document.getElementById("plazo").value = "";
    document.getElementById("tasa").value = "";
    document.getElementById("resultado").innerHTML = "";
}




