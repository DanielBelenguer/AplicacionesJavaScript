// Recuperamos los elementos del DOM
const $boton = document.getElementById('boton-cambiar-cita');
const $cita = document.getElementById('cita');
const $autor = document.getElementById('autor');

// logica del programa

function generarIntAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};

function cambiarCita() {
    let indiceAleatorio = generarIntAleatorio(0, citas.length);
    $cita.innerText = `"${citas[indiceAleatorio].cita}"`;
    $autor.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

$boton.addEventListener('click', cambiarCita);
