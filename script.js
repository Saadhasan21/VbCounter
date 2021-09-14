let dec = document.querySelector('#dec');
let reset = document.querySelector('#reset');
let inc = document.querySelector('#inc');
let input = document.querySelector('input');


inc.addEventListener('click', increment);

function increment() {
    input.value = parseInt(input.value) + 1;
}

reset.addEventListener('click', resetzero);

function resetzero() {
    input.value = 0;
}

dec.addEventListener('click', decrement);

function decrement() {
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}