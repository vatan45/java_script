let mydate = new Date()

console.log(mydate);

console.log(mydate.toString());

console.log(mydate.toDateString());


console.log(mydate.toLocaleString());

console.log(typeof mydate);

// let myCreatteddate = new Date(2023, 0, 23)

// let myCreatteddate = new Date(2023, 0, 23, 5, 3)

// let myCreatteddate = new Date("2023-01-14")

// let myCreatteddate = new Date("01-14-2023")


console.log(myCreateddate.toLocaleString());


let mytimestamp = Date.now()

console.log(mytimestamp);


console.log(myCreateddate.getTime());
console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate.getHours());


newdate.toLocaleString('default', {
    weekday: "long"
})

