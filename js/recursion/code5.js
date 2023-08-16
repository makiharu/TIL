function reverseString(s){
    return reverseStringHelper(s[0], 1, s);
}

function reverseStringHelper(reversedString, index, originalString) {
    if (index >= originalString.length) return reversedString;
    return reverseStringHelper(originalString[index] + reversedString, index + 1, originalString);
}

console.log(reverseString("abcd"));
console.log(reverseString("recursion"));
console.log(reverseString("I am a software engineer"));