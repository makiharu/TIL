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
    // 3: Fizz
    // 5: Buzz
    const n = Number(lines[0]);
    let str = "";
    for(let i=1; i<=n; i++) {
        if(i%15===0) {
            str=i+": FizzBuzz";
        } else if(i%3===0) {
            str=i+": Fizz";
        } else if(i%5===0){
            str=i+": Buzz";
        } else {
            str=i;
        }
        console.log(str);
    }
});