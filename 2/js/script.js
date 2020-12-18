var primaParola = prompt('Inserisci una parola');
var secondaParola = prompt("Inserisci un'altra parola");

if (primaParola.includes(' ') || secondaParola.includes(' ')) {
  alert('Inserisci una sola parola');
} else {
  if (primaParola.length > secondaParola.length) {
    console.log(secondaParola, primaParola);
  } else if (secondaParola.length > primaParola.length) {
    console.log(primaParola, secondaParola);
  } else {
    console.log('le due parola hanno la stessa lunghezza');
  }
}
