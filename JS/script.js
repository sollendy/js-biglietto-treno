let età = parseInt(prompt("Inserisci età"));
let distanza = parseInt(prompt("quale distanza vuoi percorrere?"));
let prezzo = distanza * 0.21;
let totale;
if( età < 18 ) {
    totale = (prezzo / 100) * 20;
}

document.writeln(totale);