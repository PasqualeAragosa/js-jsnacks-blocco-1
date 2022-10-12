/* 

*/

const mainEl = document.getElementById('site_main');
const num1 = prompt("Inserisci il primo numero: ");
const num2 = prompt("Inserisci il secondo numero: ");

if (num1 > num2) {
    mainEl.innerHTML = "Il primo numero è quello maggiore";
    console.log('Num1: ' + num1 + ' è maggiore di Num2: ' + num2);
} else if(num2 > num1) {
    mainEl.innerHTML = "Il secondo numero è quello maggiore";
    console.log('Num2: ' + num2 + ' è maggiore di Num1: ' + num1);
} else {
    mainEl.innerHTML = "Pareggio";
    console.log('Num1: ' + num1 + ' è uguale a Num2: ' + num2);
}