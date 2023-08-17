function swapPosition(s){

    return swapPositionHelper(s, 0, "");
}

function swapPositionHelper(s, index, output) {
    if(index >= s.length) return output;

    if(index == s.length-1) return swapPositionHelper(s, index+2, output + s[index]);
    return swapPositionHelper(s, index+2, output + s[index+1] + s[index]);
}
