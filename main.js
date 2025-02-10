/* richiesta numero km da percorrere*/
const kmDaPercorrere = Number(prompt("Inserire il numero di km che si vuole percorrere,es [20,30,40,55]"));
console.log(kmDaPercorrere);

/* Richiesta dell'età dell'utente*/
const eta = Number(prompt("Inserisci la tua età"))
console.log(eta);

/* ricavare costo del biglietto senza sconti */

const prezzoLordo = kmDaPercorrere * 0.21
console.log(prezzoLordo);

if (eta < 18) {
    let sconto = (prezzoLordo * 20) / 100;
    console.log(sconto);
    const prezzoNetto = (prezzoLordo - sconto);
    console.log(prezzoNetto.toFixed(2));
    alert(`${"Il prezzo da pagare è"}, ${prezzoNetto.toFixed(2)}`)
} else if (eta > 65) {
    sconto = (prezzoLordo * 40) / 100;
    console.log(sconto);
    const prezzoNetto = (prezzoLordo - sconto);
    console.log(prezzoNetto.toFixed(2));
    alert(`${"Il prezzo da pagare è"}, ${prezzoNetto.toFixed(2)}`)
} else {
    console.log(prezzoLordo.toFixed(2))
    alert(`${"Il prezzo da pagare è"}, ${prezzoLordo.toFixed(2)}`);

}

