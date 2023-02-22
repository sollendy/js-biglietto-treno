let anni = parseInt(prompt("Inserisci età"));
let distanza = parseInt(prompt("quale distanza vuoi percorrere?"));
let prezzo = distanza * 0.21;
let sconto;
let totale;
if( anni < 18 ) {
    sconto = (prezzo / 100) * 20;
    totale = prezzo - sconto;
    totale.toPrecision(3);
} else if( anni > 65 ) {
    sconto = (prezzo / 100) * 40;
    totale = prezzo - sconto;
    totale.toPrecision(3);
}

document.writeln(totale);