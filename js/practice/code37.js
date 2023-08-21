// 自然数 n が与えられるので、n の約数のうち、n 自身を除く最大の数値を返す関数
console.log(getGreatestDivisor(12));
console.log(getGreatestDivisor(36));

function getGreatestDivisor(n) {

    return getGreatestDivisorHelper(n, n-1);
}

function getGreatestDivisorHelper(n, k) {
    if(k <= 1) return 1;

    if(n % k == 0) return k;
    return getGreatestDivisorHelper(n, k-1);
}