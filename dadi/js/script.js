// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore + " - Numero del giocatore");

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer + " - Numero del computer");

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (giocatore > computer) {
  console.log(giocatore + " è maggiore di " + computer + " - Hai vinto!");
} else if (giocatore < computer) {
  console.log(giocatore + " è minore di " + computer + " - Hai perso!");
} else if (giocatore = computer) {
  console.log(giocatore + " è uguale a " + computer + " - Pareggio!");
}
