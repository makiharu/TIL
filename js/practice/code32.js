function reverseString(s){
    // ベースケース
    if (s.length <= 1) return s;
    let subStr = s.substring(0, s.length - 1);
    return s[s.length - 1] + reverseString(subStr);
}

console.log(reverseString("abcd")); // dcba
console.log(reverseString("I am a software engineer")); // reenigne erawtfos a ma I