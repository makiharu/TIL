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
    const n = Number(lines[0]);
    
    
    let sum = 2;
    for(let i=1; i<=n; i++) {
        if(i===1) {
            console.log(sum);
            continue;
        }
        
        sum *= 2;
        console.log(sum);
    }
});