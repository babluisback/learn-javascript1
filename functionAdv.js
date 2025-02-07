function start() {
  console.log("This is start function");
}
function stop() {
  let x = 10;
  console.log("This is stop function");
  return x;
}
start();
stop();
const val1 = stop;
console.log(val1);
const val2 = stop();
console.log(val2);
const vehicle = { type: "car", model: [2020, 2021, 2025], color: "Blue" };
console.log(typeof vehicle);
console.log(vehicle.model[1]);
console.log(vehicle);
const aray = [10, 20, 30, 40];
const obj = {};
const vehicle2 = {
  type: "car",
  model: [2020, 2021, 2025],
  color: "Blue",
  val1,
  val2,
  brake: function brake() {
    //if there is a function in property it's called method.
    const x = 30;
    // console.log("This is brake of car");
    return x;
  },
};
console.log(vehicle2);
