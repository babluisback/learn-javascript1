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
