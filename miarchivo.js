function calcule (precio, cant, provincia) {
    let total = Math.trunc(precio / cant);
    document.getElementById("section").style.display = 'inline-block';
    switch(provincia){
        case "ushuaia":
            document.getElementById("provincia").innerHTML = 'Ushuaia';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        case "bariloche":
            document.getElementById("provincia").innerHTML = 'Bariloche';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        case "mendoza":
            document.getElementById("provincia").innerHTML = 'Mendoza';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        default:
            break;
    }
}



function capturar (){
    function Ciudad (nombre, epoca, gastronomia){
        this.nombre = nombre;
        this.epoca = epoca;
        this.gastronomia = gastronomia;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var epocaCapturar = document.getElementById("epoca").value;
    var gastronomiaCapturar = document.getElementById("gastronomia").value;

    nuevoSujeto = new Ciudad (nombreCapturar, epocaCapturar, gastronomiaCapturar);
    console.log(nuevoSujeto);
    agregar ();
}
    var baseDatos= [];
    function agregar (){
        baseDatos.push (nuevoSujeto)
}