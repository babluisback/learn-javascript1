function evenOdd(num) {
  // console.log("this number is even");
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOdd(2);
///////////////////////////////////
function isDevisibleByThree(num) {
  // console.log("this number is even");
  if (num % 3 == 0) {
    console.log("true");
  } else {
    console.log("not");
  }
}
isDevisibleByThree(7);
//////////////////////////////////////
function isEven(num) {
  if (num % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
//////////////////////////////////////////
function isDevisibleByThreeAndEven(num) {
  if ((num % 3 === 0, num % 2 === 0)) {
    console.log("number " + num + " is devisible by three and even");
  } else {
    console.log("number " + num + " is devisible by three but not even");
  }
}
isDevisibleByThreeAndEven(7);
