// --- PARTE 1: SERIALIZZAZIONE ---

// 1.1 - Singolo oggetto
const operaLibro = {
  titolo: "Il Nome della Rosa",
  scrittore: "Umberto Eco", // cambiato autore in scrittore
  pubblicazione: 1980,
  genere: "Giallo",
  numeroPagine: 503,
  isDisponibile: true
};

const stringaJSON = JSON.stringify(operaLibro);

// 1.2 - Array di libri
const listaLibri = [
  { titolo: "Il Gattopardo", autore: "Tomasi di Lampedusa", anno: 1958 },
  { titolo: "Divina Commedia", autore: "Dante Alighieri", anno: 1320 },
  { titolo: "I Promessi Sposi", autore: "Alessandro Manzoni", anno: 1827 }
];

// Uso 4 spazi invece di 2 per l'indentazione
const catalogoFormattato = JSON.stringify(listaLibri, null, 4);

// 1.3 - Filtro proprietà
const datiEssenziali = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);


// --- PARTE 2: DESERIALIZZAZIONE ---

// 2.1 - Da stringa a oggetto
const libroConvertito = JSON.parse(jsonString);

// 2.2 - Iterazione array
const collezioneDati = JSON.parse(arrayJSON);
for (let item of collezioneDati) {
  console.log(`- Volume trovato: ${item.titolo}`);
}

// 2.3 - Gestione errore con Try/Catch
try {
  const checkJSON = JSON.parse(jsonNonValido);
} catch (err) {
  console.log("Attenzione: il formato JSON non è corretto ->", err.message);
}


// --- PARTE 3: REPLACER E REVIVER ---

// 3.1 - Esclusione dati sensibili
const profiloUtente = {
  user: "MarioRossi",
  email: "mario@email.it",
  psw: "12345678",
  level: "admin"
};

const filtroPrivacy = (key, value) => {
  // Se la chiave contiene la parola 'psw' o 'password', la escludiamo
  return (key === "psw" || key === "password") ? undefined : value;
};

const utentePrivato = JSON.stringify(profiloUtente, filtroPrivacy);

// 3.3 - Gestione Date con Reviver
const ripristinaDate = (key, val) => {
  // Controllo semplice: se è una stringa lunga che inizia con un numero (anno)
  if (typeof val === "string" && val.length > 15) {
    const dataTest = new Date(val);
    return isNaN(dataTest) ? val : dataTest;
  }
  return val;
};

const prestitoFinale = JSON.parse(prestitoJSON, ripristinaDate);


// --- PARTE 4: CLONAZIONE E STORAGE ---
const backupBiblioteca = JSON.parse(JSON.stringify(bibliotecaOriginale));
backupBiblioteca.indirizzo.città = "Napoli";
// --- PARTE 5:

const databaseLocale = (function() {
  const memoria = {};
  
  return {
    salva: (key, val) => { memoria[key] = JSON.stringify(val); },
    carica: (key) => {
      const item = memoria[key];
      return item ? JSON.parse(item) : null;
    },
    elimina: (key) => delete memoria[key],
    svuota: () => { Object.keys(memoria).forEach(k => delete memoria[k]); },
    get conta() { return Object.keys(memoria).length; }
  };
})();


// --- PARTE 6: CLASSE BIBLIOTECA ---

class GestoreBiblioteca {
  constructor(nomeChiave = "my_app_data") {
    this.chiave = nomeChiave;
    this.archivio = this.inizializza();
  }

  inizializza() {
    const salvataggio = databaseLocale.carica(this.chiave);
    return salvataggio ? salvataggio : [];
  }

  inserisci(libro) {
    this.archivio.push(libro);
    this.aggiornaStorage();
  }

  cancella(titoloDaRimuovere) {
    this.archivio = this.archivio.filter(b => b.titolo !== titoloDaRimuovere);
    this.aggiornaStorage();
  }

  aggiornaStorage() {
    databaseLocale.salva(this.chiave, this.archivio);
  }

  generaReport() {
    const uniqueAuthors = [...new Set(this.archivio.map(b => b.autore))];
    return {
      totale: this.archivio.length,
      scrittoriDistinti: uniqueAuthors.length,
      pagineComplessive: this.archivio.reduce((s, b) => s + (b.pagine || 0), 0)
    };
  }
}
