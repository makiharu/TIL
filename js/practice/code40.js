// 10進数から16進数への書き換え
console.log(decimalToHexadecimal(532454)); // 81FE6
console.log(decimalToHexadecimal(90304)); // 160C0
console.log(decimalToHexadecimal(28394)); // 6EEA
console.log(decimalToHexadecimal(15)); // F
console.log(decimalToHexadecimal(74)); // 4A

function decimalToHexadecimal(n) {
    let hex = "";
    const hexadecimal = "0123456789ABCDEF";
    
    while(n>=0) {
        hex = hexadecimal[n%16] + hex;
        n = Math.floor(n / 16);
        if(n==0) break;
    }

    return n;
}   