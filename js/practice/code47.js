function recursiveDigitsAdded(digits){
    return splitAndAdd(digits, 0, 0);
}

function splitAndAdd(digits, currentTotal ,total) {
    if (digits == 0) {
        // 足し合わせが終わった合計数が2桁を超えるかチェックする
        console.log("currentTotal" + currentTotal);
        if(currentTotal < 10) {
            return total;
        }
        // 2桁以上の時
        else {
            console.log("currentTotal: 2桁以上:" + currentTotal);
            return splitAndAdd(currentTotal, 0, total);
        }
    }
    console.log("digits: 2桁以上: " + digits);

    return splitAndAdd(Math.floor(digits / 10), currentTotal+digits%10, total + digits % 10);
}