// まずは1枚分のカードを表すクラスCardを生成しましょう。
// 記号(♣, ♦, ♥, ♠の内1つ)・値（A,2,~,Kの内1つ）・数値（0~12の内1つ）をインスタンス化させるコンストラクタと、それらの情報を返すメソッドgetCardStringを作成してください。
// ♥8を例にコンソールに出力してください。

// ここから記述してください。
class Card{
    constructor(suit, value, intValue) {
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }

    getCardString() {
        return this.suit + this.value + "(" + this.intValue +")";
    }

}

let card1 = new Card("♦︎","A",1);
console.log(card1);
console.log(card1.getCardString());