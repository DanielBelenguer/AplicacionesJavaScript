// Seleccionamos los elementos del DOM
const $boton = document.querySelector('button')
const $color = document.getElementById('color')

function generarColorHexAlea () {
    let digitos = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        let indiceAlea = Math.floor(Math.random() * 16)
        color += digitos[indiceAlea]
    }

    return color
}

$boton.addEventListener('click', function() {
    let colorAlea = generarColorHexAlea()
    // Actualizo el texto
    $color.textContent = colorAlea
    // Cambio el color de fondo
    document.body.style.backgroundColor = colorAlea
})