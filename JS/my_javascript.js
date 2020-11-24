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

    let listItems = document.querySelectorAll(".container")
    check = true
    for (item of listItems) {
        if (item.querySelector("a").innerHTML.includes(user_input)) {
            item.style.backgroundColor = "green"
            check = false
        }
    }

    if (check) {
        let my_container = document.createElement("div")
        my_container.className = "div-line container"

        let course_name = document.createElement("p")
        let text_name = document.createTextNode(`Course Code: ${user_input}`)
        course_name.appendChild(text_name)
        my_container.appendChild(course_name)

        let para_description = document.createElement("p")
        let text_description = document.createTextNode("N/A")
        para_description.appendChild(text_description)
        my_container.appendChild(para_description)


        let para_date = document.createElement("p")
        let text_date = document.createTextNode("Fall 2020")
        para_date.appendChild(text_date)
        my_container.appendChild(para_date)

        document.body.appendChild(my_container)

    }
}

let course_array = createCourseArray()

findCourse(course_array)