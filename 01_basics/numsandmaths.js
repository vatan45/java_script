const score = 400
console.log(score);// output 400
const balance = new Number(100)
console.log(balance); // output = [number: 100]


console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const anothernumber = 23.6653

console.log(anothernumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++


console.log(Math)


console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));


console.log(Math.random());

console.log((Math.random()*10) +1);

console.log((Math.floor(Math.random()*10))+1);

const min = 10
const max = 30



console.log(Math.floor(Math.random() * (max - min +1 )));