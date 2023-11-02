
const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function ParoImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

for (let i = 0; i < numeros.length; i++) {
    console.log(`El número ${numeros[i]} es ${ParoImpar(numeros[i])}`);
}







function decirParoImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}

decirParoImpar(17); 







var lista = document.getElementById("listadofrutas");
const frutas = ["mango", "frutilla", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}





const fruta = ["mango", "frutilla", "naranja"];

function agregarFruta (fruta) {
    frutas.push(fruta)
}
agregarFruta("mandarina");

console.log(frutas);






const frutita = ["mango", "frutilla", "naranja", "mandarina"];

for (let i = 0; i < frutita.length; i++) {
    console.log(frutita[i]);
}

const frutitas = ["mango", "frutilla", "naranja", "mandarina"];
function verificarLongitud(frutas) {
    if (frutas.length % 2 === 0) {
        console.log("La longitud del array es PAR");
    } else {
        console.log("La longitud del array es IMPAR");
    }
}






verificarLongitud(frutas);

function evaluacionAlumno(nombre, nota) {
    if (nota > 6)
    console.log (`La alumna ${nombre} aprobó`);

    else {
    console.log (`La alumna ${nombre} desaprobó`);
    }
}
evaluacionAlumno("Sara", 7);
evaluacionAlumno("Mia", 3);






const frases = [
    "Todo pasa por algo",
    "No hay mal que por bien no venga",
    "Al que madruga Dios lo ayuda",
    "All you need is love", 
    "De tal palo a tal astilla",
    "No sueñes tu vida, vive tu sueño",
    "Pienso luego existo"
];

function mostrarfraseAleatoria() {
    const valorAleatorio = Math.floor(Math.random() * 7);
    return frases[valorAleatorio];
}

console.log(mostrarfraseAleatoria());







const equipoAZUL = ["Male", "Juana", "Trini", "Cata"];
const equipoAMARILLO = ["Belu", "Clari", "Isa", "Martu"];

function quéEquipoEs(jugadoras){
    if (equipoAZUL.includes (jugadoras)){
        console.log(`La jugadora ${jugadoras} es del equipo AZUL`);
    
    } else {
        console.log(`La jugadora ${jugadoras} es del equipo AMARILLO.`);
    
    }
}

quéEquipoEs("Juana");
quéEquipoEs("Isa");
