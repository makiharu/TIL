function splitAndAdd(digits){
    if(digits < 10) return digits;

    return splitAndAdd(Math.floor(digits / 10)) + digits % 10;
}

console.log(splitAndAdd(3));
console.log(splitAndAdd(19));
console.log(splitAndAdd(898));