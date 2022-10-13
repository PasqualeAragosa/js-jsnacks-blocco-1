/* 
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
const mainEl = document.getElementById('site_main');
let counter = 0;

let i = 0;

while (i < 10) {
    const num = Number(prompt('Inserisci un numero: '));
    console.log('Numero inserito ', num);
    counter = counter + num;
    console.log('Somma ', counter);
    i++;
}

// for (let i = 0; i < 10; i++) {
//     const num = Number(prompt('Inserisci un numero: '));
//     console.log('Numero inserito ', num);
//     counter = counter + num;
//     console.log('Somma ', counter);
// }

mainEl.innerHTML = 'La somma dei 10 numeri è pari a: ' + counter;