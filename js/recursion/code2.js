console.log(squareRoot(3));

// 平方根の近似値を求める
function squareRoot(x) {
    // 近似値の初期値を1とする
    return squareRootHelper(x, 1);
}

function squareRootHelper(x, guess) {
    let newGuess = (guess + x/guess) / 2;

    console.log("guess" + guess);
    console.log("newGuess" + newGuess);

    // ベースケース
    // 近似値の相対誤差が0.01未満
    if(isSquareRootCloseEnough(newGuess, guess)) return newGuess;

    return squareRootHelper(x, newGuess);
}

// 2つの近似値について、
// 相対誤差0.01%未満でtrue, 0.01%以上 false
function isSquareRootCloseEnough(a, b) {
    return 100 * Math.abs((a-b) / b) < 0.01;
}