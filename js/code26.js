function totalFoundInSentence(sentences, c){
    let count = 0;

    // 配列を反復
    for (let i = 0; i < sentences.length; i++){
        let currentSentence = sentences[i];
        for (let j = 0; j < currentSentence.length; j++){
            if (currentSentence[j].toLowerCase() == c.toLowerCase()){
                count = count + 1;
                break;
            }
        }
    }
    return count;
}

let list2 = ["The wood", "Pecked peckers", "At the inn", "Tomorrowland"];
console.log(totalFoundInSentence(list2,'a'));