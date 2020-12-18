var listaNomi = ['Luca', 'Marco', 'Giovanni', 'Riccardo', 'Sabrina', 'Debora', 'Martina'];
var nomeUtente = prompt('Come ti chiami?');

var invitato = false;

for (var i = 0; i < listaNomi.length; i++) {
  if (nomeUtente === listaNomi[i]) {
    invitato = true;
  }
}

if (invitato) {
  alert('Puoi partecipare alle festa!');
} else {
  alert('Non sei invitato!');
}
