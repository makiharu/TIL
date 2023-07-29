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
    const k = Number(lines[n+1]);
    for(let i=1; i <= n; i++) {
        const a = lines[i].split(' ')[0];
        const b = Number(lines[i].split(' ')[1]);
        
        if(b>=k) console.log(a);
    }
    
});