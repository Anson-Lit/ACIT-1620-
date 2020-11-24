function createCourseArray() {
    let listItems = document.querySelectorAll(".container")
    newArray = []
    for (item of listItems) {
        tempObject = { code: null, date: null }
        tempObject.code = (item.querySelector("a").innerHTML)
        tempObject.date = (item.querySelector(".Date").innerHTML)
        newArray.push(tempObject)
    }
    return (newArray)
}


function findCourse(courseList) {
    do {
        user_input = prompt("Enter a 4 digit code")
    } while (user_input.length !== 4 || isNaN(Number(user_input)))

    let listItems = document.querySelectorAll(".container a")
    check = true
    for (item of listItems) {
        if (item.innerHTML.includes(user_input)) {
            item.style.backgroundColor = "green"
            check = false
        }
    }
    if (check) {
        let para = document.createElement("p")
        let text = document.createTextNode(`Course code: ${user_input} N/A Fall 2020`)
        para.appendChild(text)
        document.body.appendChild(para)
    }
}


let course_array = createCourseArray()

findCourse(course_array)