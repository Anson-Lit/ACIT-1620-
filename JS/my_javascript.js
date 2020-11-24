function createCourseArray() {
    let listItems = document.querySelectorAll(".container a")
    let x = document.querySelectorAll(".Date")
    let count = 0

    date_array = []
    for (item of x) {
        date_array.push(item.innerHTML)
    }
    newArray = []

    for (let item of listItems) {
        tempObject = { code: null, date: null }
        tempObject.code = item.innerHTML
        tempObject.date = date_array[count]
        count++

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