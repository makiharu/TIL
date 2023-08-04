// lenString("hello world") --> 11
// lenString("hello") --> 5
// lenString("a") --> 1
function lenString(string) {
  return lenStringHelper(string, 0, "");
}

function lenStringHelper(string, count, res) {
  if(string==res) return count;

  return lenStringHelper(string, count+1, res + string[count]);
}

console.log(lenString("hello world"));
console.log(lenString("hello"));