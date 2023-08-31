// メモ化
// 木構造の上から下へと続くアルゴリズムでのキャッシング

function memoizationFib(totalFibNumbers) {
    let cache = [];
    for(let i=0; i <= totalFibNumbers; i++) {
        cache.push(null);
    }

    function innerMemoizationFib(n) {
        console.log(cache);
        if(cache[n]==null) {
            if(n==0) {
                cache[n] = 0;
            } else if(n==1) {
                cache[n] = 1;
            } else {
                cache[n] = innerMemoizationFib(n-2) + innerMemoizationFib(n-1);
            }
        }
        return cache[n];
    }
    return innerMemoizationFib(totalFibNumbers);
}


console.log(memoizationFib(4));