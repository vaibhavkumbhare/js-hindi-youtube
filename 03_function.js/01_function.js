

function sayMyname(){
    console.log("v")
    console.log("a")
    console.log("i")    
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("v")
}
// sayMyname()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }
// console.log(addTwoNumber(5,4));

function addTwoNumber(number1,number2){
    let result = number1 + number2
    // console.log("Vaibhav");
    return result
}
const result = addTwoNumber(3 ,5) 
console.log("Result: ", result);


function logiUserMessage(username){
    if( !username){
        console.log ("plese enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(logiUserMessage())
// console.log(logiUserMessage("vaibhav"))

// ************************************ Function and Object ************************************

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,51,500,200,300))

// function calculateCartPrice(val1,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,51,500,200,300))

const user ={
    username:"Vaibhav",
    prices:100
} 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}
// hfandleObject(user)
/*handleObject({
    username: "Harsh",
    prices:399
})*/

const myNewArray = [200,400,600,800,1000]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200,400,600,800,1000]))

