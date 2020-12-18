var numeroUtente = prompt('Inserisci un numero di 4 cifre');
var somma = 0;

if(numeroUtente.length !== 4) {
  alert('Errore. Il numero deve avere 4 cifre');
} else {
  for (var i = 0; i < 4; i++) {
    somma += parseInt(numeroUtente[i]);
  }
}

console.log(somma);
