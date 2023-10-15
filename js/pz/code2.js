const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a = Array(10001).fill(0);

rl.on('line', (line) => {
    input.push(Number(line));
    if (input.length === input[0] + 1) {
        processInput();
        rl.close();
    }
});

function processInput() {
    for (let i = 1; i < input.length; i++) {
        let x = input[i];
        if (i > 1) {
            if (a[x] === 0) {
                console.log('No');
            } else {
                console.log('Yes');
            }
        }
        a[x]++;
    }
}
