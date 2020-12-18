// VERSIONE PIU' SEMPLICE!!!!
var somma = 0;

// so che devo chiederlo 5 volte
for (var x = 0; x < 5; x++) {
  var numeriScelti = parseInt(prompt('Inserisci un numero'));
  somma += numeriScelti;
}

console.log(somma);

// var numeriScelti = [];
// numeriScelti.push(primoNumero);
// numeriScelti.push(secondoNumero);
// numeriScelti.push(terzoNumero);
// numeriScelti.push(quartoNumero);
// numeriScelti.push(quintoNumero);
//
// var somma = 0;
//
//  CON FOR
// for (var i = 0; i < numeriScelti.length; i++) {
//   somma += numeriScelti[i];
// }
// console.log(somma);
//
//  CON WHILE
//  var i = 0;
//
//  while (i < numeriScelti.length) {
//    somma += numeriScelti[i];
//    i++;
//  }
//   console.log(somma);
