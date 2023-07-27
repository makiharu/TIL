// スライダー作成
// TODO: リファクタリング
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let sliderBox = document.getElementById('sliderBox');
const COLORS = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info"];
let colorsNumber = 0;

nextBtn.addEventListener('click', () => {
    console.log("nextBtn: start");
    console.log("colorsNumber:" + colorsNumber);

    if(colorsNumber===0) {
        sliderBox.classList.remove(COLORS[0]);
        sliderBox.classList.add(COLORS[1]);
        colorsNumber++;
    } else if(colorsNumber===1) {
        sliderBox.classList.remove(COLORS[1]);
        sliderBox.classList.add(COLORS[2]);
        colorsNumber++;
    } else if(colorsNumber===2) {
        sliderBox.classList.remove(COLORS[2]);
        sliderBox.classList.add(COLORS[3]);
        colorsNumber++;
    } else if(colorsNumber===3) {
        sliderBox.classList.remove(COLORS[3]);
        sliderBox.classList.add(COLORS[4]);
        colorsNumber++;
    } else if(colorsNumber===4) {
        sliderBox.classList.remove(COLORS[4]);
        sliderBox.classList.add(COLORS[5]);
        colorsNumber++;
    } else if(colorsNumber===5) {
        sliderBox.classList.remove(COLORS[5]);
        sliderBox.classList.add(COLORS[0]);
        colorsNumber = 0;
    }

    console.log("backBtn: end");
});

backBtn.addEventListener('click', () => {
    console.log("backBtn: start");

    if(colorsNumber===0) {
        sliderBox.classList.remove(COLORS[0]);
        sliderBox.classList.add(COLORS[5]);
        colorsNumber = 5;
    } else if(colorsNumber===5) {
        sliderBox.classList.remove(COLORS[5]);
        sliderBox.classList.add(COLORS[4]);
        colorsNumber--;
    } else if(colorsNumber===4) {
        sliderBox.classList.remove(COLORS[4]);
        sliderBox.classList.add(COLORS[3]);
        colorsNumber--;
    } else if(colorsNumber===3) {
        sliderBox.classList.remove(COLORS[3]);
        sliderBox.classList.add(COLORS[2]);
        colorsNumber--;
    } else if(colorsNumber===2) {
        sliderBox.classList.remove(COLORS[2]);
        sliderBox.classList.add(COLORS[1]);
        colorsNumber--;
    } else if(colorsNumber===1) {
        sliderBox.classList.remove(COLORS[1]);
        sliderBox.classList.add(COLORS[0]);
        colorsNumber = 0;
    }

    console.log("colorsNumber:" + colorsNumber);
    console.log("backBtn: end");
});