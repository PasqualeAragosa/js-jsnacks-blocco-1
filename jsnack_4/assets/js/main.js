/* 
Snack 4 Blocco 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
const mainEl = document.getElementById('site_main');
const nameUser = prompt('Verifica se puoi partecipare: ');
const nameList = [
    'Giorgio',
    'Pasquale',
    'Andrea'
]

let result = false;
let i = 0;

while (i < nameList.length) {
    if (nameUser === nameList[i]) {
        result = true;
    }
    i++;
}

if (result === true) {
    mainEl.innerHTML = 'Benvenuto';
} else {
    mainEl.innerHTML = 'Non sei il benvenuto';
}