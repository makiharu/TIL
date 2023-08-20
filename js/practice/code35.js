function howLongToReachFundGoal(capitalMoney, goalMoney, interest) {
    return howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, 0);
}

function howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, year) {
    if(year == 0 && capitalMoney >= goalMoney) return 0;

    if (year % 2 == 0) {
        goalMoney = goalMoney * 1.02;
    } else {
        goalMoney = goalMoney * 1.03;
    }

    let profit = capitalMoney * (interest / 100);
    capitalMoney += profit;

    // ベースケース
    if (capitalMoney >= goalMoney || year >= 80) {

        return year < 80 ? year + 1 : 80;
    }

    return howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, year + 1);
}

console.log(howLongToReachFundGoal(15220,17296,26));

