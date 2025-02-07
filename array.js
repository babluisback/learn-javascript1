let country = ["india", "China", "USA", "UK"];
console.log(country[2]);
console.log(country.length);
country[2] = "united States Of America";
console.log(country);
console.log(country.length);
console.log(country.length - 1);
//////////////////////////////////////////////////////////////////////////////
const country1 = ["Finland", "Sweeden", "Norway", {}, [], ""];
console.log(country1);
console.log(country1[1]);
country1.push("Denmark"); //add Denmark in the last of array
console.log(country1);

let lastRemove = country1.pop(); //removes the last country from array list and store in lasrRemove
console.log(country1);
console.log(lastRemove);
//////// shift method//////////////////////////////////////////
const firstRemove = country1.shift(); // removes the first element in the list
console.log("Remode first country from list ->", firstRemove);
console.log(country1);

///Unshift method///////////////////////////////////
country1.unshift("Iceland"); //add new country in the array list at the start of list.
console.log(country1);

//////////// indexOf //////////////////////////////////////////
let index = country1.indexOf("Sweeden"); //know the index of an element in the list
console.log(index);
console.log("Index of Sweeden is ->", index);

if (index !== -1) {
  country1[index] = "Sweden (Updated)";
}
console.log(country1);
//////////////////// len(length) //////////////////////////////////////////////////////
//know the length of array list len property is used
const len = country1.length;
console.log("Length of the country1 array is ->", len);
//print the lasst country in the list
console.log(country1[len - 2]);
