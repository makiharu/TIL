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
    
    const data = arr.sort((a,b) => {
        return b-a;
    })
    for(let i=0; i < data.length; i ++) {
        if(k >= data[i]) {
            console.log(data[i]);
            break;
        }
    }
});