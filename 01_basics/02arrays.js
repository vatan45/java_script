const marvelheroes = ["thor", "ironman", "spiderman"]
const dcheroes = ["superman", "flash", "batman"]

// marvelheroes.push(dcheroes)


// console.log(marvelheroes);
// console.log(marvelheroes[3][1]);

// marvelheroes.concat(dcheroes)
// console.log(marvelheroes);

// const allheroes = marvelheroes.concat(dcheroes)
// console.log(allheroes);

const all_new_heroes = [...marvelheroes, ...dcheroes]

console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vatan"))
console.log(Array.from("vatan"))
console.log(Array.from({name: "vatan"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
