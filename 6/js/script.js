var numeroUtente = parseInt(prompt('Inserisci un numero'));

if (numeroUtente > 10) {
  alert('Il tuo numero non può essere maggiore di 10');
} else {
  for (var i = 1; i <= numeroUtente; i++) {
    console.log(Math.pow(i, 3));
  }
}
