console.log(fibonacciNumber(4));
console.log(fibonacciNumberTail(4));
console.log(fibonacciNumberTail(20));
console.log(fibonacciNumberForLoopIteration(20));

// フィボナッチ
function fibonacciNumber(n) {
    if(n==1) return 1;
    if(n==0) return 0;
    
    return fibonacciNumber(n-2) + fibonacciNumber(n-1);
}

// 末尾最適化(フィボナッチ)
function fibonacciNumberTail(n) {
    
    return fibonacciNumberTailHelper(0, 1, n);
}

function fibonacciNumberTailHelper(fn1, fn2, n) {
    if(n < 1) return fn1;

    return fibonacciNumberTailHelper(fn2, fn1+fn2, n-1);
}

// 再起(フィボナッチ)
function fibonacciNumberForLoopIteration(n) {
    let fn1 = 0;
    let fn2 = 1;

    for(let i=0; i <n; i++) {
        let prevFn1 = fn1;
        fn1 = fn2;
        fn2 = prevFn1 + fn2;
    }
    return fn1;

}