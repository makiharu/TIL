function deleteAt(s,i){
    if(i===0) return s;
    s1 = s.substring(0, i-1);
    s2 = s.substring(i, s.length);
    
    return s1+s2;
}

console.log(deleteAt("aiueo", 1));

