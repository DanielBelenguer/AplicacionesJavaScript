const display= document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.id === "=") {
            display.value = eval(display.value); // eval() evalua una expresion matematica
        } else if (btn.id === "ac") {
            display.value = ""; // borrar todo
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1); // borrarra el ultimo caracter
        } else {
            display.value += btn.id; // concatenar los valores de los botones
        }
    })
})