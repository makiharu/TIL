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
    const n = lines[0];
    const A = [];
    //console.log(n);
    for(let i =1; i <= n; i ++) {
        const st = lines[i];

        if(st[0]=='1') {
            A.push(st.slice(2, st.length));
        } 
    }
    
    console.log(A.length);
    A.forEach(v=>console.log(v));
});