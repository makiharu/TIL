// Math.random --> 0以上1未満のランダムな数
console.log(Math.random());

// 0以上10未満のランダムな数
console.log(Math.random() * 10);

// 0以上10未満のランダムな整数
console.log(Math.floor(Math.random() * 10));

let intArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(intArr);

for (let i = intArr.length - 1; i >= 0 ; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = intArr[i];
    intArr[i] = intArr[j];
    intArr[j] = temp;
}

console.log(intArr);