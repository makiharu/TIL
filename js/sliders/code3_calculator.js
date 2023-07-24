// 電卓プログラム
let inputNumber1 = document.getElementById("inputNumber1");
let inputNumber2 = document.getElementById("inputNumber2");
let btnTest = document.getElementById("btnTest");
let buttonClear = document.getElementById("buttonClear");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let buttonDivision = document.getElementById("buttonDivision");
let inputResult = document.getElementById("inputResult");
let num1 = "";
let num2 = "";
let sign = "";
let sum = 0;

function caluculationOp1(e) {
    console.log(`start: ${e.target}`);
    num1+= e.key;
    console.log(`num1: ${num1}`);
    console.log(`end`);

    return num1;
}
function caluculationOp2(e) {
    console.log(`start: ${e.target}`);
    num2+= e.key;
    console.log(`num2: ${num2}`);
    console.log(`end`);

    return num2;
}

/**
 * テキストボックスの値をクリアする
 */
function clear() {
    console.log("clear start");
    num1 = "";
    num2 = "";
    sum = 0;
    inputNumber1.value = num1;
    inputNumber2.value = num2;
    inputResult.value = "";

    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
    console.log(`sum: ${sum}`);
}


inputNumber1.addEventListener('keydown', caluculationOp1);
inputNumber2.addEventListener('keydown', caluculationOp2);

// 四則演算のclickイベントを受け取る
function caluculate() {
    // 片方のtextボックスが空の場合は、アラートを出す。
    if(isCheckInput() == false) return;

    sum = 0;
    console.log("start: caluculate");
    console.log("sign: " + sign);

    const [n1, n2] = stringToNumber(num1, num2);
    switch(sign) {
        case '+':
            sum = n1 + n2;
            break;
        case '-':
            sum = n1 - n2;
            break;
        case '*':
            sum = n1 * n2;
            break;
        case '%':
            sum = n1 % n2;
            break;
    }
    console.log(sum);
    inputResult.value = sum;

    return sum;
}

/**
 * 文字列から数値に変換する
 * @param {*} num1 
 * @param {*} num2 
 * @returns [num1, num2]
 */
function stringToNumber(num1, num2) {
    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    return [n1, n2];
}

/**
 * テキストボックス1,2に値が入力されているかをチェックする
 */
function isCheckInput() {
    console.log("start: isCheckInput");
    console.log("inputNumber1.value" + inputNumber1.value);
    if(inputNumber1.value === "" || inputNumber2.value === "") {
        alert('数値を入力してください。');

        return false; 
    }
    console.log("end: isCheckInput");

    return true;
}

// テスト結果(アラート表示)
// + - * / を引数として受け取る
btnTest.addEventListener('click', () => {
    alert(`TestInput: ${num1} ${sign} ${num2}`);
});

// クリアする
buttonClear.addEventListener('click', clear);

// プラス
btnPlus.addEventListener('click', () => {
    sign = "+";
    caluculate();
});
// マイナス
btnMinus.addEventListener('click', () => {
    sign = "-";
    caluculate();
});
// 掛け算
btnMulti.addEventListener('click', () => {
    sign = "*";
    caluculate();
});
// 割り算
buttonDivision.addEventListener('click', () => {
    sign = "%";
    caluculate();
});