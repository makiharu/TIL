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
    const [k, l] = lines[n+1].split(' ').map(Number);
    
    for(let i=1; i <=n; i ++) {
        const s = lines[i].split(' ')[0];
        const t = Number(lines[i].split(' ')[1]);
        
        if(t>=k && t<= l) console.log(s);
    }
});