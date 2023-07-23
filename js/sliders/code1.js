// DOMイベントとリスナー
let targetElement = document.getElementById("target-p");
const customEvent = new Event("myUniqueEvent");

function randomFunction(e) {
    console.log("イベントが発生した要素:" + e.target);
    console.log("現在のドキュメントの生成からイベントが作成された時点までの時間（ミリ秒単位）" + e.timeStamp);
    console.log("イベントタイプ" + e.type);
    console.log("eventのデータ型" + typeof(e));
}

targetElement.addEventListener('myUniqueEvent', randomFunction);
targetElement.dispatchEvent(customEvent);

targetElement.addEventListener('click', function(e) {
    console.log(e.timeStamp);
})