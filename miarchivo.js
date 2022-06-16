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

// Variables


// Objetos



// Array

var ciudades [brc, mdz, ush]

function capturar (){
    function Ciudad (nombre, epoca, gastronomia){
        this.nombre = nombre;
        this.epoca = epoca;
        this.gastronomia = gastronomia;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var epocaCapturar = document.getElementById("epoca").value;

    var nuevoSujeto = new Persona(nombreCapturar, epocaCapturar);
}