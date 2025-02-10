const userChoice = prompt("Scegli se pari o dispari")
console.log(userChoice);

const userNumber = Number(prompt("inserire un valore numerico compreso tra 1 e 9,esempio[1,2,3]"))
console.log(userNumber);  //abbiamo reso il dato un numero e non una stringa

const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);

const sommaNumeri = userNumber + pcNumber;
console.log(sommaNumeri);

const calcolo = (sommaNumeri % 2);
console.log(calcolo);

if ((calcolo == 0) && (userChoice == "pari")) {
    console.log("Hai vinto");
} else if ((calcolo != 0) && (userChoice == "dispari")) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}



