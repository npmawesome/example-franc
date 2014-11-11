var franc = require('franc');

console.log(franc('')); // "und"

// returns single best guess
console.log(franc('Alle menslike wesens word vry')); // "afr"
console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')); // "ben"
console.log(franc('Alle mennesker er født frie og')); // "nno"

// returns all guesses sorted by weight
console.log(franc.all('O Brasil caiu 26 posições em'));

// returns all guesses sorted by weight that are on the white list
console.log(franc.all('O Brasil caiu 26 posições em', {
  'whitelist' : ['por', 'src', 'glg', 'spa']
}));
