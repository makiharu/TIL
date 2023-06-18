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
    const ab = lines[0].split(' ');
    const a = Number(ab[0]);
   // console.log(a);
    const b = Number(ab[1]);
    // console.log(b);
    if(a>b) {
        console.log(a + " " + b);
    } else {
        console.log(b + " " + a);
    }

});