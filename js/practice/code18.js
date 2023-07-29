let sum = 0;
function sumNumber() {
    for(let i=1; i <=299; i++) {
        if(i%3===0) {
            sum+=i;
        } else if(i%7===0) {
            sum+=i;
        } else if(i%21===0) {
            sum+=i;
        }
    }
    console.log(sum);
}
sumNumber();


// console.log(sum);

let s= 0;
for(let i=1; i <=9; i++) {
    if(i%3===0) {
        // console.log(i);
        s+=i;
    } else if(i%7===0) {
        s+=i;
    } else if(i%21===0) {
        s+=i;
    }
}
console.log(s);