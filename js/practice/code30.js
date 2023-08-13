function isPerfectNumber(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    return sum === number;
  }
  
  function findPerfectNumbers(limit) {
    const perfectNumbers = [];
  
    for (let i = 1; i <= limit; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
  
    return perfectNumbers;
  }
  
  const limit = 10000;
  const perfectNumbers = findPerfectNumbers(limit);
  
  console.log(`1から${limit}までの完全数: ${perfectNumbers.join(', ')}`);