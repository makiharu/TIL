function howLongToReachFundGoal(capitalMoney, goalMoney, interest) {
    return howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, 0);
}

function howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, year) {
    if(capitalMoney >= goalMoney) return year;
    if(year >= 80) return 80;

    if (year % 2 == 0) goalMoney = goalMoney * 1.02;
    else goalMoney = goalMoney * 1.03;

    capitalMoney = capitalMoney * (1 + interest / 100);
    // capitalMoney *= (1 + interest / 100);

    return howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest, year + 1);
}

console.log(howLongToReachFundGoal(15220,17296,26));