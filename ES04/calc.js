// 1. RECUPERO DEI DATI
// process.argv è un array che contiene gli argomenti passati da terminale.
// [2] è il primo numero, [3] è l'operatore, [4] è il secondo numero.
const num1 = Number(process.argv[2]);
const operatore = process.argv[3];
const num2 = Number(process.argv[4]);

let risultato;

// 2. LOGICA DI CALCOLO
// Usiamo lo switch per decidere cosa fare in base all'operatore
switch (operatore) {
    case '+':
        risultato = num1 + num2;
        break;
    case '-':
        risultato = num1 - num2;
        break;
    case '*':
    case 'x': // Gestiamo anche la 'x' come moltiplicazione, è più intuitivo
        risultato = num1 * num2;
        break;
    case '/':
        // Controllo fondamentale: non si può dividere per zero
        if (num2 === 0) {
            risultato = "Errore: impossibile dividere per zero";
        } else {
            risultato = num1 / num2;
        }
        break;
    default:
        risultato = "Operatore non riconosciuto (usa + - * /)";
}

// 3. STAMPA DEL RISULTATO
console.log("========================");
console.log("Operazione:", num1, operatore, num2);
console.log("Risultato:", risultato);
console.log("========================");
