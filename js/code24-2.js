function countDownProcess() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let num = Math.round(Math.random() * 100);
            if(num > 40) resolve("成功です");
            reject("失敗です");
        });
    })
    console.log("The promise ran.");
    return myPromise;
}

countDownProcess().then(function(resolveMessage) {
    console.log("Success");
    console.log(resolveMessage);
}).catch(function(resolveMessage) {
    console.log("FAILURE!!!!")
    console.log(rejectMessage)
})