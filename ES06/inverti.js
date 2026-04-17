/**
 * Funzione che inverte le cifre di un numero
 */
function inverti_cifre(numero) {
    const segno = Math.sign(numero); // Salva il segno (+ o -)
    const valoreAssolutoStr = Math.abs(numero).toString();
    
    // Inverte la stringa e la riconverte in numero
    const invertitoStr = valoreAssolutoStr.split('').reverse().join('');
    
    return Number(invertitoStr) * segno;
}

// Lettura da riga di comando (process.argv)
// L'indice 2 è il primo argomento passato dall'utente
const inputUtente = process.argv[2];

if (inputUtente === undefined) {
    console.log("Errore: Inserisci un numero come argomento. Esempio: node inverti.js 123");
} else {
    const num = parseInt(inputUtente);
    
    if (isNaN(num)) {
        console.log("Errore: L'input fornito non è un numero intero valido.");
    } else {
        const risultato = inverti_cifre(num);
        console.log(`Numero originale: ${num}`);
        console.log(`Numero invertito: ${risultato}`);
    }
}
