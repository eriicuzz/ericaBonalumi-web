function generaTartaglia(nRighe) {
    let triangolo = [];

    // 1. Calcolo dei coefficienti
    for (let i = 0; i < nRighe; i++) {
        triangolo[i] = new Array(i + 1);
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                triangolo[i][j] = 1;
            } else {
                triangolo[i][j] = triangolo[i - 1][j - 1] + triangolo[i - 1][j];
            }
        }
    }

    // 2. Formattazione e Visualizzazione
    const cellWidth = 4; // Spazio riservato a ogni numero (3 cifre + 1 spazio)
    
    triangolo.forEach((riga, index) => {
        // Calcola lo spazio iniziale per centrare la riga
        const spaziIniziali = " ".repeat((nRighe - index - 1) * (cellWidth / 2));
        
        // Formatta i numeri della riga con larghezza fissa
        const rigaFormattata = riga
            .map(num => num.toString().padStart(cellWidth, " "))
            .join("");
            
        console.log(spaziIniziali + rigaFormattata);
    });
}

// Lettura input da riga di comando
const input = parseInt(process.argv[2]);

if (isNaN(input) || input <= 0) {
    console.log("Inserisci un numero intero positivo. Esempio: node tartaglia.js 5");
} else {
    generaTartaglia(input);
}
