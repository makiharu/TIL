process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const airports = ["HND", "NRT", "KIX", "NGO", "NGO", "NGO", "NGO", "NGO"];

    const counts = new Map();
    
    airports.forEach((airport) => {
      if (counts.has(airport)) {
            
        counts.set(airport, counts.get(airport) + 1);
      } else {
        counts.set(airport, 1);
      }
    });
    
    counts.forEach((value, key) => {
      if (value > 1) {
        console.log(value);
      }
        });
});