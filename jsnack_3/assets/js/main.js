/* 
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
const mainEl = document.getElementById('site_main');
let counter = 0;

for (let i = 0; i < 10; i++) {
    const num = prompt('Inserisci un numero: ');
    counter += num;
}

mainEl.innerHTML = 'La somma dei 10 numeri è pari a: ' + counter;