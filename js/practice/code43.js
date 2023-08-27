// n未満の全ての素数を求める
function allNPrimesSieve(n) {
    let cache = [];
    for(let i=0; i < n; i++) {
        cache.push(true);
    }

    for(let currentPrime=2; currentPrime < Math.ceil(Math.sqrt(n)); currentPrime++) {
        if(!cache[currentPrime]) continue;

        let i=2;
        // 合成数
        let ip= currentPrime * i;
        while(ip < n) {
            cache[ip] = false;
            i+=1;
            ip = currentPrime * i;
        }
    }
    let primeNumbers = [];
    for(let i=2; i < cache.length; i++) {
        if(cache[i]) primeNumbers.push(i);
    }
    return primeNumbers;
}

console.log(allNPrimesSieve(100));
console.log((allNPrimesSieve(100).length));