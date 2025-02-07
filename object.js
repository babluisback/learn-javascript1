//All examples of
let vehicle;

vehicle = { type: "Car", model: "Toyota", year: 2020 };

console.log(vehicle["type"]);
console.log(vehicle.type);
let x = "16" + "Volvo";
console.log(typeof x);
console.log(x);
let y = 16 + "Volvo"; //When adding a number and a string, JavaScript will treat the number as a string.
console.log(typeof y, y);
let z = 16 + 4 + "Volvo" + "Maruti";
console.log(typeof z, z);
let a = 15 + 7 + "Volvo" + 16 + 4;
console.log(typeof a, a);

const Person = { fname: "Bablu", lname: "Alam", address: "Neamatpur" };
console.log(Person.fname);
console.log(Person["lname"]);
//empty object
const bird = {};
console.log(typeof bird);
bird.wings = 72;
bird.leg = 2;
bird.fly = true;
console.log(bird);
const bike = new Object();
bike.model = "honda";
bike.year = 2025;
console.log(bike);
console.log(bike["year"]);
