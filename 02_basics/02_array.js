const marvel_hero =["thor", "Ironman", "spiderman"]
const dc_hero = ["superman","flash","batman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][1])

// const allHeros = marvel_hero.concat(dc_hero)
// console.log(allHeros)

const all_new_heros =[...marvel_hero,  ...dc_hero]  //  sace o/p is concat
// console.log(all_new_heros) 

// const anotherr_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7 ,8,[4,5 ] ]]
// const real_another_array = anotherr_array.flat(Infinity)
// console.log(real_another_array);


console.log("uhuhuy",Array.isArray())
console.log(Array.from("Vaibhav"))
console.log(Array.from({name: "Vaibhva"})) 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));