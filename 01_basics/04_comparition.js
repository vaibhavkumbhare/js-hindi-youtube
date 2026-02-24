// console.log(2 != 1);
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);

// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null == 0);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined < 0);



// console.log("2" === 2)   //  chak karna variable hai ki nahi hai 






//++++++++++++++++++++++++++++++++++++++++++++++++++++///////////+++++++++++++++++++++++++++++++++++++++++
 

// Stack (Primitive), Heap (Not-primitive)

let myYoutubename = "vaibhav@google.com"

// let anothername = myYoutubename
let anothername = "Youtube"

// console.log(myYoutubename);
// console.log(anothername);




// Heap (Not-primitive)

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "vaibhav.gmail.com"

console.log(userOne.email);