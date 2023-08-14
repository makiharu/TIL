// フィボナッチ
function fibonacciNumberTail(n) {
    return fibonacciNumberTailHelper(0, 1, n);
}

function fibonacciNumberTailHelper(fn1, fn2, n) {
    if(n < 1) return fn1;

    return fibonacciNumberTailHelper(fn2, fn1+fn2, n-1);
}
