class Lunch {
  constructor(main, dessert, drink) {
    this.main = main;
    this.dessert = dessert;
    this.drink = drink;
  }
}

let lunch1 = new Lunch('bread', 'cake', 'cola');
console.log(lunch1.main);

let lunch2 = new Lunch('rice', 'prin', 'soda');
console.log(lunch2.dessert);

let lunch3 = new Lunch('bread', 'fruit', 'greentea');
console.log(lunch3.main);
console.log(lunch3.drink);