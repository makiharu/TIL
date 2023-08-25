function recursiveDigitsAdded(digits){
    let current = splitAndAdd(digits, 0);
    console.log("current:" + current);

    console.log("2回:" + splitAndAdd(current, 0));

    // テストケース　99999999999884　だけ通らない。
    return splitAndAdd(digits, 0) / 10 < 1 ? current : current + splitAndAdd(current, 0);
}

function splitAndAdd(digits, total) {

    if(digits < 10) return total + digits;

    return splitAndAdd(Math.floor(digits / 10), total + digits % 10);
}