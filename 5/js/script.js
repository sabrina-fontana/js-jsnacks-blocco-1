var numeriDispari = [];
var numeroUtente; //la variabile si dichiara una sola volta (quindi deve essere esterna al ciclo)
for (var i = 0; i < 5; i++) {
  numeroUtente = parseInt(prompt('Inserisci un numero'));
  if (numeroUtente % 2 !== 0) {
    numeriDispari.push(numeroUtente);
  }
}

console.log(numeriDispari);
