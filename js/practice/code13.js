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
    const arr = lines[1].split(' ').map(Number);
    //arr.forEach(v=>console.log(v));
    for(let i=n-1; i >= 0; i--) {
        console.log(arr[i]);
    }
});