//  var c = 30 // use nahi karna ka 
let a = 300 
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}
//  console.log(a)


function one(){
    const username = "Vaibhav"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    two()
}

 if (true){
    const username ="Vaibhav"
    if (username === "Vaibhav"){
        const website = "Youtube"
        console.log(username + website);
    }
 }

//  ++++++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num +1 
}
console.log(addone(5))

const adddTwo = function(num){
    return num + 2
}
console.log(adddTwo(5))