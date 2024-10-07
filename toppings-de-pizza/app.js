const $toppings = document.getElementsByClassName('topping');

for ($topping of $toppings) {
    $topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}
