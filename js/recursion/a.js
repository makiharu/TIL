function reverseString(s){
    // ベースケース
    if (s.length <= 1) return s;
    // substring関数を使って最後の1文字を切り取ります。
    let subStr = s.substring(0, s.length - 1);
    return s[s.length - 1] + reverseString(subStr);
}

console.log(reverseString("abcd")); // dcba
console.log(reverseString("recursion")); // noisrucer
console.log(reverseString("I am a software engineer")); // reenigne erawtfos a ma I