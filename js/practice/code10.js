process.stdin.resume();
process.stdin.setEncoding('utf8');

// 線型探索
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
    const arr = lines[1].split(' ').map(Number);
    const k = Number(lines[2]);
    
    const data = arr.filter(v => v >= k);
    const d = data.sort((a,b) => {
        return a-b;
    });
    console.log(d[0]);
});