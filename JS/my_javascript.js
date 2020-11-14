const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ORGB 1100", name: "Organizational Behaviour" },
    { code: "ACIT 1515", name: "Scripting for IT" },
]

do {
    user_input = prompt("Enter a 4 digit code")
} while (user_input.length !== 4 || isNaN(Number(user_input)));
// for (let x = 0; x < courseList.length; x++) {
//     if (user_input === courseList[x].code) {
//         console.log("hello")
//     }
// }