function maxOfPairSum(arr1,arr2,x){
    let max = 0;
    let currentSum = 0;

    for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
            currentSum = arr1[i] + arr2[j];
            if(currentSum >= x) continue;

            if(max < currentSum) {
                max = currentSum;
            }
        }
    }
    return max  < x ? max : "no pair";
}

console.log(maxOfPairSum([726,870,284,276,933,180],[15,556,974,135,977,639],561));
console.log(maxOfPairSum([-4,-2,-5],[-1,-6,-8],-3));