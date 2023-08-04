function primeArray(n){
  let arr = [];
  if(n==1) return [];
  for(let i=2; i<=n; i++) {
      if(isPrime(i)) arr.push(i);
  }
  return arr;
}

// 素数の判定
function isPrime(n) {
  if(n==1) return [];
  for(let i=2; i <=Math.sqrt(n); i++) {
      if(n%i===0) return false;
  }
  return true;
}

