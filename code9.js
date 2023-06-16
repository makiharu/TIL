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
    const arr = lines[0].split(' ').map(Number);
    let min = arr[0];
    let max = arr[0];
    
    for(let i=0; i< arr.length; i ++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(max < arr[i]) max = arr[i];
    }
    console.log(`${max} ${min}`);
});