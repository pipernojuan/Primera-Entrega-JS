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
const ciudades = ['Ushuaia','Bariloche','Mendoza']

// Objetos

function Ciudad (mejorEpoca, buenDestino, gastronomia){
    this.mejorEpoca = mejorEpoca;
    this.buenDestino = buenDestino;
    this.gastronomia = gastronomia;
}

var brc = new Ciudad ("Invierno", true, "Chivito Patagónico");
console.log (brc);

var mdz = new Ciudad ("Indistinto", true, "Viñedos");
console.log (mdz);

var ush = new Ciudad ("Invierno", true,"Centolla");
console.log (ush);


// Array

var ciudades [brc, mdz, ush]