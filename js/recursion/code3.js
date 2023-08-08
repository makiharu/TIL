// ハノイの塔
function towerOfHanoi(discs){
    if(discs <= 1) return 1;

    return towerOfHanoi(discs-1) + 1 + towerOfHanoi(discs-1);
}

console.log(towerOfHanoi(1));
console.log(towerOfHanoi(3));
console.log(towerOfHanoi(5));
console.log(towerOfHanoi(10));
