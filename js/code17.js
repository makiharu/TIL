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
    let n = Number(lines[0]);
    let count = 0;
    while(n % 2 ===0) {
        n=n / 2;
        count++;
    }
    console.log(count);
});