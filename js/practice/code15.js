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
    for(let i=1; i<=100; i++) {
        if(i%15===0) {
            console.log('FizzBuzz');
        } else if(i%3===0) {
            console.log('Fizz');
        } else if(i%5===0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
        
    }
});