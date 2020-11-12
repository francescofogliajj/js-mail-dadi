// Chiedi all’utente la sua email,
var utente = prompt("Scrivi la tua email per accedere");

// controlla che sia nella lista di chi può accedere,
var mail = ["gianluca@boolean.careers", "andrea@boolean.careers", "adriano@boolean.careers"];

var trovata = false;

for (var i = 0; i < mail.length; i++) {

  if (utente == mail[i]) {
    trovata = true;
  }

}

// stampa un messaggio appropriato sull’esito del controllo.
if (trovata == true) {
  alert("Puoi Accedere!")
} else if (trovata == false) {
  alert("Non Puoi Accedere!")
}
