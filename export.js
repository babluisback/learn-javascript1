const x = 10;

// math.js - Exporting functions
function add(a, b) {
  return a + b;
}
// commonjs syntax
module.exports = { x };

//ES module syntax
// export { x }; //first way to export
// export default x; //second way
let students = [
  { name: "Alice", age: 22, grade: "A" },
  { name: "Bob", age: 25, grade: "B" },
  { name: "Charlie", age: 23, grade: "C" },
];
// module.exports = { students };
