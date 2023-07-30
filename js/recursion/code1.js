// function mergeString(s1, s2) {
//     if(s1.length ===0 || s2.length ===0) return "";

//     return [s1[0], s2[0]].join('') + mergeString(s1.slice(1), s2.slice(1));
// }

function mergeString(s1, s2) {
    return mergeStringHelper(s1, s2, 0, '');
}

function mergeStringHelper(s1, s2, index, output) {
    if(index > s1.length-1) return output;

    return mergeStringHelper(s1, s2, index + 1, output + s1[index] + s2[index]);
}

console.log(mergeString("abc","def"));
console.log(mergeString("hello","world"));
console.log(mergeString("a","b"));