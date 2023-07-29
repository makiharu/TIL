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
  //console.log(lines[0]);//
  const n = Number(lines[0]);
  const arr = lines[1].split(' ').map(Number);
  const k = Number(lines[2]);
  let flg = false;
  
  for(let i=0;i<arr.length; i++){
      
      if(arr[i]===k) {
          flg= true;
          console.log(i+1);
      }
  }
  if(flg===false) {
      console.log(0);
  }
  
});