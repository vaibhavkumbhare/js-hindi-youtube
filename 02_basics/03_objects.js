// f object literals

const mySym =Symbol("key1")

const JsUser ={
    name : "Vaibhav",
    "full name": "Vaibhav Kumbhare",
    [mySym]: "mykey1",
    age :19,
    location: "Ahmedabad",
    email: "vaibhav.45@gmail.com",
    isLoggedIn :false,
    lastLoginDays: ["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vaibhav.45@chatgot.com" // value change
// Object.freeze(JsUser)  // value fix 
JsUser.email = "vaibhav@microsoft.com" // value is not update beacause of fix is used
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());