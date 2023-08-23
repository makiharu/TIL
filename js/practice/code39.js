// 完全数 を求める(2~n)
//：自分自身以外の約数を全て足した値が自分自身に等しい自然数
function perfectNumberList(n){
    let str = "";

    if(n<=1) return "none";

    for(let i=2; i <=n; i++) {
        if(isPerfectNumber(i)) str += i + "-";
    }

    return str.slice(0, -1);
}

// 完全数か調べるメソッド
function isPerfectNumber(n) {
    let total = 0;
    for(let i=1; i <=n-1; i++) {
        if(n%i==0) {
            console.log(i);
            total+=i;
        }
    }

    if(n==total) return true;
    return false;
}

