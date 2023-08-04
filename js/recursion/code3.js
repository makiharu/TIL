function towerOfHanoi(discs){
    if(discs <= 1) return 1;

    return towerOfHanoi(discs-1) + 1 + towerOfHanoi(discs-1);
}

console.log(towerOfHanoi(1));
console.log(towerOfHanoi(3));
console.log(towerOfHanoi(5));
console.log(towerOfHanoi(10));

  // 最後の文字をのぞいた文字列を切り取る。
  let subStr = str.substring(0, str.length-1);
  return str[str.length-1] + reverseString(subStr);
}