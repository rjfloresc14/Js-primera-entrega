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
    
    document.getElementById("resultado").innerHTML = "Cuota Mensual: $" + cuota.toFixed(2);
}

function limpiarCampos() {
    document.getElementById("monto").value = "";
    document.getElementById("plazo").value = "";
    document.getElementById("tasa").value = "";
    document.getElementById("resultado").innerHTML = "";
}