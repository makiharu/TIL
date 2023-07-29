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
    const arr = lines[1].split(' ').map(Number);
    for(let i=0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            console.log(i+1);
            break;
        }
    }
});