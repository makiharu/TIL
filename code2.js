class Person {
    constructor(firstName, lastName, heightM,weightKg,birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.heightM = heightM;
        this.weightKg = weightKg;
        this.birthYear = birthYear;
    }

    // 状態を返す
    getStateString() {
        return "first Name" + this.firstName + ",Last Name:" + this.lastName + ", heightM:" + this.heightM + ",weightKg:"
+ this.weightKg + ",birthYear:" + this.birthYear;
    }

    // フルネームを返す
    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    // 現在の年齢を返す
    getAge() {
        let nowYear = new Date().getFullYear();
        return nowYear - this.birthYear;
    }

    // カロリーを受け取り、摂取後の体重を計算
    eat(calories) {
        // 7700キロカロリーごとに1キロ増加
        this.weightKg += calories/7700;
        return this.weightKg;
    }

   // 運動の種類を受け取り、1 分間に消費されたカロリー数を計算する
   caloriesBurnedPerMinuteExercise(exercise) {
    // 燃焼カロリー Metabolic Equivalent of Task
    let met = 1;
    if(exercise == "running") met = 8;
    else if(exercise == "walking") met = 3;
    else if(exercise == "tennis") met = 5;
    else if(exercise == "rope jump") met = 9; 

    return met * 3.5 * this.weightKg;
   }
   // 運動の種類を受け取り、1kg 痩せるのに何時間かかるかを計算する
   hoursToLose1KgByExercise(exercise) {
    return 7700 / this.caloriesBurnedPerMinuteExercise(exercise) / 60;
   }

   // 運動、時間を入力として受け取り、燃焼されたカロリー数を計算し、体重を更新して新しい体重を返す
   exercise(exercise, minutes){
    let calories = this.caloriesBurnedPerMinuteExercise(exercise) * minutes;
    this.weightKg -= 7700 / calories;
    return this.weightKg;
   }

}

let taro = new Person("Taro", "Tanaka", 1.72, 85.5, 1996);
let hanako = new Person("Hanako", "Sato", 1.5, 40.5, 1998);

console.log(taro.heightM);
console.log(hanako.birthYear);

console.log(taro.getFullName());
console.log(taro.getAge());


console.log(taro.eat(7700));
console.log("It takes carly: " + taro.hoursToLose1KgByExercise("running") + " hours running to burn 1 kg");

console.log("太郎のダイエット:" + taro.exercise("running", 600));
