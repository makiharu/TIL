function recursiveDigitsAdded(digits){
    return splitAndAdd(digits, 0, 0);
}

function splitAndAdd(digits, currentTotal ,total) {
    if (digits == 0) {
        console.log("currentTotal" + currentTotal);
        if(currentTotal < 10) {
            return total;
        } else {
            console.log("currentTotal: 2桁以上:" + currentTotal);
            return splitAndAdd(currentTotal, 0, total);
        }
    }

    return splitAndAdd(Math.floor(digits / 10), currentTotal+digits%10, total + digits % 10);
}