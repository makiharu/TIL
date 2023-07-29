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
  console.log(lines[0]);
    const n = Number(lines[0]);
    const A = [];
    for(let i =1; i<= n; i ++) {
        A.push(lines[i]);
    }
    const a_n = A.length;
    
    A.forEach(v=>console.log(v));
});