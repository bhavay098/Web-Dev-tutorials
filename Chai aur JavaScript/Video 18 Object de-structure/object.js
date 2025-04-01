const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// course.courseInstructor

// const {courseInstructor} = course  
// This line extracts the courseInstructor property from the course object and stores it in a variable with the same name (courseInstructor). This is called object destructuring.

const {courseInstructor: instructor} = course  // courseInstructor changed to instructor

// console.log(courseInstructor);
console.log(instructor);




// {
//     "name": "hitesh",
//     "coursename": "js in hindi",     // JSON - JavaScript Object Notation
//     "price": "free"                  // JSON object format
// }

[
    {},
    {},    // JSON array format
    {}
]