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

        if(i%3===0) {
            str="Fizz";
        }
        if(i%5===0){
            str="Buzz";
        }

        if(i%3!==0 && i%5!==0) {
            str="FizzBuzz";
        }
        str = i + ": " + str;
        console.log(str);
    }
});