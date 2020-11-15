const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ORGB 1100", name: "Organizational Behaviour" },
    { code: "ACIT 1515", name: "Scripting for IT" },
]

do {
    user_input = prompt("Enter a 4 digit code")
} while (user_input.length !== 4 || isNaN(Number(user_input)));

let temp = { code: null, name: null }
let counter = 0;
for (let item of courseList) {
    if (item.code.includes(user_input) === true) {
        console.log(`Yes I am taking the course: ${item.code} - ${item.name}`)
    } else {
        counter += 1
    }
}
if (counter === courseList.length) {
    do {
        second_input = prompt("Enter a new 4 digit code")
    } while (second_input.length !== 4 || isNaN(Number(user_input)));
    temp.code = second_input
    courseList.push(temp)
}

console.log(courseList)