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

const brc = {
    mejorEpoca: "Invierno",
    mejorAtractivo: "Lago Nahuel Huapi",
    grastronomia: "Chivito Patagónico",
}

const mdz = {
    mejorEpoca: "Indistinto",
    mejorAtractivo: "Cañon de Atuel",
    grastronomia: "Viñedos",
}

const ush = {
    mejorEpoca: "Invierno",
    mejorAtractivo: "Faro del Fin del Mundo",
    gastronomia: "Centolla",
}

console.log (brc.mejorEpoca)
console.log (brc.mejorAtractivo)
console.log (brc.gastronomia)