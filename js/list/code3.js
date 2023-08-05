function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseNFromBags1d(n, bagOfNumbers, totalBags, numbersPerBag) {
  let chooseNumberes = [];
  let counter = 0;

  while(counter < n) {
    let currentBagStart = (counter % totalBags) * numbersPerBag;
    let currentBagEnd = currentBagStart + numbersPerBag-1;

    chooseNumberes.push(bagOfNumbers[randomInt(currentBagStart, currentBagEnd-1)]);
    counter++;
  }
  return chooseNumberes;
}

let unluckyBagOfNumbers = [292,39,78,978,668,6,66,666,662,876,276,782,879,869,478,1968];

// 4 つのバッグ, それぞれには 4 つの数字が含まれる
console.log(chooseNFromBags1d(10, unluckyBagOfNumbers, 4,4));