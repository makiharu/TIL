class Students {
    constructor(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    }
}

function setStudentIds(students){
    for (let i = 0; i < students.length ;i++){
        // id を設定
        students[i].id = i + 1;
        console.log("Student " + students[i].firstName + " has an id of " + students[i].id);
    }
}

// 配列インデックスからの取得のため、時間計算量 O(1)
function searchForStudent(id, listOfStudents) {
    let correctId = id-1;
    if(!(correctId >= 0 && correctId <= listOfStudents.length-1)) {
        return "NOT FOUND";
    }
    let studentFound = listOfStudents[correctId];
    return studentFound.firstName + " " + studentFound.lastName;
}

// studentIdからリスト内の探索　時間計算量 O(n)
function searchForStudentLinear(studentId, listOfStudents){
    for (let i = 0; i < listOfStudents.length; i++){
        if(listOfStudents[i].id == studentId){
            let studentFound = listOfStudents[i];
            return studentFound.firstName + " " + studentFound.lastName;
        }
    }
    return "Not FOUND!";
}


let students = [];
students.push(new Student("Paula", "Cooper", 15, 10));
students.push(new Student("Daniel", "Roger", 14, 10));
students.push(new Student("Trevor", "Nishi", 14, 9));
students.push(new Student("Kei", "Hideyoshi", 16, 11));

setStudentIds(students);

console.log("serarch for id of 3 -" + searchForStudent(3, students));