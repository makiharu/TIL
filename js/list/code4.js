// パンぐらむ
// function isPangramn(string) {
//     let cashe = Array(26).fill(0);

//     for(let i=0; i < string.length; i++) {
//         let ascii = string.toLowerCase().charCodeAt(i);
//         if(ascii >= 97 && ascii <= 97) cashe[ascii-97] = 1;
//     }

//     return Math.min(...cashe) !=0;
// }
function isPangram(string) {
    
}

console.log(isPangram("we promptly judged antique ivory buckles for the next prize"));
console.log(isPangram("a quick brown fox jumps over the lazy dog"));
console.log(isPangram("sphinx of black quartz judge my vow"));
console.log(isPangram("sheep for a unique zebra when quick red vixens jump over the yacht"));
console.log(isPangram("the Japanese yen for commerce is still well-known"));


// function isPangram(string){
//     // キャッシュを作成
//     let cache = Array(26).fill(0);

//     // 1文字ずつ取得し、文字コードを使ってキャッシュを更新します
//     for (let i = 0; i < string.length; i++){
//         let ascii = string.toLowerCase().charCodeAt(i);
//         if (ascii >= 97 && ascii <= 122) cache[ascii - 97] = 1;
//     }

//     // 0が一つもなかったら全ての文字が存在する事になります。
//     return Math.min(...cache) != 0;
// }