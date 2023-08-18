// 平方根を求める
console.log(squareRoot(65));

function squareRoot(x) {
    // 近似値を1とおく。
    return squareRootHelper(x, 1);

}

function squareRootHelper(x, guess) {
    // 近似値
    let newGuess = (guess + x / guess) / 2;
    // ベースケース
    if(isSoutaiCheck(guess, newGuess)) return newGuess;


     return squareRootHelper(x, newGuess);
}


// 相対誤差の計算
function isSoutaiCheck(a, b) {
    // 相対誤差
    // ベースケース
    // 左辺と右辺の誤差を求める
    return 100 * Math.abs((a-b) / b) < 0.01;

}