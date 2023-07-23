let target1 = document.getElementById('target1');
let target2 = document.getElementById('target2');
let target3 = document.getElementById('target3');

function logClick() {
    console.log('clicked!!');
}

target1.addEventListener('click', logClick);

target2.addEventListener('mouseover', () => {
    console.log('mouse hover');
})

target3.addEventListener('keydown', (e) => {
    console.log("The 「" + e.key + "」 was pressed.");
});