//arrays

const myarr = [0,1,2,3,4,5,6,7]
const myheros = ["shaktiman", "naagraj"]

const myarr2 = new Array(1,2,3,4)
console.log(myarr[1]);


//array methods

myarr.push(8)
myarr.push(9)
myarr.pop()

myarr.unshift(9)
myarr.shift()


console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newarr = myarr.join()

console.log(myarr);
console.log(newarr); // output => string

console.log(myarr);

slice, splice

console.log("A", myarr);

const mya1 = myarr.slice(1,3)
console.log(mya1);
console.log("B", myarr);

const mya2 = myarr.splice(1,3)
console.log("C", myarr);
console.log(mya2);


//+++++++++++++++++++++++++ ARRAYS ++++++++++++++++++++++++++++++++++