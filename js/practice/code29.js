const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let move = [-1, 1];

rl.question('H: ', H => {
  rl.question('W: ', W => {
    let S = new Array(H);
    
    for (let i = 0; i < H; i++) {
      rl.question(`S[${i}]: `, line => {
        S[i] = line.split('');
        if (i == H - 1) {
          rl.question('y: ', y => {
            rl.question('x: ', x => {
              if (S[y][x] === '.') {
                S[y][x] = '#';
              } else {
                S[y][x] = '.';
              }
              
              for (let i = 0; i < 2; i++) {
                if (0 <= parseInt(y) + move[i] && parseInt(y) + move[i] < H) {
                  if (S[parseInt(y) + move[i]][x] === '.') {
                    S[parseInt(y) + move[i]][x] = '#';
                  } else {
                    S[parseInt(y) + move[i]][x] = '.';
                  }
                }
                if (0 <= parseInt(x) + move[i] && parseInt(x) + move[i] < W) {
                  if (S[y][parseInt(x) + move[i]] === '.') {
                    S[y][parseInt(x) + move[i]] = '#';
                  } else {
                    S[y][parseInt(x) + move[i]] = '.';
                  }
                }
              }
              
              for (let i = 0; i < H; i++) {
                console.log(S[i].join(''));
              }
              rl.close();
            });
          });
        }
      });
    }
  });
});
