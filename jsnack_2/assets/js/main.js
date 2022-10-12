/* 
Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga
*/

const mainEl = document.getElementById('site_main');
const first_word = prompt('Inserisci la prima parola: ');
const second_word = prompt('Inserisci la seconda parola: ');
console.log(first_word, second_word);
let more;
let minus;


if (first_word.length > second_word.length) {
    more = first_word;
    minus = second_word;
    mainEl.append(more);
    mainEl.append(minus);
} else if(second_word.length > first_word.length) {
    more = second_word;
    minus = first_word;
    mainEl.append(more);
    mainEl.append(minus);
} else {
    mainEl.innerHTML = "Le parole hanno la stessa lunghezza";
    //console.log('Num1: ' + num1 + ' è uguale a Num2: ' + num2);
}