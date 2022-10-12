/* 
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore
*/

const mainEl = document.getElementById('site_main');
const num1 = prompt("Inserisci il primo numero: ");
const num2 = prompt("Inserisci il secondo numero: ");

if (num1 > num2) {
    mainEl.innerHTML = "Il primo numero è quello maggiore";
} else if(num2 > num1) {
    mainEl.innerHTML = "Il secondo numero è quello maggiore";
} else {
    mainEl.innerHTML = "Pareggio";
}