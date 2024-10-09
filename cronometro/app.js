const $cronometro = document.getElementById('cronometro');
const $botonInicioPausa = document.getElementById('boton-inicio-pausa');
const $botonReinicio = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intarvaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    const seguntosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);
    
    $cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${seguntosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
    
}

$botonInicioPausa.addEventListener('click', function() {
    if (estadoCronometro === 'pausado') {
        intarvaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        $botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        $botonInicioPausa.classList.remove('iniciar');
        $botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'activo';
    } else {
        window.clearInterval(intarvaloDeTiempo);
        $botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        $botonInicioPausa.classList.remove('pausar');
        $botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }
})

$botonReinicio.addEventListener('click', function() {
    window.clearInterval(intarvaloDeTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    $cronometro.innerText = '00:00:00';

    $botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    $botonInicioPausa.classList.remove('pausar');
    $botonInicioPausa.classList.add('iniciar');

    estadoCronometro = 'pausado';
});