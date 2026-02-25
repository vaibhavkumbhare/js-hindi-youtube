const name = "vaibhav"
const repoCount = 50

// console.log(name + repoCount +" Value"); // not use 
// console.log(`Hello my name is  ${name} and my repoCount is ${repoCount}`);  // use this always


const gameName = new String('Hitesh-hc')
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'));
console.log(gameName.split('-'))

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  hitesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%20kumbhare"

console.log(url.replace('%20', '_'))

console.log(url.includes('.com'));