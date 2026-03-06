
const args = process.argv.slice(2);

// Controllo: l'utente ha inserito 3 parametri? (num1, operazione, num2)
if (args.length < 3) {
    console.log('Errore! Ordine sbagliato, controlla');
console.log('Esempio: node calc.js 5 add 3');
    process.exit(1);
}

const n1 = parseFloat(args[0]);
const op = args[1].toLowerCase();
const n2 = parseFloat(args[2]);

let res;

// Logica della calcolatrice
switch (op) {
    case 'add': res = n1 + n2; break;
    case 'sub': res = n1 - n2; break;
    case 'mult': res = n1 * n2; break;
    case 'div': res = n2 !== 0 ? n1 / n2 : "Errore: div per 0"; break;
    default: res = "Operazione non valida";
}

console.log(`\n--- RISULTATO ---`);
console.log(`${n1} ${op} ${n2} = ${res}`);
console.log(`-----------------\n`);
