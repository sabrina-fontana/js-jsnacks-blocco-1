var primoNumero = parseInt(prompt('Inserisci il primo numero'));
var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

// prima dovrei controllare con isNaN

if (primoNumero > secondoNumero) {
  console.log(primoNumero);
} else if (secondoNumero > primoNumero) {
  console.log(secondoNumero);
} else {
  console.log('Hai inserito due numeri uguali');
}
