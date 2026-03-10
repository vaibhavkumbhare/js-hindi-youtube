const coding =["js", "ruby", "java","python", "cpp"] 

// coding.forEach(function (name) {
//     console.log(name)
// })

// coding.forEach( (badi => {
//     console.log(badi)
// }))

// function printMe (name){
//     console.log(name)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, vaibhav) => {
//     console.log(item, index , vaibhav)
// } )

const myCoding = [
    {
        languagrName: "javascript",
        languagrFlileName: "js"
    },
    {
        languagrName: "java",
        languagrFlileName: "java"
    },
    {
        languagrName: "python",
        languagrFlileName: "py"
    }, 
]

myCoding.forEach( (item) => {
    console.log(item.languagrName)
} )