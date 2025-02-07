function addNumber(a, b, ...rest) {
  console.log(rest);
  return a + b + rest[0];
}
const val1 = addNumber(10, 20, 30, 40);
console.log(val1);
//////////////////////////////////////////////////////////////////

function getName(name1, name2, ...rest1) {
  console.log(name1, name2, rest1);
}

const names = ["bablu", { key: "gaurav" }, "yuvi", "nasib"];
getName(...names);
// console.log(names[0], names[1]);
// console.log(rest1[1]);
