const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ORGB 1100", name: "Organizational Behaviour" },
    { code: "ACIT 1515", name: "Scripting for IT" },
]

do {
    user_input = prompt("Enter a 4 digit code")
} while (user_input.length !== 4 || isNaN(Number(user_input)));

let temp = { code: null, name: null }
let check = true;

for (let item of courseList) {
    if (item.code.includes(user_input) === true) {
        console.log(`Yes I am taking the course: ${item.code} - ${item.name}`)
        check = false;
        break;
    }
}
if (check) {
    temp.code = user_input
    courseList.push(temp)
}


console.log(courseList)