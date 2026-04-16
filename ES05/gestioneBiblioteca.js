console.log("=== ESERCITAZIONE 1: BIBLIOTECA DI LIBRI ===\n");

// ============================================================================
// PARTE 1: Creazione di Oggetti Libro
// ============================================================================
console.log("--- PARTE 1: Creazione Oggetti ---\n");

const libro1 = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    anno: 1954,
    genere: "Fantasy",
    pagine: 1178,
    disponibile: true
};

const libro2 = {
    titolo: "1984",
    autore: "George Orwell",
    anno: 1949,
    genere: "Distopia",
    pagine: 328,
    disponibile: false
};

// Test
console.log("Libro 1:", libro1.titolo);
console.log("Libro 2:", libro2.titolo);


// ============================================================================
// PARTE 2: Accesso e Modifica delle Proprietà
// ============================================================================
console.log("\n--- PARTE 2: Accesso e Modifica ---\n");

// 2.1 Stampa titolo e autore
console.log(`Titolo: ${libro1.titolo} - Autore: ${libro1.autore}`);

// 2.2 Modifica disponibilità libro2
libro2.disponibile = true;
console.log(`Libro 2 disponibile: ${libro2.disponibile}`);

// 2.3 Aggiunta proprietà isbn
libro1.isbn = "978-0544003415";
console.log(`ISBN Libro 1: ${libro1.isbn}`);


// ============================================================================
// PARTE 3: Metodi degli Oggetti
// ============================================================================
console.log("\n--- PARTE 3: Metodi ---\n");

const libro3 = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    anno: 1980,
    pagine: 503,
    disponibile: true,
    
    getInfo: function() {
        return `${this.titolo} di ${this.autore} (${this.anno})`;
    },
    
    presta: function() {
        if (this.disponibile) {
            this.disponibile = false;
            console.log(`Libro prestato: ${this.titolo}`);
        } else {
            console.log(`Libro non disponibile: ${this.titolo}`);
        }
    },
    
    restituisci: function() {
        this.disponibile = true;
        console.log(`Libro restituito: ${this.titolo}`);
    }
};

// Test Metodi
console.log(libro3.getInfo());
libro3.presta();
libro3.presta(); // Test seconda chiamata (non disponibile)
libro3.restituisci();


// ============================================================================
// PARTE 4: Array di Oggetti
// ============================================================================
console.log("\n--- PARTE 4: Array di Oggetti ---\n");

// 4.1 Creazione array biblioteca
const biblioteca = [libro1, libro2, libro3];

// 4.2 Funzione cercaPerAutore
function cercaPerAutore(libri, autore) {
    return libri.filter(libro => libro.autore === autore);
}

const libriTolkien = cercaPerAutore(biblioteca, "J.R.R. Tolkien");
console.log("Libri di Tolkien trovati:", libriTolkien.length);

// 4.3 Funzione libriDisponibili
function libriDisponibili(libri) {
    return libri.filter(libro => libro.disponibile === true);
}

const disponibili = libriDisponibili(biblioteca);
console.log("Libri attualmente disponibili:");
disponibili.forEach(l => console.log("- " + l.titolo));

// 4.4 Funzione stampaBiblioteca
function stampaBiblioteca(libri) {
    libri.forEach(libro => {
        console.log(`Titolo: ${libro.titolo}`);
        console.log(`Autore: ${libro.autore}`);
        console.log(`Anno: ${libro.anno}`);
        console.log(`Disponibile: ${libro.disponibile ? "Sì" : "No"}`);
        console.log("---");
    });
}

console.log("\n=== CATALOGO BIBLIOTECA ===");
stampaBiblioteca(biblioteca);


// ============================================================================
// PARTE 5: Sfida Finale (Statistiche)
// ============================================================================
console.log("\n--- PARTE 5: Sfida Finale ---\n");

function statisticheBiblioteca(libri) {
    const totaleLibri = libri.length;
    const disponibiliCount = libri.filter(l => l.disponibile).length;
    
    // Usiamo reduce per sommare le pagine
    const totalePagine = libri.reduce((acc, libro) => acc + libro.pagine, 0);
    const mediaPagine = Math.round(totalePagine / totaleLibri);
    
    // Set rimuove automaticamente i duplicati
    const autoriUnici = [...new Set(libri.map(l => l.autore))];

    return {
        totaleLibri: totaleLibri,
        libriDisponibili: disponibiliCount,
        totalePagine: totalePagine,
        mediaPagine: mediaPagine,
        autori: autoriUnici
    };
}

const stats = statisticheBiblioteca(biblioteca);
console.log("=== STATISTICHE BIBLIOTECA ===");
console.log("Totale libri:", stats.totaleLibri);
console.log("Libri disponibili:", stats.libriDisponibili);
console.log("Totale pagine:", stats.totalePagine);
console.log("Media pagine:", stats.mediaPagine);
console.log("Autori:", stats.autori.join(", "));
