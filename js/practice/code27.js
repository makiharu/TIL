function winnerBlackjack(playerCards,houseCards){
    let playerSum = 0;
    let houseSum = 0;
    playerCards.forEach(v=>{
        v = v.slice(1, v.length);
        if(v==="A" || v==="J" || v==="Q" || v==="K") {
            v = switchToMark(v);
        }
        playerSum+=Number(v);
    })
    console.log("playerSum:" + playerSum);

    houseCards.forEach(v=>{
        v = v.slice(1, v.length);
        if(v==="A" || v==="J" || v==="Q" || v==="K") {
            v = switchToMark(v);
        }
        houseSum+=Number(v);
    })
    console.log("houseSum:" + houseSum);

    if(houseSum < 22) {
        return playerSum < 22 && houseSum < playerSum;
    } else {
        return playerSum < 22;
    }
    

}

// 数字に変換する
function switchToMark(card) {
   switch(card) {
    case "A":
        card = 1;
        break;
    case "J":
        card = 11;
        break;
    case "Q":
        card = 12;
        break;
    case "K":
        card = 13;
        break;
   } 
   return card;
}

