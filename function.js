function start() {
    console.log("This is a function"); // statement 1
  }
  
  start;
  
 start(); //--> this runs line 1 in func Body, i.e statement 1
  // o/p->This is a function
  
  function stop() {
    const x = 10; // statement 1
    return x; // statement 2
  }
  
  stop();
   function sum(){
    const x=10;
    const y=20;
    z=x+y;
    return z;
   }
   const addition= sum();
   console.log(addition);
   /////////////////////////////////////////////////////////////////
   let x= product(3, 4);
   function product(a, b){
        return a*b;
   }
console.log(x);
let y= product(5, 6);
console.log(y);
//////////////////////////////
function toCelcius(fahrenheit){
  /*console.log("toCelcius string");*/
  return (5/9)*(fahrenheit - 32)
}
let value= toCelcius(100);
console.log(value);
///////////////////////////////
//accessing a function not it's return value
let value2= toCelcius;
console.log(value2);
console.log("the temprature is "+value+" Celsius");
console.log("the temprature is "+toCelcius(77)+" Celsius");
/////////////////////////////////////////////////////////////////////
function getName(o){
  return o.model
}
const n1= getName("hello")
const n2= getName(20)
const n3= getName([10,20,30])
const n4= getName({model:"2025",price:100})
console.log({n1,n2,n3,n4});

console.log("hello".x);
let v =25;
console.log(v.name);

// {
//   const p={name:"Bablu"};
//   const n=getName(p);
//   console.log(n);
  
// }
function substraction(a,b){
  const c =a-b;
  return c;
}
let value3 =substraction;
value3=(20,10);
console.log(value3);
