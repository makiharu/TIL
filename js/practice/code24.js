// この3人のデータをJSONとして表し、for-in構文を使って全員の情報をコンソールに表示しましょう。

const jsonString = `
    [
        {
            "name": "Steve",
            "job": "lawyer",
            "age": "30",
            "gender": "male"
        },
        {
            "name": "Jack",
            "job": "tennis player",
            "age": "26",
            "gender": "male"
        },
        {
            "name": "Lisa",
            "job": "UX designer",
            "age": "23",
            "gender": "female"
        }
    ]
`;


const profile = JSON.parse(jsonString);
for(const person of profile) {
    for(const key in person) {
        console.log(person[key]);
    }
    console.log("--------------------")
    
}
