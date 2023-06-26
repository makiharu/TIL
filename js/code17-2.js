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
    // 10進数から2進数
    let n = Number(lines[0]);
    const arr = [];
    
    while(n >= 2) {
        arr.push(n%2);
        n = n/2;
        
        if(n<=1) arr.push(1);
    }
    
    let str = "";
    for(let i=arr.length-1; i>=0; i--) {
        str+=arr[i];
    }
    console.log(str);
});