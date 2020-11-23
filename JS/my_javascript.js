let course_array = createCourseArray()

function createCourseArray() {
    let listItems = document.querySelectorAll(".container a");
    let x = document.querySelectorAll(".Date");
    let count = 0;

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