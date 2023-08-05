// ラウンドロビン
function randomInt(min, max) {
  return Math.floor(Math.random() * (max -min + 1)) + min;
}

function printArray(intArr) {
  let string = "[";
  for(let i=0; i < intArr.length; i++) {
    string += intArr[i] + " ";
  }
  console.log(string + "]");
}

function chooseNFromBags2d(n, listOfBags) {
  let totalBags = listOfBags.length;
  let chooseNumberes = [];
  let counter = 0;

  while(counter < n) {
    let currentBag = listOfBags[counter % totalBags];
    chooseNumberes.push(currentBag[randomInt(0, currentBag.length-1)]);
    counter+=1;
  }

  return chooseNumberes;
}


let arrayOfBags = [[21,5,12,25],[100,88,354,643],[122,145,825,4],[228,674,777,77]];

printArray(chooseNFromBags2d(10, arrayOfBags));