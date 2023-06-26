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
    const arr = lines[0].split(' ').map(Number);
    let sum = 0;
    
    for(let i=0; i < arr.length; i ++) {
        if(arr[i]===-1) {
            console.log(arr[i]);
            break;
        }
        console.log(arr[i]);
            
    }

});