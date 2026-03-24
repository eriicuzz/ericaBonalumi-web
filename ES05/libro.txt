// 1. Creazione dell'oggetto libro con le proprietà richieste
const book = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    annoPubblicazione: 1980,
    genere: "Giallo storico",
    numeroPagine: 512
};

console.log("--- Dettagli del Libro ---");

// 2. Utilizzo del ciclo for...in per stampare ogni proprietà
for (let key in book) {
    // Stampiamo il nome della chiave (proprietà) e il valore associato
    // Usiamo il template literal per una formattazione pulita
    console.log(`${key} -> ${book[key]}`);
}

console.log("--------------------------");
