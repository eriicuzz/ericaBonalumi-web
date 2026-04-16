
const libroCompleto = { titolo: "Esempio", autore: "Autore", anno: 2024, isbn: "123", pagine: 100 };
const jsonString = '{"titolo":"Don Chisciotte","autore":"Cervantes","anno":1605}';
const arrayJSON = '[{"titolo":"Libro 1"},{"titolo":"Libro 2"}]';
const jsonNonValido = '{"titolo": "Errore" , }'; // Virgola finale che rompe il JSON
const prestitoJSON = '{"libro":"1984","data":"2024-04-16T10:00:00Z"}';
const bibliotecaOriginale = { nome: "Civica", indirizzo: { città: "Milano" } };

// --- PARTE 1: SERIALIZZAZIONE ---

// 1.1 - Singolo oggetto
const operaLibro = {
  titolo: "Il Nome della Rosa",
  scrittore: "Umberto Eco",
  pubblicazione: 1980,
  genere: "Giallo",
  numeroPagine: 503,
  isDisponibile: true
};
const stringaJSON = JSON.stringify(operaLibro);
console.log("1.1 JSON semplice:", stringaJSON);

// 1.2 - Array di libri (indentazione 4 spazi)
const listaLibri = [
  { titolo: "Il Gattopardo", autore: "Tomasi di Lampedusa", anno: 1958 },
  { titolo: "Divina Commedia", autore: "Dante Alighieri", anno: 1320 }
];
const catalogoFormattato = JSON.stringify(listaLibri, null, 4);

// 1.3 - Filtro proprietà (solo titolo, autore, anno)
const datiEssenziali = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);
console.log("1.3 Filtrato:", datiEssenziali);


// --- PARTE 2: DESERIALIZZAZIONE ---

// 2.1 - Da stringa a oggetto
const libroConvertito = JSON.parse(jsonString);

// 2.2 - Iterazione array
const collezioneDati = JSON.parse(arrayJSON);
for (let item of collezioneDati) {
  console.log(`- Volume trovato: ${item.titolo}`);
}

// 2.3 - Gestione errore con Try/Catch (Evita il crash del programma)
try {
  const checkJSON = JSON.parse(jsonNonValido);
} catch (err) {
  console.log("2.3 Errore catturato correttamente:", err.message);
}


// --- PARTE 3: REPLACER E REVIVER ---

// 3.1 - Esclusione password
const profiloUtente = { user: "MarioRossi", psw: "segreto" };
const filtroPrivacy = (key, value) => (key === "psw" || key === "password") ? undefined : value;
const utentePrivato = JSON.stringify(profiloUtente, filtroPrivacy);
console.log("3.1 Utente senza psw:", utentePrivato);

// 3.3 - Gestione Date con Reviver
const ripristinaDate = (key, val) => {
  if (typeof val === "string" && val.length > 15 && !isNaN(Date.parse(val))) {
    return new Date(val);
  }
  return val;
};
const prestitoFinale = JSON.parse(prestitoJSON, ripristinaDate);
console.log("3.3 Data convertita in oggetto Date?", prestitoFinale.data instanceof Date);


// --- PARTE 4: CLONAZIONE ---

// 4.1 - Deep Clone
const backupBiblioteca = JSON.parse(JSON.stringify(bibliotecaOriginale));
backupBiblioteca.indirizzo.città = "Napoli";


// --- PARTE 5: SIMULAZIONE LOCAL STORAGE ---

const databaseLocale = (function() {
  const memoria = {};
  return {
    salva: (key, val) => { memoria[key] = JSON.stringify(val); },
    carica: (key) => {
      const item = memoria[key];
      return item ? JSON.parse(item) : null;
    },
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

  aggiornaStorage() {
    databaseLocale.salva(this.chiave, this.archivio);
  }

  generaReport() {
    return {
      totale: this.archivio.length,
      pagineComplessive: this.archivio.reduce((s, b) => s + (b.pagine || 0), 0)
    };
  }
}

// TEST FINALE
const miaBiblioteca = new GestoreBiblioteca();
miaBiblioteca.inserisci({ titolo: "Inferno", autore: "Dante", pagine: 400 });
console.log("6. Report finale:", miaBiblioteca.generaReport());
