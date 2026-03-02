const user = {
    username : "vaibhav",
    price:999,

    wellcomeMessage: function(){
        console.log(`${this.username}, wellcome to website`);
        // console.log(this);
    }
}
// user.wellcomeMessage()
// user.username = "sam"
// user.wellcomeMessage()

// function chai(){
//     let username ="Vaibhav"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Vaibhav"
//     console.log(this.username)
// }
// chai()


// const chai =  () => {
//     let username = "Vaibhav"
//     console.log(this)
// }
// chai()

// const adddTwo =(num1, num2) => {
//     return num1 + num2
// }

// const adddTwo =(num1, num2) =>  num1 + num2

const adddTwo =(num1, num2) =>  ({username:"Harsh"})


console.log(adddTwo(5,4))