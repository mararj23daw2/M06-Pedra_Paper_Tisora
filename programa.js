/*
JOC DEL PEDRA-PAPER-TISORES
*/
// programa.js
window.onload = function(){
let opciones = ["Piedra", "Papel", "Tijeras"];
let resultadoHTML = document.getElementById("resultat");
let ganadasHTML = document.getElementById("ganadas");
let perdidasHTML = document.getElementById("perdidas");
let empatadasHTML = document.getElementById("empatadas");

document.getElementById("nuevaJugada").addEventListener("click", jugar);

function jugar() {
  let jugador = document.querySelector('input[name="opcion"]:checked');
    if (!jugador) {
        alert("Por favor, selecciona una opción.");
        return;
    }

    let opcionJugador = parseInt(jugador.value);
    let opcionMaquina = Math.floor(Math.random() * 3) + 1;
    let resultado = calcularResultado(opcionJugador, opcionMaquina);

    resultadoHTML.textContent = `La máquina ha elegido ${opciones[opcionMaquina - 1]}. ${resultado}`;
}

function calcularResultado(opcionJugador, opcionMaquina) {
    if (opcionJugador === opcionMaquina) {
        empatadasHTML.textContent = parseInt(empatadasHTML.textContent) + 1;
        return "Empate.";
    } else if ((opcionJugador === 1 && opcionMaquina === 3) ||
               (opcionJugador === 2 && opcionMaquina === 1) ||
               (opcionJugador === 3 && opcionMaquina === 2)) {
            ganadasHTML.textContent = parseInt(ganadasHTML.textContent) + 1;
        return "¡Ganaste!";
    } else {
        perdidasHTML.textContent = parseInt(perdidasHTML.textContent) + 1;
        return "¡Perdiste!";
    }
}

document.getElementById("borrarSeleccion").addEventListener("click", () => {
    document.querySelector('input[name="opcion"]:checked').checked = false;
});

document.getElementById("inicializarContadores").addEventListener("click", () => {
    ganadasHTML.textContent = 0;
    perdidasHTML.textContent = 0;
    empatadasHTML.textContent = 0;
});

document.getElementById("borrarResultado").addEventListener("click", () => {
  resultadoHTML.textContent = "La máquina ha elegido: ...";
});
}