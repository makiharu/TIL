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
    
    let cache = [];
    for(let i=0; i <=n; i++) cache[i] = true;
    
    for(let currentPrime=2; currentPrime<= Math.ceil(Math.sqrt(n)); currentPrime++) {
        if(!cache[currentPrime]) continue;
        
        let i=2;
        let ip = currentPrime * i;
        while(ip <= n) {
            cache[ip] = false;
            i++;
            ip = currentPrime * i;
        }
    }

    
    if(cache[n] && n>=2) {
        console.log("YES");
    } else {
        console.log("NO");
    }
});