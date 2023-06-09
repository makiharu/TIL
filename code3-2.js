class Animal {
    constructor(name, weightKg, heightM, isPredator, speedKph, activityMultiplier) {
        this.name = name;
        this.weightKg = weightKg;
        this.heightM = heightM;
        this.isPredator = isPredator;
        this.speedKph = speedKph;
        this.activityMultiplier = 1.2;
    }

    getBmi() {
        return Math.floor(100 * this.weightKg / (this.heightM * this.heightM)) / 100;
    }

    // 小数点第三位切り捨て
    getDailyCalories() {
        return Math.floor((70 * this.weightKg　** 0.75) * this.activityMultiplier * 100) / 100;
    }

    isDangerous(){
        if(this.isPredator === true || this.heightM >= 1.7 || this.speedKph >= 35) return true;
        return false;
    }
}

let rabbit = new Animal("rabbit", 10, 0.3, false, 20);
console.log(rabbit.getBmi());
console.log(rabbit.isDangerous());

let snake = new Animal("snake", 30, 1, true, 30);
console.log(snake.isDangerous());
console.log(snake.getDailyCalories());

let elephant = new Animal("elephant", 300, 3, false, 5);
console.log(elephant.getBmi());
console.log(elephant.getDailyCalories());

let gazelle = new Animal("gazelle", 50, 1.5, false, 100);
console.log(gazelle.getDailyCalories());
console.log(gazelle.isDangerous());