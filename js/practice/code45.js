function characterLocation(commands){
    let location = [0, 0];
    const DIRECTION = {
        "N": [0, 1],
        "E": [1, 0],
        "W": [-1, 0],
        "S": [0, -1]
    };

    for(let i=0; i < commands.length; i++) {
        if(DIRECTION[commands[i]] != undefined) {
            location[0] += DIRECTION[commands[i]][0];
            location[1] += DIRECTION[commands[i]][1];
        }
    }
    return location;
}


console.log(characterLocation("AUTEMARCHITECTOOCCAECATIDOLOREMAGNIDOLORES"));
