let user
do {
    user = prompt("What is your name?")
} while (isNaN(user) === false || user.length === 1)

console.log(user)

let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
    },
    {
        name: "James",
        age: 40,
        location: "Toronto"
    },
    {
        name: "Garry",
        age: 20,
        location: "Vancouver"
    }
];

function findStudentsInVancouver() {
    let studentsInVancouver = [];
    for (let i = 0; i < students.length; i++) {
       if (students[i].location === "Vancouver") {
           console.log(`${students[i].name} live in ${students[i].location}`);
           studentsInVancouver.push(students[i]);
       }
    }
    return studentsInVancouver;
}

const returnArray = findStudentsInVancouver();
console.log(returnArray);
