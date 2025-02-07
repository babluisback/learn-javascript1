///// forEach()//////////////////////////////////
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
fruits.forEach(function (element, index, array) {
  console.log(element + "Is in index of -> " + index);
  //   console.log(index);
  //   console.log(array);
});
///////////////////////////////////////////////////////
//using is arrow function////
fruits.forEach((items) => {
  console.log(items);
});
//////////////////////////////////////////
let shoppingItem = ["Milk", "Bread", "Rice", "Butter"];
shoppingItem.forEach((item) => {
  console.log("Shopping items is ", item);
});
//////////////table///////////////
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach((a, b) => {
  //   console.log(a * 3);
});
///////////////Sum of array//////////////////////////
let sum = 0;
num.forEach((c, d) => {
  sum = sum + c;
});
console.log(sum);
//////////// check how many times a letter in the array///////
let letter = ["a", "b", "c", "b", "d", "e", "a", "b", "e"];
let count = {};
letter.forEach((i) => {
  if (count[i]) {
    count[i] = count[i] + 1;
  } else {
    count[i] = 1;
  }
});
console.log(count);
///////////////////////////////////////////////////
let count1 = {};
letter.forEach((item1) => {
  if (count1[item1]) {
    count1[item1] += 1;
  } else {
    count1[item1] = 1;
  }
});
console.log(count1);
////////////////// map() method ////////////////////////
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleNumber2 = num1.map(double);

function double(val, ind, arr) {
  return val * 4;
}
console.log(doubleNumber2);

function multiplyIndex(val, ind, arr) {
  return val * ind;
}
let newIndexValue = num1.map(multiplyIndex);
console.log(newIndexValue);

///////////////////////////////////////////////
let doubleNumber = num1.map((num2) => num2 * 2);
console.log(doubleNumber);
////////////////////////////////////////////////
let doubleNumber1 = num1.map(function (num3) {
  return num3 * 3;
});
console.log(doubleNumber1);
///////////////////////////////////////////////////////////////
let students = [
  { name: "Alice", age: 22, grade: "A" },
  { name: "Bob", age: 25, grade: "B" },
  { name: "Charlie", age: 23, grade: "C" },
];
const onlyKey = students.map((key) => key.name);
const onlyAge = students.map((age) => age.age);

console.log(onlyKey);
console.log(onlyAge);

///////////////////////////////////////////////////////////////
/*let numbers = [10, 20, 30, 40, 50];
Practice:

1-Print each number using forEach().
2-Multiply each number by 2 using map().
3-Filter numbers greater than 25 using filter()
*/
let numbers = [10, 20, 30, 40, 50];
numbers.forEach((num4) => {
  console.log(num4);
});
let numDouble = numbers.map((num5) => num5 * 2);
console.log(numDouble);
