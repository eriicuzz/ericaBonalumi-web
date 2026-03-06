
// Ottieni gli argomenti (escludendo i primi due)
const args = process.argv.slice(2);

// Verifica se sono stati passati i 3 argomenti necessari
if (args.length < 3) {
  console.log('❌ Errore: Devi fornire due numeri e un\'operazione!');
  console.log('\n📖 Utilizzo:');
  console.log('   node calc.js <numero1> <operazione> <numero2>');
  console.log('\n💡 Esempi:');
  console.log('   node calc.js 5 add 3');
  console.log('   node calc.js 10 mult 2');
  process.exit(1);
}

const n1 = parseFloat(args[0]);
const operazione = args[1].toLowerCase();
const n2 = parseFloat(args[2]);

let risultato;
let simbolo;

// Esegui il calcolo
switch (operazione) {
  case 'add':
  case '+':
    risultato = n1 + n2;
    simbolo = '+';
    break;
  case 'sub':
  case '-':
    risultato = n1 - n2;
    simbolo = '-';
    break;
  case 'mult':
  case '*':
    risultato = n1 * n2;
    simbolo = 'x';
    break;
  case 'div':
  case '/':
    risultato = n2 !== 0 ? n1 / n2 : "Errore (Divisione per zero)";
    simbolo = '÷';
    break;
  default:
    risultato = "Operazione non valida (usa add, sub, mult, div)";
    simbolo = '?';
}

// Stampa l'output formattato
console.log('\n' + '='.repeat(50));
console.log(`🧮 Operazione: ${n1} ${simbolo} ${n2}`);
console.log(`✅ Risultato:  ${risultato}`);
console.log('='.repeat(50) + '\n');

// Informazioni aggiuntive di sistema
console.log(`📅 Data: ${new Date().toLocaleDateString('it-IT')}`);
console.log(`⏰ Ora: ${new Date().toLocaleTimeString('it-IT')}`);
console.log(`💻 Node.js versione: ${process.version}`);
console.log(`🖥️ Sistema operativo: ${process.platform}`);
console.log();
