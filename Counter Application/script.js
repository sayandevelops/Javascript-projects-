const display = document.getElementById('count');
const increase = document.getElementById('increase');
const Decrease = document.getElementById('Decrease');
const reset = document.getElementById('reset');

let count = 0;


increase.addEventListener('click', () => {
    count++,
    
     display.innerText = count

})

Decrease.addEventListener('click', () => {
    if (count > 0) {
        count--,

            display.innerText = count
    } else {
        count = 0,

           display.innerText = count
    }

})

reset.addEventListener('click', () => {

         display.innerText = count

})