let età = parseInt(prompt("Inserisci età"));
let distanza = parseInt(prompt("quale distanza vuoi percorrere?"));
let prezzo = distanza * 0.21;
let sconto;
let totale;
if( età < 18 ) {
    sconto = (prezzo / 100) * 20;
    totale = prezzo - sconto;
} else(età > 65) {
    
}

document.writeln(totale);