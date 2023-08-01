console.log(reverseString("abcd")); // dcba
console.log(reverseString("recursion")); // noisrucer
console.log(reverseString("I am a software engineer")); // reenigne erawtfos a ma I


function reverseString(str) {
  // if(str.length <=0) return "";
  if(str.length <=1) return str;

  // 最後の文字をのぞいた文字列を切り取る。
  let subStr = str.substring(0, str.length-1);
  return str[str.length-1] + reverseString(subStr);
}