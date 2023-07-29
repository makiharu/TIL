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
    const [n,m,k] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ');
    const front_arr = arr.slice(0, m-1);
    front_arr.push(k);
    const back_arr = arr.slice(m-1, arr.length);
    const all_arr = [...front_arr, ...back_arr];
    
    all_arr.forEach(v=>console.log(v));
});