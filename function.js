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
