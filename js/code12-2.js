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

    let str = "";
    for(let i=1; i<=9; i++) {
        str += i * 8;
        
        if(i===9) break;
        str += " ";
    }
    console.log(str);

});