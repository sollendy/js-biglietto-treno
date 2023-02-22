let età = parseInt(prompt("Inserisci età"));
let distanza = parseInt(prompt("quale distanza vuoi percorrere?"));
let prezzo = distanza * 0.21;
if( età < 18 ) {
    prezzo = ( distanza * 0.21 - 20% );
}

document.writeln(prezzo);