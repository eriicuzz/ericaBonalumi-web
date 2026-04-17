const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Calcolatrice Node.js ---");

rl.question("Inserisci il primo numero: ", (n1) => {
  rl.question("Inserisci il secondo numero: ", (n2) => {
    rl.question("Inserisci l'operazione (+, -, *, /, **): ", (op) => {
      
      const num1 = parseFloat(n1);
      const num2 = parseFloat(n2);
      let risultato;

      // Validazione input
      if (isNaN(num1) || isNaN(num2)) {
        console.log("Errore: Uno o entrambi i numeri inseriti non sono validi.");
      } else {
        switch (op) {
          case "+": risultato = num1 + num2; break;
          case "-": risultato = num1 - num2; break;
          case "*": risultato = num1 * num2; break;
          case "/": 
            risultato = num2 !== 0 ? num1 / num2 : "Errore: Divisione per zero";
            break;
          case "**": risultato = num1 ** num2; break;
          default: risultato = "Errore: Operatore non valido";
        }
        console.log(`Risultato: ${risultato}`);
      }
      
      rl.close();
    });
  });
});
