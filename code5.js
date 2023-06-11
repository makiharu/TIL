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
//   console.log(lines[0]);
    const n = Number(lines[0]);
    const data = lines[1].split(' ').map(Number);
    const k = Number(lines[2]);
    
    let arr = data.filter(v => (v==k));
    console.log(arr.length);
});