function fruitImgUrl(fruit){
    fruit = fruit.toLowerCase();
   
    const fruitUrl = {
        "banana": "url1",
        "pineapple": "url2",
        "pear": "url3"
    }
    const defaultUrl = "no image";

    return fruitUrl[fruit] == undefined ? defaultUrl: fruitUrl[fruit];
}
