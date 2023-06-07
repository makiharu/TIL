class Rectangle {
  // クラス変数
  static border = 1;

  // コンストラクタ
  // オブジェクトの初期値のデータ、状態を作成
  constructor(w,h,c) {
    // 状態　→コンストラクタ関数が受け取った値
    // thisについて→オブジェクトのプロパティを初期化するために使用する
    this.width = w;
    this.height = h;
    this.color = c;
  }
}

// new演算子でインスタンス化
let square1 = new Rectangle(20, 20, "red");
console.log(square1);
// オブジェクト.変数名でアクセス
console.log(square1.color);

let square2 = new Rectangle(40, 20, "yellow");
console.log(square2.height);

let square3 = new Rectangle(20, 30, "green");
console.log(square3.width);

// クラス変数は静的メモリに保存される→値の変更によってクラスのすべてのインスタンスに影響を及ぼす
console.log(Rectangle.border);