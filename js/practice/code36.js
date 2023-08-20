// 末尾再起呼び出し
// 回文であれば、true, 回文でなければfalseを出力する。
console.log(recursiveIsPalindrome("kayik"));
console.log(recursiveIsPalindrome("Was it a cat I saw"));

function recursiveIsPalindrome(s) {
    s = s.replace(/\s+/g,'').toLowerCase();
    return recursiveIsPalindromeHelper(s, 0, s.length-1);
}

function recursiveIsPalindromeHelper(s, left, right) {
    if(s[left] != s[right]) {
        return false;
    } else if(left > right) return true;
    
    return recursiveIsPalindromeHelper(s, left+1, right-1);
}
