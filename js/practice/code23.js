// 53枚のトランプから5枚のカードを配るプログラム
// トランプは0~52の数値で表現するも
// トランプは自分と相手に5枚ずつ配る
    const CARD = [];
    let player_hand = [];
    let cp_hand = [];

    for(let i=0; i < 53; i++) {
        CARD.push(i);
    }

    let i=0;
    while(player_hand.length<5) {
        // 0~52
        const player_rnd = Math.floor(Math.random() * 53);
        if(CARD.indexOf(player_rnd) !== -1) {
            player_hand.push(player_rnd);
            const index_pl = CARD.indexOf(player_rnd);
            CARD.splice(index_pl, 1);
        } 
        i++;
    }
    console.log("player: ")
    player_hand.forEach(v=>console.log(v));
    console.log("-------------------------");
    // CARD.forEach(v=>console.log(v));
    

    while(cp_hand.length<5) {
        // 0~52
        const cp_rnd = Math.floor(Math.random() * 53);
        if(CARD.indexOf(cp_rnd) !== -1) {
            cp_hand.push(cp_rnd);
            const index_pl = CARD.indexOf(cp_rnd);
            CARD.splice(index_pl, 1);
        } 
        i++;
    }
    console.log("cp: ")
    cp_hand.forEach(v=>console.log(v));
    console.log("-------------------------");