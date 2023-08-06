console.log(commonPrefix("abcdefg","abcxyz"));
console.log(commonPrefix("people","people"));
console.log(commonPrefix("autopilot","autobiography"));
console.log(commonPrefix("aaa","a"));

function commonPrefix(str1, str2) {
  return commonPrefixHelper(str1, str2, 0, "");
}

function commonPrefixHelper(str1, str2, index, prefix) {
  if(index >= str1.length || index >= str2.length || str1[index] != str2[index]) return prefix;
  
  return commonPrefixHelper(str1, str2, index+1, prefix+str1[index]);
}